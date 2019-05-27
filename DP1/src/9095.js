var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./9095.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var sum123 = function(n) {
    var d = [];
    d[0] = 0;
    d[1] = 1;
    d[2] = 2;
    d[3] = 4;
    for (var ix = 4; ix <= n; ix++) {
        d[ix] = (d[ix - 1] + d[ix - 2] + d[ix - 3]);
    }
    console.log(d[n]);
}

var n;
for (var ix = 1; ix < inputs.length; ix++) {
    n = +(inputs[ix].split(' ')[0]);
    sum123(n);
}