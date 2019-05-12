var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1260.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var n, m, v;
var input;

n = +(inputs[0].split(' ')[0]);
m = +(inputs[0].split(' ')[1]);
v = +(inputs[0].split(' ')[2]);
inputs = inputs.slice(1, inputs.length);
var dfs = function(index) {
    checked[index] = true;
    resultStr += index + ' ';
    for (var ix = 1; ix <= n; ix++) {
        if (arrayList[index] && arrayList[index][ix] && !checked[ix]) {
            dfs(ix);
        }
    }
};

var q = [];
var btsX;
var bfs = function() {
    checked[v] = true;
    q.push(v);
    while(q.length) {
        btsX = q[0];
        q.shift();
        resultStr += btsX + ' ';
        for (var ix = 1; ix <= n; ix++) {
            if (arrayList[btsX] && arrayList[btsX][ix] === 1 && !checked[ix]) {
                checked[ix] = true;
                q.push(ix);
            }
        }
    }
}

var arrayList = [];
var x, y;
for (var ix = 0; ix < m; ix++) {
    input = inputs[ix].trim().split(' ');
    for (var jx = 0; jx < input.length; jx++) {
        x = +input[0];
        y = +input[1];
        if (!arrayList[x]) {
            arrayList[x] = [];
        }
        if (!arrayList[y]) {
            arrayList[y] = [];
        }
        arrayList[x][y] = 1;
        arrayList[y][x] = 1;
    }
}

var checked = [];
var resultStr = '';
dfs(v);
console.log(resultStr);
resultStr = '';
checked = [];
bfs();
console.log(resultStr);
