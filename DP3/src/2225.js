var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2225.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n = +(inputs[0].split(' ')[0].trim());
var k = +(inputs[0].split(' ')[1].trim());
var mod = 1000000000;
var d = [];
var ix, jx, kx;

for (ix = 0; ix <= k; ix++) {
    d[ix] = [];
    for (jx = 0; jx <= n; jx++) {
        d[ix][jx] = 0;
    }
}

d[0][0] = 1;
for (ix = 1; ix <= k; ix++) {
    for (jx = 0; jx <= n; jx++) {
        for (kx = 0; kx <= jx; kx++) {
            d[ix][jx] += d[ix - 1][jx - kx];
        }
        d[ix][jx] %= mod;
    }
}

console.log(d[k][n]);