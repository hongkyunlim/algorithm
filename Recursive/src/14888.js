var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14888.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var go = function(index, plus, minus, multi, divi, total) {
    if (index === numberList.length) {
        maxValue = Math.max(maxValue, total);
        minValue = Math.min(minValue, total);
        return;
    }
    if (plus < operatorList[0]) {
        go(index + 1, plus + 1, minus, multi, divi, total + numberList[index]);
    }
    if (minus < operatorList[1]) {
        go(index + 1, plus, minus + 1, multi, divi, total - numberList[index]);
    }
    if (multi < operatorList[2]) {
        go(index + 1, plus, minus, multi + 1, divi, total * numberList[index]);
    }
    if (divi < operatorList[3]) {
        if (total < 0) {
            total = -(Math.floor(Math.abs(total) / numberList[index]));
        } else {
            total = Math.floor(total / numberList[index]);
        }
        go(index + 1, plus, minus, multi, divi + 1, total);
    }
}

var numberList = [], operatorList = [];
var ix, jx, input, maxValue = -1000000000,  minValue = 1000000000;
for (ix = 1; ix < inputs.length; ix++) {
    input = inputs[ix].split(' ');
    for (jx = 0; jx < input.length; jx++) {
        if (ix == 1) {
            numberList[jx] = +input[jx];
        } else {
            operatorList[jx] = +input[jx];
        }
    }
}


go(1, 0, 0, 0, 0, numberList[0]);
console.log(maxValue);
console.log(minValue);