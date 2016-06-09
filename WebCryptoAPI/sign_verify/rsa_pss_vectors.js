
// rsa_pss_vectors.js

// Data for testing RSA-PSS with a 2048-bit modulus and 65537 public exponent.

// The following function returns an array of test vectors
// for the subtleCrypto encrypt method.
//
// Each test vector has the following fields:
//     name - a unique name for this vector
//     publicKeyBuffer - an arrayBuffer with the key data
//     publicKeyFormat - "spki" "jwk"
//     publicKey - a CryptoKey object for the keyBuffer. INITIALLY null! You must fill this in first to use it!
//     privateKeyBuffer - an arrayBuffer with the key data
//     privateKeyFormat - "pkcs8" or "jwk"
//     privateKey - a CryptoKey object for the keyBuffer. INITIALLY null! You must fill this in first to use it!
//     algorithm - the value of the AlgorithmIdentifier parameter to provide to encrypt
//     plaintext - the text to encrypt
//     signature - the expected signature
function getTestVectors() {
    var pkcs8 = new Uint8Array([48, 130, 4, 191, 2, 1, 0, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 4, 130, 4, 169, 48, 130, 4, 165, 2, 1, 0, 2, 130, 1, 1, 0, 211, 87, 96, 146, 230, 41, 87, 54, 69, 68, 231, 228, 35, 59, 123, 219, 41, 61, 178, 8, 81, 34, 196, 121, 50, 133, 70, 249, 240, 247, 18, 246, 87, 196, 177, 120, 104, 201, 48, 144, 140, 197, 148, 247, 237, 0, 192, 20, 66, 193, 175, 4, 194, 246, 120, 164, 139, 162, 200, 15, 209, 113, 62, 48, 181, 172, 80, 120, 122, 195, 81, 101, 137, 241, 113, 150, 127, 99, 134, 173, 163, 73, 0, 166, 187, 4, 238, 206, 164, 43, 240, 67, 206, 217, 160, 249, 77, 12, 192, 158, 145, 155, 157, 113, 102, 192, 138, 182, 206, 32, 70, 64, 174, 164, 196, 146, 13, 182, 216, 110, 185, 22, 208, 220, 192, 244, 52, 26, 16, 56, 4, 41, 231, 225, 3, 33, 68, 234, 148, 157, 232, 246, 192, 204, 191, 149, 250, 142, 146, 141, 112, 216, 163, 140, 225, 104, 219, 69, 246, 241, 52, 102, 61, 111, 101, 111, 92, 234, 188, 114, 93, 168, 192, 42, 171, 234, 170, 19, 172, 54, 167, 92, 192, 186, 225, 53, 223, 49, 20, 182, 101, 137, 199, 237, 60, 182, 21, 89, 174, 90, 56, 79, 22, 43, 250, 128, 219, 228, 97, 127, 134, 195, 241, 208, 16, 201, 79, 226, 201, 191, 1, 154, 110, 99, 179, 239, 192, 40, 212, 60, 238, 97, 28, 133, 236, 38, 60, 144, 108, 70, 55, 114, 198, 145, 27, 25, 238, 192, 150, 202, 118, 236, 94, 49, 225, 227, 2, 3, 1, 0, 1, 2, 130, 1, 1, 0, 139, 55, 92, 203, 135, 200, 37, 197, 255, 61, 83, 208, 9, 145, 110, 150, 65, 5, 126, 24, 82, 114, 39, 160, 122, 178, 38, 190, 16, 136, 129, 58, 59, 56, 187, 123, 72, 243, 119, 5, 81, 101, 250, 42, 147, 57, 210, 77, 198, 103, 213, 197, 186, 52, 39, 230, 164, 129, 23, 110, 172, 21, 255, 212, 144, 104, 49, 30, 28, 40, 59, 159, 58, 142, 12, 184, 9, 180, 99, 12, 80, 170, 143, 62, 69, 166, 11, 53, 158, 25, 191, 140, 187, 94, 202, 214, 78, 118, 31, 16, 149, 116, 63, 243, 106, 175, 92, 240, 236, 185, 127, 237, 173, 221, 166, 11, 91, 243, 93, 129, 26, 117, 184, 34, 35, 12, 250, 160, 25, 47, 173, 64, 84, 126, 39, 84, 72, 170, 51, 22, 191, 142, 43, 76, 224, 133, 79, 199, 112, 139, 83, 123, 162, 45, 19, 33, 11, 9, 174, 195, 122, 39, 89, 239, 192, 130, 161, 83, 27, 35, 169, 23, 48, 3, 125, 222, 78, 242, 107, 95, 150, 239, 220, 195, 159, 211, 76, 52, 90, 213, 28, 187, 228, 79, 229, 139, 138, 59, 78, 201, 151, 134, 108, 8, 109, 255, 27, 136, 49, 239, 10, 31, 234, 38, 60, 247, 218, 205, 3, 192, 76, 188, 194, 178, 121, 229, 127, 165, 185, 83, 153, 107, 251, 29, 214, 136, 23, 175, 127, 180, 44, 222, 247, 165, 41, 74, 87, 250, 194, 184, 173, 115, 159, 27, 2, 153, 2, 129, 129, 0, 251, 248, 51, 194, 198, 49, 201, 112, 36, 12, 142, 116, 133, 240, 106, 62, 162, 168, 72, 34, 81, 26, 134, 39, 221, 70, 78, 248, 175, 175, 113, 72, 209, 164, 37, 182, 184, 101, 125, 221, 82, 70, 131, 43, 142, 83, 48, 32, 197, 187, 181, 104, 133, 90, 106, 236, 62, 66, 33, 215, 147, 241, 220, 91, 47, 37, 132, 226, 65, 94, 72, 233, 162, 189, 41, 43, 19, 64, 49, 249, 156, 142, 180, 47, 192, 188, 208, 68, 155, 242, 44, 230, 222, 201, 112, 20, 239, 229, 172, 147, 235, 232, 53, 135, 118, 86, 37, 44, 187, 177, 108, 65, 91, 103, 177, 132, 210, 40, 69, 104, 162, 119, 213, 147, 53, 88, 92, 253, 2, 129, 129, 0, 214, 184, 206, 39, 199, 41, 93, 93, 22, 252, 53, 112, 237, 100, 200, 218, 147, 3, 250, 210, 148, 136, 193, 166, 94, 154, 215, 17, 249, 3, 112, 24, 125, 187, 253, 129, 49, 109, 105, 100, 139, 200, 140, 197, 200, 53, 81, 175, 255, 69, 222, 186, 207, 182, 17, 5, 247, 9, 228, 195, 8, 9, 185, 0, 49, 235, 214, 134, 36, 68, 150, 198, 246, 158, 105, 46, 189, 200, 20, 246, 66, 57, 244, 173, 21, 117, 110, 203, 120, 197, 165, 176, 153, 49, 219, 24, 48, 119, 197, 70, 163, 140, 76, 116, 56, 137, 173, 61, 62, 208, 121, 181, 98, 46, 208, 18, 15, 160, 225, 249, 59, 89, 61, 183, 216, 82, 224, 95, 2, 129, 128, 56, 135, 75, 157, 131, 247, 129, 120, 206, 45, 158, 252, 23, 92, 131, 137, 127, 214, 127, 48, 107, 191, 166, 159, 100, 238, 52, 35, 104, 206, 212, 124, 128, 195, 241, 206, 23, 122, 117, 141, 100, 186, 251, 12, 151, 134, 164, 66, 133, 250, 1, 205, 236, 53, 7, 205, 238, 125, 201, 183, 226, 178, 29, 60, 187, 204, 16, 14, 238, 153, 103, 132, 59, 5, 115, 41, 253, 204, 166, 41, 152, 237, 15, 17, 179, 140, 232, 176, 171, 199, 222, 57, 1, 124, 113, 207, 208, 174, 87, 84, 108, 85, 145, 68, 205, 208, 175, 208, 100, 95, 126, 168, 255, 7, 185, 116, 209, 237, 68, 253, 31, 142, 0, 245, 96, 191, 109, 69, 2, 129, 129, 0, 133, 41, 239, 144, 115, 207, 143, 123, 95, 249, 226, 26, 186, 223, 58, 65, 115, 211, 144, 6, 112, 223, 175, 89, 66, 106, 188, 223, 4, 147, 193, 61, 47, 29, 27, 70, 184, 36, 166, 172, 24, 148, 179, 217, 37, 37, 12, 24, 30, 52, 114, 193, 96, 120, 5, 110, 177, 154, 141, 40, 247, 31, 48, 128, 146, 117, 52, 129, 212, 148, 68, 253, 247, 140, 158, 166, 194, 68, 7, 220, 1, 142, 119, 211, 175, 239, 56, 91, 47, 247, 67, 158, 150, 35, 121, 65, 51, 45, 212, 70, 206, 190, 255, 219, 68, 4, 254, 79, 113, 89, 81, 97, 208, 22, 64, 44, 51, 77, 15, 87, 198, 26, 190, 79, 249, 244, 203, 249, 2, 129, 129, 0, 135, 216, 119, 8, 212, 103, 99, 228, 204, 190, 178, 209, 233, 113, 46, 91, 240, 33, 109, 112, 222, 148, 32, 165, 178, 6, 155, 116, 89, 185, 159, 93, 159, 127, 47, 173, 124, 215, 154, 174, 230, 122, 127, 154, 52, 67, 126, 60, 121, 168, 74, 240, 205, 141, 233, 223, 242, 104, 235, 12, 71, 147, 245, 1, 249, 136, 213, 64, 246, 211, 71, 92, 32, 121, 184, 34, 122, 35, 217, 104, 222, 196, 227, 198, 101, 3, 24, 113, 147, 69, 150, 48, 71, 43, 253, 182, 186, 29, 231, 134, 199, 151, 250, 111, 78, 166, 90, 42, 132, 25, 38, 47, 41, 103, 136, 86, 203, 115, 201, 189, 75, 200, 155, 94, 4, 27, 34, 119]);
    var spki = new Uint8Array([48, 130, 1, 34, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 3, 130, 1, 15, 0, 48, 130, 1, 10, 2, 130, 1, 1, 0, 211, 87, 96, 146, 230, 41, 87, 54, 69, 68, 231, 228, 35, 59, 123, 219, 41, 61, 178, 8, 81, 34, 196, 121, 50, 133, 70, 249, 240, 247, 18, 246, 87, 196, 177, 120, 104, 201, 48, 144, 140, 197, 148, 247, 237, 0, 192, 20, 66, 193, 175, 4, 194, 246, 120, 164, 139, 162, 200, 15, 209, 113, 62, 48, 181, 172, 80, 120, 122, 195, 81, 101, 137, 241, 113, 150, 127, 99, 134, 173, 163, 73, 0, 166, 187, 4, 238, 206, 164, 43, 240, 67, 206, 217, 160, 249, 77, 12, 192, 158, 145, 155, 157, 113, 102, 192, 138, 182, 206, 32, 70, 64, 174, 164, 196, 146, 13, 182, 216, 110, 185, 22, 208, 220, 192, 244, 52, 26, 16, 56, 4, 41, 231, 225, 3, 33, 68, 234, 148, 157, 232, 246, 192, 204, 191, 149, 250, 142, 146, 141, 112, 216, 163, 140, 225, 104, 219, 69, 246, 241, 52, 102, 61, 111, 101, 111, 92, 234, 188, 114, 93, 168, 192, 42, 171, 234, 170, 19, 172, 54, 167, 92, 192, 186, 225, 53, 223, 49, 20, 182, 101, 137, 199, 237, 60, 182, 21, 89, 174, 90, 56, 79, 22, 43, 250, 128, 219, 228, 97, 127, 134, 195, 241, 208, 16, 201, 79, 226, 201, 191, 1, 154, 110, 99, 179, 239, 192, 40, 212, 60, 238, 97, 28, 133, 236, 38, 60, 144, 108, 70, 55, 114, 198, 145, 27, 25, 238, 192, 150, 202, 118, 236, 94, 49, 225, 227, 2, 3, 1, 0, 1]);

    // plaintext for RSA-PSS
    var plaintext = new Uint8Array([95, 77, 186, 79, 50, 12, 12, 232, 118, 114, 90, 252, 229, 251, 210, 91, 248, 62, 90, 113, 37, 160, 140, 175, 231, 60, 62, 186, 196, 33, 119, 157, 249, 213, 93, 24, 12, 58, 233, 148, 38, 69, 225, 216, 47, 238, 140, 157, 41, 75, 60, 177, 160, 138, 153, 49, 32, 27, 60, 14, 129, 252, 71, 202, 207, 131, 21, 162, 175, 102, 50, 65, 19, 195, 182, 98, 48, 195, 70, 8, 196, 244, 89, 54, 52, 206, 2, 178, 103, 54, 34, 119, 240, 168, 64, 202, 116, 188, 61, 26, 98, 54, 149, 44, 94, 215, 170, 248, 168, 254, 203, 221, 250, 117, 132, 230, 151, 140, 234, 93, 42, 91, 159, 183, 241, 180, 140, 139, 11, 229, 138, 48, 82, 2, 117, 77, 131, 118, 16, 115, 116, 121, 60, 240, 38, 170, 238, 83, 0, 114, 125, 131, 108, 215, 30, 113, 179, 69, 221, 178, 228, 68, 70, 255, 197, 185, 1, 99, 84, 19, 137, 13, 145, 14, 163, 128, 152, 74, 144, 25, 16, 49, 50, 63, 22, 219, 204, 157, 107, 225, 104, 184, 72, 133, 56, 76, 160, 62, 18, 96, 10, 193, 194, 72, 2, 138, 243, 114, 108, 201, 52, 99, 136, 46, 168, 192, 42, 171]);

    // For verification tests. Note that "salted" signatures use a salt length equal to the hash size
    var signatures = {
        "sha-1, no salt": new Uint8Array(),
        "sha-256, no salt": new Uint8Array(),
        "sha-384, no salt": new Uint8Array(),
        "sha-512, no salt": new Uint8Array(),
        "sha-1, salted": new Uint8Array(),
        "sha-256, salted": new Uint8Array(),
        "sha-384, salted": new Uint8Array(),
        "sha-512, salted": new Uint8Array()
    };

    var passing = [
        {
            name: "RSA-PSS with SHA-1 and no salt",
            publicKeyBuffer: spki,
            publicKeyFormat: "spki",
            privateKey: null,
            privateKeyBuffer: pkcs8,
            privateKeyFormat: "pkcs8",
            publicKey: null,
            algorithm: {name: "RSA-PSS", saltLength: 0},
            hash: "SHA-1",
            plaintext: plaintext.slice(0, 214),
            signature: signatures["sha-1, no salt"]
        },
        {
            name: "RSA-PSS with SHA-256 and no salt",
            publicKeyBuffer: spki,
            publicKeyFormat: "spki",
            privateKey: null,
            privateKeyBuffer: pkcs8,
            privateKeyFormat: "pkcs8",
            publicKey: null,
            algorithm: {name: "RSA-PSS", saltLength: 0},
            hash: "SHA-256",
            plaintext: plaintext.slice(0, 190),
            signature: signatures["sha-256, no salt"]
        },
        {
            name: "RSA-PSS with SHA-384 and no salt",
            publicKeyBuffer: spki,
            publicKeyFormat: "spki",
            privateKey: null,
            privateKeyBuffer: pkcs8,
            privateKeyFormat: "pkcs8",
            publicKey: null,
            algorithm: {name: "RSA-PSS", saltLength: 0},
            hash: "SHA-384",
            plaintext: plaintext.slice(0, 158),
            signature: signatures["sha-384, no salt"]
        },
        {
            name: "RSA-PSS with SHA-512 and no salt",
            publicKeyBuffer: spki,
            publicKeyFormat: "spki",
            privateKey: null,
            privateKeyBuffer: pkcs8,
            privateKeyFormat: "pkcs8",
            publicKey: null,
            algorithm: {name: "RSA-PSS", saltLength: 0},
            hash: "SHA-512",
            plaintext: plaintext.slice(0, 126),
            signature: signatures["sha-512, no salt"]
        },
        {
            name: "RSA-PSS with SHA-1, salted",
            publicKeyBuffer: spki,
            publicKeyFormat: "spki",
            privateKey: null,
            privateKeyBuffer: pkcs8,
            privateKeyFormat: "pkcs8",
            publicKey: null,
            algorithm: {name: "RSA-PSS", saltLength: 160},
            hash: "SHA-1",
            plaintext: plaintext.slice(0, 214),
            signature: signatures["sha-1, salted"]
        },
        {
            name: "RSA-PSS with SHA-256, salted",
            publicKeyBuffer: spki,
            publicKeyFormat: "spki",
            privateKey: null,
            privateKeyBuffer: pkcs8,
            privateKeyFormat: "pkcs8",
            publicKey: null,
            algorithm: {name: "RSA-PSS", saltLength: 256},
            hash: "SHA-256",
            plaintext: plaintext.slice(0, 190),
            signature: signatures["sha-256, salted"]
        },
        {
            name: "RSA-PSS with SHA-384, salted",
            publicKeyBuffer: spki,
            publicKeyFormat: "spki",
            privateKey: null,
            privateKeyBuffer: pkcs8,
            privateKeyFormat: "pkcs8",
            publicKey: null,
            algorithm: {name: "RSA-PSS", saltLength: 384},
            hash: "SHA-384",
            plaintext: plaintext.slice(0, 158),
            signature: signatures["sha-384, salted"]
        },
        {
            name: "RSA-PSS with SHA-512, salted",
            publicKeyBuffer: spki,
            publicKeyFormat: "spki",
            privateKey: null,
            privateKeyBuffer: pkcs8,
            privateKeyFormat: "pkcs8",
            publicKey: null,
            algorithm: {name: "RSA-PSS", saltLength: 512},
            hash: "SHA-512",
            plaintext: plaintext.slice(0, 126),
            signature: signatures["sha-512, salted"]
        }
    ];

    var failing = [];

    return {passing: passing, failing: failing};
}
