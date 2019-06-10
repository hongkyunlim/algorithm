var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1912.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +(inputs[0].split(' ')[0].trim());
var a = inputs[1].split(' ');
var dl = [+a[0]];
var dr = [];
dr[n-1] = +a[n-1];
var ix;
var max = -1000000;

for (ix = 1; ix < n; ix++) {
    dl[ix] = Math.max(dl[ix - 1] + +a[ix], +a[ix]);
}

for (ix = n - 2; ix >= 0; ix--) {
    dr[ix] = Math.max(dr[ix + 1] + +a[ix], +a[ix]);
}

for (var ix = 0; ix < n; ix++) {
    max = Math.max(max, dl[ix], dr[ix]);
}

for (ix = 1; ix < n - 1; ix++) {
    if (max < dl[ix - 1] + dr[ix + 1]) {
        max = dl[ix - 1] + dr[ix + 1];
    }
}

console.log(max);