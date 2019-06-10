var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1699.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n = +(inputs[0].split(' ')[0].trim());
var d = [0];
var ix, jx;

for (ix = 1; ix <= n; ix++) {
    d[ix] = ix;
    for (jx = 1; jx * jx <= ix; jx++) {
        if (d[ix] > d[ix - (jx * jx)] + 1) {
            d[ix] = d[ix - (jx * jx)] + 1;
        }
    }
}

console.log(d[n]);