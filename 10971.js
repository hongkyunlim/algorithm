var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./10971.txt'), 'utf8').toString().trim().split('\n');
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

var ix, jx, input;
var items = [];
var tempArray;
for (ix = 1; ix < inputs.length; ix++) {
    input = inputs[ix].split(' ');
    tempArray = [];
    for (jx = 0; jx < input.length; jx++) {
        if (input[jx] !== '') {
            tempArray.push(+(input[jx]));
        }
    }
    items.push(tempArray);
}

/*
    i-> j = w[i][j];
    w[i][j] = 0; i-> j 못감 0보다 크면 i-> j 갈 수 잇음
    2 <= N <= 10
 */

var isOK = true;
var sum = 0;
var minValue;
var item;
var ixLen = items.length;
// input.sort(function(a, b) {
//     return a-b;
// });
for (ix = 0; ix < ixLen; ix++) {
    item = items[ix];
    console.log(item);
    while (next_permutation(item, item.length)) {
        for (jx = 0; jx < item.length; jx++) {
            if (item[jx] === 0) isOK = false;
            else sum += item[jx];
        }
        if (isOK && items[ixLen-1][0] !== 0) {
            sum += items[ixLen-1][0];
            // 뭔 최솟값을 구하라는건지 모르겟음
        }
    }
}

// console.log(input.join(' '));