var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./11726.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +(inputs[0].split(' ')[0]);
var d = [];
d[0] = 1;
d[1] = 1;
for (var ix = 2; ix <= n; ix++) {
    d[ix] = (d[ix - 1] + d[ix - 2]) % 10007;
}

console.log(d[n]);
