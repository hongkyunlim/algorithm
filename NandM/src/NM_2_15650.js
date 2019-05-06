var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15650.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var resultArray = [];
var go = function(index, start, n, m) {
    if (index === m) {
        console.log(resultArray.join(' '));
        return;
    }
    for (var ix = start; ix <= n; ix++) {
        resultArray[index] = ix;
        go (index+1, ix+1, n, m);
    }
};

var n = +(inputs[0].split(' ')[0]);
var m = +(inputs[0].split(' ')[1]);
go(0, 1, n, m);