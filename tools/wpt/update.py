import os
import sys

wpt_root = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir, os.pardir))
sys.path.insert(0, os.path.abspath(os.path.join(wpt_root, "tools")))


def manifest_update(test_paths):
    from manifest import manifest
    for url_base, paths in test_paths.items():
        manifest_path = paths["manifest_path"]
        manifest.load_and_update(
            paths["tests_path"],
            manifest_path,
            url_base)


def create_parser_update():
    from wptrunner import wptcommandline

    return wptcommandline.create_parser_metadata_update()


def update_expectations(venv, **kwargs):
    from wptrunner import metadata, products, wptcommandline

    if not kwargs["tests_root"]:
        kwargs["tests_root"] = wpt_root

    # This matches the manifest path we end up using in `wpt run`
    if not kwargs["manifest_path"]:
        kwargs["manifest_path"] = os.path.join(wpt_root, "MANIFEST.json")

    if "product" not in kwargs["extra_property"]:
        kwargs["extra_property"].append("product")

    # By default update according to product.
    # If we passed in the name of a product, then use the configured update properties
    # for that product.
    if kwargs["product"]:
        update_properties = products.load_product_update(kwargs["config"], kwargs["product"])
        if kwargs["extra_property"]:
            update_properties[0].extend(kwargs["extra_property"])
    else:
        update_properties = (kwargs["extra_property"], {})

    kwargs = wptcommandline.check_args_metadata_update(kwargs)

    manifest_update(kwargs["test_paths"])
    metadata.update_expected(kwargs["test_paths"],
                             kwargs["run_log"],
                             update_properties=update_properties,
                             full_update=False,
                             disable_intermittent=kwargs["update_intermittent"],
                             update_intermittent=kwargs["update_intermittent"],
                             remove_intermittent=kwargs["update_intermittent"])
