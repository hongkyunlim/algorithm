var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./11054.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +(inputs[0].split(' ')[0].trim());
var a = inputs[1].split(' ');
var max = 0;
var d = [];
var d2 = [];

for (var ix = 0; ix < n; ix++) {
    d[ix] = 1;
    for(var jx = 0; jx < ix; jx++) {
        if (+a[jx] < +a[ix] && d[ix] < d[jx] + 1) {
            d[ix] = d[jx] + 1;
        }
    }
}

a.reverse();
for (var ix = 0; ix < n; ix++) {
    d2[ix] = 1;
    for(var jx = 0; jx < ix; jx++) {
        if (+a[jx] < +a[ix] && d2[ix] < d2[jx] + 1) {
            d2[ix] = d2[jx] + 1;
        }
    }
}

for (var ix = 0; ix < n; ix++) {
    max = Math.max(d[ix] + d2[n - ix - 1] - 1, max);
}

console.log(max);
