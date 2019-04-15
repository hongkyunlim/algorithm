var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2309.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var ix, ixLen, jx, kx;
var sumValue = 0;
var endFlag = false;
for (ix = 0, ixLen = inputs.length; ix < ixLen; ix++) {
    inputs[ix] = +inputs[ix];
    sumValue += inputs[ix];
}

inputs.sort(function(a, b) {
    return a-b;
});

for (ix = 0, ixLen = inputs.length; ix < ixLen; ix++) {
    for (jx = ix+1; jx < ixLen; jx++) {
        if (sumValue - inputs[ix] - inputs[jx] == 100) {
            for (kx = 0; kx < ixLen; kx++) {
                if (ix == kx || jx == kx) {
                    continue;
                }
                endFlag = true;
                console.log(inputs[kx]);
            }
        }
    }
    if (endFlag) {
        break;
    }
}