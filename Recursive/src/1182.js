var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1182.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n, m;
var ans = 0;
var input;

var go = function(i, sum) {
    if (i === n) {
        if (sum === m) {
            ans += 1;
        }
        return;
    }

    go(i+1, sum + Number(input[i]));
    go(i+1, sum);
}

n = +(inputs[0].split(' ')[0]);
m = +(inputs[0].split(' ')[1]);
input = inputs[1].split(' ');


go(0, 0);

if (m === 0) {
    ans -= 1;
}

console.log(ans);