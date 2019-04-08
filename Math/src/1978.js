var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('../txt/1978.txt'), 'utf8').toString().trim().split('\n');
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
var len, input, primeCount;
len = Number(inputs[0]);
if (len > 100) {
    len = 100;
}

input = inputs[1].split(' ');
primeCount = 0;
for (var ix = 0; ix < input.length; ix++) {
    if (input[ix] > 1000) {
        continue;
    }
    if (prime(input[ix])) {
        primeCount++;
    }
}
console.log(primeCount);