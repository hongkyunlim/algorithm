var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2178.txt'), 'utf8').toString().trim().split('\n');
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
var map = inputs.slice(1, inputs.length);
var ix, jx;
var dx = [0, 0, -1, 1];
var dy = [1, -1, 0, 0];
var nx, ny;
var checked = [];
var resultArray = [];
var current;
var qIndex = 0;

for (ix = 0; ix < n; ix++) {
    if (!checked[ix]) {
        checked[ix] = [];
        resultArray[ix] = [];
    }
    for (jx = 0; jx < m; jx++) {
        checked[ix][jx] = 0;
        resultArray[ix][jx] = 0;
    }
}

var q = new Queue();
q.enqueue({x: 0, y: 0});
checked[0][0] = 1;
nx = 0;
ny = 0;

while (q.getLength()) {
    current = q.dequeue();
    for (var ix = 0; ix < 4; ix++) {
        nx = current.x + dx[ix];
        ny = current.y + dy[ix];

        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
            if (!checked[nx][ny] && +map[nx][ny] === 1) {
                checked[nx][ny] = 1;
                // map[nx][ny] = map[current.x][current.y]+1;
                resultArray[nx][ny] = +resultArray[current.x][current.y]+1;
                q.enqueue({x: nx,  y: ny})
            }
        }
    }
    qIndex++;
}

console.log(resultArray[n-1][m-1] + 1);
