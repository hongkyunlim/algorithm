var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15988.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n;
var modValue = 1000000009;
var d = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 1]];

for (var ix = 4; ix <= 100000; ix++) {
    if (!d[ix]) {
        d[ix] = [];
    }

    d[ix][0] = (d[ix - 1][1] + d[ix - 1][2]) % modValue;
    d[ix][1] = (d[ix - 2][0] + d[ix - 2][2]) % modValue;
    d[ix][2] = (d[ix - 3][0] + d[ix - 3][1]) % modValue;
}

for (var ix = 1; ix < inputs.length; ix++) {
    n = +(inputs[ix].split(' ')[0].trim());
    console.log((d[n][0] + d[n][1] + d[n][2]) % modValue);
}

