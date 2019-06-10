var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./11055.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +(inputs[0].split(' ')[0].trim());
var a = inputs[1].split(' ');
var max = 0;
var d = [];
a.reverse();
for (var ix = 0; ix < n; ix++) {
    d[ix] = 1;
    for(var jx = 0; jx < ix; jx++) {
        if (+a[jx] < +a[ix] && d[ix] < d[jx] + 1) {
            d[ix] = d[jx] + 1;
        }
    }
    max = Math.max(d[ix], max);
}

console.log(max);
