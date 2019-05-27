var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./16194.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var n = +(inputs[0].split(' ')[0]);
var card = inputs[1].split(' ');
var d = [0];
var ix, jx;
for (ix = 1; ix <= n; ix++) {
    d[ix] = -1;
    for (jx = 1; jx <= ix; jx++) {
        if (d[ix] === -1 || d[ix] > d[ix - jx] + Number(card[jx - 1])) {
            d[ix] = d[ix - jx] + Number(card[jx - 1]);
        }
    }
}
console.log(d[n]);

