var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1929.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var prime = function(n) {
    if (n < 2) {
        return false;
    }

    for (var i = 2; i*i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

var prime2 = function(endIdx) {
    var primeArray = [];
    var primeCount = 0;
    var isPrimeArray = [];
    var ix, jx;
    if (endIdx > 1000000) {
        jx = endIdx*2;
    } else {
        jx = endIdx*endIdx;
    }
    for (ix = 2; ix <= endIdx; ix++) {
        if (!isPrimeArray[ix]) {
            primeArray[primeCount++] = ix;
            for (jx = ix*ix; jx <= endIdx; jx+=ix) {
                isPrimeArray[jx] = true;
            }
        }
    }

    return primeArray;
};

var input;
var startIdx;
var endIdx;

input = inputs[0].split(' ');
if (+input[0] > +input[1]) {
    startIdx = +input[1];
    endIdx = +input[0];
} else {
    startIdx = +input[0];
    endIdx = +input[1];
}

if (startIdx < 1) {
    startIdx = 1;
} else if (endIdx > 1000000) {
    endIdx = 1000000;
}

var primeResult = prime2(endIdx);
for (var ix = 0; ix < primeResult.length; ix++) {
    if (startIdx <= primeResult[ix]) {
        console.log(primeResult[ix]);
    }
}

// for (var ix = startIdx; ix < endIdx+1; ix++) {
//     if (prime(ix)) {
//         console.log(ix);
//     }
// }