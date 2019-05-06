var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1182.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var ix, jx;
var sumValue = +(inputs[0].split(' ')[1]);
var sum;
var resultCount = 0;
var numList = inputs[1].split(' ');
var n = numList.length;
for (ix = 1; ix < (1 << n); ix++) {
    sum = 0;
    for (jx = 0; jx < n; jx++) {
        if (ix & (1 << jx)) {
            sum += +(numList[jx].split(' '));
        }
    }
    if (sum === sumValue) {
        resultCount += 1;
    }
}

console.log(resultCount);

