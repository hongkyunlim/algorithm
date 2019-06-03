var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./10844.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n, ix, jx;
var modValue = 1000000000;
var d = [,[0]];
var ans = 0;

n = +(inputs[0].split(' ')[0].trim());

for (ix = 1; ix <= 9; ix++) {
    d[1][ix] = 1;
}

for (ix = 2; ix <= n; ix++) {
    if (!d[ix]) {
        d[ix] = [];
    }
    for (jx = 0; jx <= 9; jx++) {
        d[ix][jx] = 0;
        if (jx - 1 >= 0) {
            d[ix][jx] += d[ix - 1][jx - 1];
        }
        if (jx + 1 <= 9) {
            d[ix][jx] += d[ix - 1][jx + 1];
        }
        d[ix][jx] %= modValue;
    }
}

for (ix = 0; ix <= 9; ix++) {
    ans += d[n][ix];
}
console.log(ans %= modValue);

