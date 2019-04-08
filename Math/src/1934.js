var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('../txt/1934.txt'), 'utf8').toString().trim().split('\n');

var gcd = function (a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};

var ix, jx, input, g;
for (ix = 1; ix < inputs.length; ix++) {
    input = inputs[ix].split(' ');
    for (jx = 1; jx < input.length; jx++) {
        g = gcd(input[0], input[1]);
        console.log(g * (input[0] / g) * (input[1] / g));
    }
}