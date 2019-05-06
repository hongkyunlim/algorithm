var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15655.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var checkArray = [];
var resultArray = [];
var resultStr = '';
var go = function(index, start, n, m) {
    if (index === m) {
        resultStr += resultArray.join(' ') + '\n';
        return;
    }
    for (var ix = start; ix < n; ix++) {
        if (checkArray[ix]) {
            continue;
        }
        checkArray[ix] = true;
        resultArray[index] = numList[ix];
        go (index+1, ix+1, n, m);
        checkArray[ix] = false;
    }
};

var n = +(inputs[0].split(' ')[0]);
var m = +(inputs[0].split(' ')[1]);
var tempList = inputs[1].split(' ');
var numList = [];
for (var ix = 0; ix < tempList.length; ix++) {
    numList[ix] = +(tempList[ix]);
}

numList.sort(function(a, b) {
    return a-b;
});

go(0, 0, n, m);
console.log(resultStr);