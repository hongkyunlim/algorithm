var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2206.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function Queue(){
    var queue  = [];
    var offset = 0;
    this.getLength = function(){
        return (queue.length - offset);
    }
    this.enqueue = function(item){
        queue.push(item);
    }
    this.dequeue = function(){
        if (!queue.length) {
            return undefined;
        }
        var item = queue[offset];
        if ((++offset) * 2 >= queue.length){
            queue  = queue.slice(offset);
            offset = 0;
        }
        return item;
    }
}

var n = +(inputs[0].split(' ')[0]);
var m = +(inputs[0].split(' ')[1]);
var mapArray = inputs.slice(1, inputs.length);
var check = [];
var map = [];
var nx, ny, input, current, ix, jx, z;
var dx = [0, 0, -1, 1];
var dy = [1, -1, 0, 0];

for (ix = 0; ix < n; ix++) {
    check[ix] = [];
    map[ix] = [];
    input = mapArray[ix];
    for (jx = 0; jx < m; jx++) {
        check[ix][jx] = [];
        map[ix][jx] = +(input[jx]);
    }
}


var q = new Queue();
q.enqueue({x: 0, y: 0, z: 0});
check[0][0][0] = 1;

while (q.getLength()) {
    current = q.dequeue();
    z = current.z;
    for (var ix = 0; ix < 4; ix++) {
        nx = current.x + dx[ix];
        ny = current.y + dy[ix];
        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
            if (map[nx][ny] === 0 && !check[nx][ny][z]) {
                check[nx][ny][z] = check[current.x][current.y][z] + 1;
                q.enqueue({x: nx, y: ny, z: z});
            }
            if (!z && map[nx][ny] === 1 && !check[nx][ny][z + 1]) {
                check[nx][ny][z + 1] = check[current.x][current.y][z] + 1;
                q.enqueue({x: nx, y: ny, z: z + 1});
            }
        }
    }
}

var result;
n -= 1;
m -= 1;
if (check[n][m][0] && check[n][m][1]) {
    result = Math.min(check[n][m][0],  check[n][m][1]);
} else if (check[n][m][0]) {
    result = check[n][m][0];
} else if (check[n][m][1]) {
    result = check[n][m][1];
} else {
    result = -1;
}

console.log(result);