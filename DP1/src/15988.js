var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15988.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var sum123 = function(n) {
    if (n >= 1000000) {
        n = 1000000;
    }
    for (var ix = 4; ix <= n; ix++) {
        d[ix] = (d[ix - 1] + d[ix - 2] + d[ix - 3]) % modValue;
    }
    resultStr += d[n]  + '\n';
}

var n, resultStr = '';
var modValue = 1000000009;
var d = [0, 1, 2, 4];
for (var ix = 1; ix < inputs.length; ix++) {
    n = +(inputs[ix].split(' ')[0].trim());
    sum123(n);
}
console.log(resultStr);