var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('../txt/6588.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var prime = function(endIdx) {
    var primeArray = [];
    var primeCount = 0;
    var isPrimeArray = [];
    var ix, jx;
    for (ix = 2; ix <= endIdx; ix++) {
        if (!isPrimeArray[ix]) {
            primeArray[primeCount++] = ix;
            ix <= 1000000 ? jx = ix*ix : jx = ix*2;
            for (jx; jx <= endIdx; jx+=ix) {
                isPrimeArray[jx] = true;
            }
        }
    }
    return primeArray;
};
var input, primeResult, a, b, ix, jx, kx, isNotResult;
var rl;
for (ix = 0; ix < inputs.length; ix++) {
    input = +inputs[ix].split(' ')[0];
    if (input > 0) {
        primeResult = prime(input);
        rl = primeResult.length
        isNotResult = false;
        for (jx = 0; jx < rl; jx++) {
            a = primeResult[jx];
            if (+(a % 2) === 0) {
                continue;
            }

            for (kx = 0; kx < rl; kx++) {
                b = primeResult[kx];
                if (input - a === b) {
                    isNotResult = true;
                    console.log(input+' = '+a+' + '+b);
                    break;
                }
            }
            if (isNotResult) {
                break;
            }
        }
        if (!isNotResult) {
            console.log('Goldbach\'s conjecture is wrong.');
        }
    }
}