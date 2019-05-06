var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15651.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var checkArray = [];
var resultArray = [];
var resultStr = '';
var go = function(index, n, m) {
    if (index === m) {
        resultStr += resultArray.join(' ') + '\n';
        return;
    }
    for (var ix = 1; ix <= n; ix++) {
        checkArray[ix] = true;
        resultArray[index] = ix;
        go (index+1, n, m);
        checkArray[ix] = false;
    }
};

var n = +(inputs[0].split(' ')[0]);
var m = +(inputs[0].split(' ')[1]);
go(0, n, m);
console.log(resultStr);