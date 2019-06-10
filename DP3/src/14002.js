var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14002.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +(inputs[0].split(' ')[0].trim());
var a = inputs[1].split(' ');
var max = 0;
var d = [];
var v = [];
var result = [];

var go = function(p) {
    if (p === -1) {
        return;
    }
    result.push(+a[p]);
    go(v[p]);
}

for (var ix = 0; ix < n; ix++) {
    d[ix] = 1;
    v[ix] = -1;
    for(var jx = 0; jx < ix; jx++) {
        if (+a[jx] < +a[ix] && d[ix] < d[jx] + 1) {
            d[ix] = d[jx] + 1;
            v[ix] = jx;
        }
    }
    max = Math.max(d[ix], max);
}

for (var ix = 0; ix < n; ix++) {
    if (d[ix] === max) {
        result.push(+a[ix]);
        go(v[ix]);
        break;
    }
}

result.sort(function(a, b) {
    return a-b;
});

console.log(max);
console.log(result.join(' '));
