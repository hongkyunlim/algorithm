var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1476.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var esm = inputs[0].split(' ');
var e, s, m, ix;
e = Number(esm[0]) - 1;
s = Number(esm[1]) - 1;
m = Number(esm[2]) - 1;
for (ix = 0;; ix++) {
    if (ix % 15 == e && ix % 28 == s && ix % 19 == m) {
        console.log(ix+1);
        break;
    }
}