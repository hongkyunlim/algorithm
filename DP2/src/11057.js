var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./11057.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n, ix, jx, kx;
var modValue = 10007;
var d = [];
var ans = 0;
d[1] = [];

n = +(inputs[0].split(' ')[0].trim());

for (ix = 0; ix <= 9; ix++) {
    d[1][ix] = 1;
}

for (ix = 2; ix <= n; ix++) {
    if (!d[ix]) {
        d[ix] = [];
    }
    for (jx = 0; jx <= 9; jx++) {
        d[ix][jx] = 0;
        for (kx = 0; kx <= jx; kx++) {
            d[ix][jx] += d[ix - 1][kx];
            d[ix][jx] %= modValue;
        }
    }
}
for (ix = 0; ix <= 9; ix++) {
    ans += d[n][ix];
}
console.log(ans %= modValue);

