var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15655.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var resultArray = [];
var resultStr = '';
var go = function(index, n, m) {
    if (index === m) {
        resultStr += resultArray.join(' ') + '\n';
        return;
    }
    for (var ix = 0; ix < n; ix++) {
        resultArray[index] = numList[ix];
        go (index+1, n, m);
    }
};

var m = +(inputs[0].split(' ')[1]);
var tempList = inputs[1].split(' ');
var numList = [];
var ix;
for (ix = 0; ix < tempList.length; ix++) {
    tempList[ix] = +(tempList[ix]);
}

tempList.sort(function(a, b) {
    return a-b;
});

for (ix = 0; ix < tempList.length; ix++) {
    if (numList.indexOf(tempList[ix]) === -1) {
        numList.push(tempList[ix]);
    }
    // if (ix === 0) {
    //     numList.push(tempList[ix]);
    // } else if (tempList[ix - 1] !== tempList[ix]) {
    //     numList.push(tempList[ix]);
    // }
}

go(0, numList.length, m);
console.log(resultStr);