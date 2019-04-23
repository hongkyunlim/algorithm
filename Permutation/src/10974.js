var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./10974.txt'), 'utf8').toString().trim().split('\n');
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

var ix, input = [];
var len = +(inputs[0].split(' '));

for (ix = 0; ix < len; ix++) {
    input[ix] = ix+1;
}

console.log(input.join(' '));
while (next_permutation(input,  input.length)) {
    console.log(input.join(' '));
};