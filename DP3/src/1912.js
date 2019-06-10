var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1912.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +(inputs[0].split(' ')[0].trim());
var a = inputs[1].split(' ');
var d = [+a[0]];
var max = d[0];

for (var ix = 1; ix < n; ix++) {
    d[ix] = Math.max(d[ix - 1] + +a[ix], +a[ix]);
}

for (var ix = 1; ix < n; ix++) {
    max = Math.max(max, d[ix]);
}

console.log(max);