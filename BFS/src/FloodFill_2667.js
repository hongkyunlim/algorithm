var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2667.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var dfs = function(x, y) {
    for (var ix = 0; ix < 4; ix++) {
        nx = x + dx[ix];
        ny = y + dy[ix];
        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
            if (!checked[nx][ny] && +map[nx][ny] === 1) {
                checked[nx][ny] = 1;
                apartments++;
                dfs(nx, ny);
            }
        }
    }
}

var n = +(inputs[0].split(' ')[0]);
var map = inputs.slice(1, inputs.length);
var ix, jx;
var dx = [0, 0, -1, 1];
var dy = [1, -1, 0, 0];
var nx, ny;
var apartments = 0;
var apartComplex = 0;
var checked = [];
var resultArray = [];

for (ix = 0; ix < n; ix++) {
    if (!checked[ix]) {
        checked[ix] = [];
    }
    for (jx = 0; jx < n; jx++) {
        checked[ix][jx] = 0;
    }
}

for (ix = 0; ix < n; ix++) {
    for (jx = 0; jx < n; jx++) {
        if (+map[ix][jx] === 1 && !checked[ix][jx]) {
            checked[ix][jx] = 1;
            apartments++;
            apartComplex++;

            dfs(ix, jx);

            resultArray.push(apartments);
            apartments = 0;
        }
    }
}

resultArray.sort(function(a, b) {
    return a-b;
});


console.log(apartComplex);
console.log(resultArray.join('\n'))