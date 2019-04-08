var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('../txt/2609.txt'), 'utf8').toString().trim().split('\n');

var gcd = function (a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};
var gcdValue = inputs[0].split(' '); // 최대공약수
var g = gcd(gcdValue[0], gcdValue[1]);

console.log(gcd(gcdValue[0], gcdValue[1]));
console.log(g * (gcdValue[0] / g) * (gcdValue[1] / g));
