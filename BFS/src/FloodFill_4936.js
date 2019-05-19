var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./4936.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var dfs = function(x, y) {
    for (var ix = 0; ix < 8; ix++) {
        nx = x + dx[ix];
        ny = y + dy[ix];
        if (0 <= nx && nx < h && 0 <= ny && ny < w) {
            if (!checked[nx][ny] && +map[nx][ny] === 1) {
                checked[nx][ny] = 1;
                dfs(nx, ny);
            }
        }
    }
}

var testCaseFn = function(w, h) {
    var ix, jx;
    for (ix = 0; ix < h; ix++) {
        if (!checked[ix]) {
            checked[ix] = [];
        }
        for (jx = 0; jx < w; jx++) {
            checked[ix][jx] = 0;
        }
    }

    for (ix = 0; ix < h; ix++) {
        for (jx = 0; jx < w; jx++) {
            if (+map[ix][jx] === 1 && !checked[ix][jx]) {
                checked[ix][jx] = 1;
                apartComplex++;

                dfs(ix, jx);
                // resultArray.push(apartments);
                // apartments = 0;
            }
        }
    }
};

var w, h;
var dx = [0, 0, -1, 1, 1, 1, -1, -1];
var dy = [1, -1, 0, 0, 1, -1, 1, -1];
var nx, ny;
var apartComplex = 0;
var checked = [];
var mapArray = [];
var map = [];
var whIndex = 0;
for (var ix = 0; ix < inputs.length; ix++) {
    w = +(inputs[ix].split(' ')[0]);
    h = +(inputs[ix].split(' ')[1]);
    if (ix === 0 || ix === whIndex) {
        whIndex = whIndex + h + 1;
        mapArray = inputs.slice(ix + 1, ix + h + 1);
        for (var jx = 0; jx < mapArray.length; jx++) {
            map.push(mapArray[jx].split(' '));
        }
        testCaseFn(w, h);
        if (w && h) {
            console.log(apartComplex);
        }
        apartComplex = 0;
        map.length = 0;
    }
}

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

function makeMap(w, h) {
    var ix, jx, data;

    for (ix = 0; ix < h; ix++) {
        map[ix] = [];
        mark[ix] = [];

        data = input[ix + 1].trim().split('');

        for (jx = 0; jx < w; jx++) {
            map[ix][jx] = +data[jx];
            mark[ix][jx] = [];
        }
    }
}

function bfs(w, h) {
    var queue = new Queue(),
        v, kx, nx, ny, z;

    queue.enqueue([0, 0, 0]);
    mark[0][0][0] = 1;

    while (queue.getLength()) {
        v = queue.dequeue();

        for (kx = 0; kx < 4; kx++) {
            nx = v[0] + dx[kx];
            ny = v[1] + dy[kx];
            z = v[2];

            if (0 <= nx && nx < h && 0 <= ny && ny < w) {
                if (map[nx][ny] === 0 && !mark[nx][ny][z]) {
                    mark[nx][ny][z] = mark[v[0]][v[1]][z] + 1;
                    queue.enqueue([nx, ny, z]);
                }

                if (!z && map[nx][ny] === 1 && !mark[nx][ny][z + 1]) {
                    mark[nx][ny][z + 1] = mark[v[0]][v[1]][z] + 1;
                    queue.enqueue([nx, ny, z + 1]);
                }
            }
        }
    }

    if (mark[h - 1][w - 1][0] && mark[h - 1][w - 1][1]) {
        return Math.min(mark[h - 1][w - 1][0], mark[h - 1][w - 1][1]);
    } else if (mark[h - 1][w - 1][0]) {
        return mark[h - 1][w - 1][0];
    } else if (mark[h - 1][w - 1][1]) {
        return mark[h - 1][w - 1][1];
    } else {
        return -1;
    }
}

var info, w, h;
var map = [], mark = [],
    dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

info = input[0].split(' ');
h = +info[0];
w = +info[1];

makeMap(w, h);
console.log(bfs(w, h));
