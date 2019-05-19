var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14226.txt'), 'utf8').toString().trim().split('\n');
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

var s = +(inputs[0].split(' ')[0]);
var check = [];
var current;
var ix, jx;
var q = new Queue();
var ns, nc;

for (ix = 0; ix <= s; ix++) {
    check[ix] = [];
    for (jx = 0; jx <= s; jx++) {
        check[ix][jx] = -1;
    }
}
q.enqueue({s: 1, c: 0});
check[1][0] = 0;
while (q.getLength()) {
    current = q.dequeue();
    ns = current.s;
    nc = current.c;
    if (check[ns][ns] === -1) {
        check[ns][ns] = check[ns][nc] + 1;
        q.enqueue({s: ns, c: ns});
    }
    if (ns + nc <= s && check[ns+nc][nc] === -1) {
        check[ns + nc][nc] = check[ns][nc] + 1;
        q.enqueue({s: ns + nc, c: nc});
    }
    if (ns - 1 >= 0 && check[ns - 1][nc] === -1) {
        check[ns - 1][nc] = check[ns][nc] + 1;
        q.enqueue({s: ns - 1, c: nc});
    }
}

var result;
for (ix = 0; ix <= s; ix++) {
    if (check[s][ix] > -1) {
        if (result === undefined || result > check[s][ix]) {
            result = check[s][ix];
        }
    }
}

console.log(result);