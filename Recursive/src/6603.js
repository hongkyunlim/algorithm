var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./6603.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var solve = function(numberList, lottoList, start, count) {
    if (count == 6) {
        console.log(lottoList.slice(0,6).join(' '));
        return;
    }

    for (var ix = start; ix < numberList.length; ix++) {
        lottoList[count] = numberList[ix];
        solve(numberList, lottoList, ix+1, count+1)
    }
}

var ix, ixLen, jx, input, lottoArray = [];
var tempArray = [];
for (ix = 0; ix < inputs.length-1; ix++) {
    input = inputs[ix].split(' ');
    ixLen = Number(input[0]);
    lottoArray = [];
    for (jx = 0; jx < ixLen; jx++) {
        tempArray[jx] = +(input[jx+1]);
    }
    solve(tempArray, lottoArray, 0, 0);
    console.log('');
}