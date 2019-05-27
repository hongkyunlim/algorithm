var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1463.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +(inputs[0].split(' ')[0]);
var d = [];
d[1] = 0;
for (var ix = 2; ix <= n; ix++) {
    d[ix] = d[ix - 1] + 1;
    if (ix % 2 === 0 && d[ix] > d[ix / 2] + 1) {
        d[ix] = d[ix / 2] + 1;
    }
    if (ix % 3 === 0 && d[ix] > d[ix / 3] + 1) {
        d[ix] = d[ix / 3] + 1;
    }
}

console.log(d[n]);
