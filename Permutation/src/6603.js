var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./6603.txt'), 'utf8').toString().trim().split('\n');
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

var kx, ix, ixLen, jx, input, lottoArray = [];
var checkArray = [];
var tempArray;
var temp;
for (ix = 0; ix < inputs.length-1; ix++) {
    input = inputs[ix].split(' ');
    ixLen = Number(input[0])+1;
    for (jx = 1; jx < ixLen; jx++) {
        lottoArray[jx-1] = Number(input[jx]);
        if (jx <= 6) {
            checkArray[jx-1] = 1;
        } else {
            checkArray[jx-1] = 2;
        }
    }

    console.log(lottoArray.slice(0,6).join(' '));
    while (next_permutation(checkArray, checkArray.length)) {
        tempArray = [];
        for (kx = 0; kx <= checkArray.length; kx++) {
            if (checkArray[kx] === 1) {
                tempArray.push(lottoArray[kx]);
            }
        }
        console.log(tempArray.join(' '));
    }
    console.log('');
}
