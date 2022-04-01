/**
 * Utilities for initiating prefetch via speculation rules.
 */

// Resolved URL to find this script.
const SR_PREFETCH_UTILS_URL = new URL(document.currentScript.src, document.baseURI);

class PrefetchAgent extends RemoteContext {
  constructor(uuid, t) {
    super(uuid);
    this.t = t;
  }

  getExecutorURL(hostname = null, extra = {}) {
    let params = new URLSearchParams({uuid: this.context_id, ...extra});
    let base = new URL(SR_PREFETCH_UTILS_URL);
    if(hostname!=null) {
      base.hostname = hostname;
    }
    return new URL(`executor.sub.html?${params}`, base.href);
  }

  // Requests prefetch via speculation rules.
  //
  // In the future, this should also use browser hooks to force the prefetch to
  // occur despite heuristic matching, etc., and await the completion of the
  // prefetch.
  async forceSinglePrefetch(url, extra = {}) {
    await this.execute_script((url, extra) => {
      insertSpeculationRules({ prefetch: [{source: 'list', urls: [url], ...extra}] });
    }, [url, extra]);
    return new Promise(resolve => this.t.step_timeout(resolve, 3000));
  }

  async navigate(url) {
    await this.execute_script((url) => {
      window.executor.suspend(() => {
        location.href = url;
      });
    }, [url]);
    assert_equals(
        await this.execute_script(() => location.href),
        url.toString(),
        "expected navigation to reach destination URL");
    await this.execute_script(() => {});
  }

  async getRequestHeaders() {
    return this.execute_script(() => requestHeaders);
  }
}

// Must also include /common/utils.js and /common/dispatcher/dispatcher.js to use this.
async function spawnWindow(t) {
  let agent = new PrefetchAgent(token(), t);
  let w = window.open(agent.getExecutorURL());
  t.add_cleanup(() => w.close());
  return agent;
}

function insertSpeculationRules(body) {
  let script = document.createElement('script');
  script.type = 'speculationrules';
  script.textContent = JSON.stringify(body);
  document.head.appendChild(script);
}
