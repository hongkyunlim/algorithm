var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14501.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var go = function(day, sum) {
    if (day === n) {
        result = Math.max(result, sum);
        return;
    }
    go(day + 1, sum);
    if (day + dayList[day] <= n) {
        go(day + dayList[day], sum + payList[day]);
    }
};

var ix, n, input, dayList = [], payList = [];
var result = 0;
for (ix = 0; ix < inputs.length; ix++) {
    input = inputs[ix].split(' ');
    if (ix === 0) {
        n = Number(input);
    } else {
        dayList.push(Number(input[0]));
        payList.push(Number(input[1]));
    }
}

go(0, 0)
console.log(result);