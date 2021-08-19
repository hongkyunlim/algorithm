var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1261.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
testest
var n = +(inputs[0].split(' ')[0]);
var m = +(inputs[0].split(' ')[1]);
var input;
var check = [];
var dist = [];
var map = [];
var nx, ny;
var current;
var ix, jx;
var dx = [0, 0, -1, 1];
var dy = [1, -1, 0, 0];

var q = [];
q.push({x: 1, y: 1});
check[n] = true;
dist[n] = 0;

for (ix = 1; ix <= m; ix++) {
    check[ix] = [];
    map[ix] = [];
    dist[ix] = [];
    input = inputs[ix];
    for (jx = 1; jx <= n; jx++) {
        check[ix][jx] = false;
        map[ix][jx] = +(input[jx - 1]);
        dist[ix][jx] = 0;
    }
}

while (q.length) {
    current = q.shift();
    for (var ix = 0; ix < 4; ix++) {
        nx = current.x + dx[ix];
        ny = current.y + dy[ix];
        if (0 < nx && nx <= m && 0 < ny && ny <= n) {
            if (!check[nx][ny]) {
                check[nx][ny] = true;
                if (map[nx][ny]) {
                    dist[nx][ny] = dist[current.x][current.y] + 1;
                    q.push({x: nx, y: ny});
                } else {
                    dist[nx][ny] = dist[current.x][current.y];
                    q.unshift({x: nx, y: ny});
                }
            }
        }
    }
}

console.log(dist[m][n]);
