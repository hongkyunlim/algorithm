var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./10819.txt'), 'utf8').toString().trim().split('\n');
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

var ix, input;
for (ix = 1; ix < inputs.length; ix++) {
    input = inputs[ix].split(' ');
}
for (ix = 0; ix < input.length; ix++) {
    input[ix] = +input[ix];
}

input.sort(function(a, b) {
    return a-b;
});

var calcValue = 0;
var maxValue = 0;
while (next_permutation(input,  input.length)) {
    calcValue = 0;
    for (ix = 2; ix <= input.length; ix++) {
        calcValue += Math.abs(input[ix - 2] - input[ix - 1]);
    }
    maxValue = Math.max(maxValue, calcValue);
}

console.log(maxValue);