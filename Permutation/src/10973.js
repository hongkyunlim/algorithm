var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./10973.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var swap = function(list, a, b) {
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
};

var prev_permutation = function(a, n) {
    var ix = n-1;
    while (ix > 0 && a[ix-1] <= a[ix]) ix -= 1;
    if (ix <= 0) {
        return false;
    }
    var jx = n-1;
    while (a[jx] >= a[ix-1]) jx -= 1;
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

if (prev_permutation(input,  input.length)) {
    console.log(input.join(' '));
} else {
    console.log(-1);
}