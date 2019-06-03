var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2156.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +(inputs[0].split(' ')[0].trim());
var a = inputs.slice(1);
var ix;
var d = [];
d[0] = [0, +a[0], 0];

for (ix = 1; ix < a.length; ix++) {
    if (!d[ix]) {
        d[ix] = [];
    }
    d[ix][0] = Math.max(d[ix - 1][0], d[ix - 1][1], d[ix - 1][2]);
    d[ix][1] = d[ix - 1][0] + (+a[ix]);
    d[ix][2] = d[ix - 1][1] + (+a[ix]);
}

console.log(Math.max(d[n-1][0], d[n-1][1], d[n-1][2]));