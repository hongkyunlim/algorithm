var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15654.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var checkArray = [];
var resultArray = [];
var resultStr = '';
var go = function(index, n, m) {
    if (index === m) {
        if (resultStr.indexOf(resultArray.join(' ') + '\n') == -1)
        resultStr += resultArray.join(' ') + '\n';
        return;
    }
    for (var ix = 0; ix < n; ix++) {
        if (checkArray[ix]) {
            continue;
        }
        checkArray[ix] = true;
        resultArray[index] = numList[ix];
        go(index+1, n, m);
        checkArray[ix] = false;
    }
};

var m = +(inputs[0].split(' ')[1]);
var tempList = inputs[1].split(' ');
var numList = [];
for (var ix = 0; ix < tempList.length; ix++) {
    numList[ix] = +(tempList[ix]);
}

numList.sort(function(a, b) {
    return a-b;
});

go(0, numList.length, m);
console.log(resultStr);