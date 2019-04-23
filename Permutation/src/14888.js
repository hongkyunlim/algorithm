var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14888.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var swap = function(list, a, b) {
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
};

var next_permutation = function(a, n) {
    var ix = n-1;
    while (ix > 0 && a[ix-1] >= a[ix]) ix -= 1;
    if (ix <= 0) {
        return false;
    }
    var jx = n-1;
    while (a[jx] <= a[ix-1]) jx -= 1;
    swap(a, ix-1, jx);
    jx = n-1;
    while (ix < jx) {
        swap(a, ix, jx);
        ix += 1;
        jx -= 1;
    }
    return true;
}

var putOperator = function(operator, count) {
    var ix;
    for (ix = 0; ix < count; ix++) {
        operatorList.push(operator);
    }
}

var numberList = [], operatorList = [];
var ix, jx, input, firstValue, minValue, maxValue, operator;
for (ix = 1; ix < inputs.length; ix++) {
    input = inputs[ix].split(' ');
    for (jx = 0; jx < input.length; jx++) {
        if (ix == 1) {
            numberList[jx] = +input[jx];
        } else {
            operator = +input[jx];
            if (operator > 0) {
                putOperator(jx, operator);
            }
        }
    }
}


var calcOper = function(numberList, operList) {
    var result;
    var ix, jx;
    for (ix = 1; ix < numberList.length; ix++) {
        result = numberList[0];
        for (jx = 0; jx < operList.length; jx++) {
            switch (operList[jx]) {
                case 0:
                    result += numberList[ix];
                    ix++;
                    break;
                case 1:
                    result -= numberList[ix];
                    ix++;
                    break;
                case 2:
                    result *= numberList[ix];
                    ix++;
                    break;
                case 3:
                    if (result < 0) {
                        result = -(Math.floor(Math.abs(result) / numberList[ix]));
                    } else {
                        result = Math.floor(result / numberList[ix]);
                    }
                    ix++;
                    break;
            }
        }
    }
    return result;
}

firstValue = calcOper(numberList, operatorList);
minValue = firstValue;
maxValue = firstValue;
while (next_permutation(operatorList, operatorList.length)) {
    maxValue = Math.max(maxValue, calcOper(numberList, operatorList));
    minValue = Math.min(minValue, calcOper(numberList, operatorList));
}
console.log(maxValue);
console.log(minValue);
