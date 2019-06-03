var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./9465.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n, ix, jx, kx;
var a, d;

var tempArray, row;
var stiker = function(data) {
    a = [];
    d = [];
    for (ix = 0; ix < data.length; ix++) {
        row =  data[ix].split(' ');
        if (!a[ix]) {
            a[ix] = [];
        }
        for (jx = 0; jx < row.length; jx++) {
            a[ix][jx] = +(row[jx]);
        }
    }

    d = [[0, a[0][0], a[1][0]]];

    n = row.length;
    for (ix = 1; ix < n; ix++) {
        if (!d[ix]) {
            d[ix] = [];
        }
        d[ix][0] = Math.max(d[ix - 1][0], d[ix - 1][1], d[ix - 1][2]);
        d[ix][1] = Math.max(d[ix - 1][0], d[ix - 1][2]) + a[0][ix];
        d[ix][2] = Math.max(d[ix - 1][0], d[ix - 1][1]) + a[1][ix];
    }
    console.log(Math.max(d[n - 1][0],d[n - 1][1], d[n - 1][2]));
};

for (kx = 2; kx < inputs.length; kx++) {
    tempArray = inputs.slice(kx, kx + 2);
    stiker(tempArray);
    kx = kx + 2;
}


