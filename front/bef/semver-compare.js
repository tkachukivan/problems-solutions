/**
 * https://bigfrontend.dev/problem/semver-compare
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
    // your code here
    if (v1 === v2) return 0;
    const partsV1 = v1.split('.').map(Number);
    const partsV2 = v2.split('.').map(Number);

    for (let i = 0; i < partsV1.length; i++) {
        if (partsV1[i] > partsV2[i]) return 1;
        else if (partsV1[i] < partsV2[i]) return -1;
    }

    return 0;
}

  // console.log(compare('12.1.0', '12.1.2'))