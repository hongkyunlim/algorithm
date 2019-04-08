var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('../txt/9613.txt'), 'utf8').toString().trim().split('\n');

var gcd = function (a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};

var ix, jx, kx, input, sum;
for (ix = 1; ix < inputs.length; ix++) {
    sum = 0;
    input = inputs[ix].split(' ');
    for (jx = 1; jx < input.length; jx++) {
        for(kx = jx+1; kx < input.length; kx++) {
            sum += gcd(+input[jx], +input[kx]);
        }
    }
    console.log(sum);
}