var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./13549.txt'), 'utf8').toString().trim().split('\n');
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
var check = [];
var dist = [];
var max = 100001;
var current;

var q = new Queue();
var nextQ = new Queue();

q.enqueue(n);
check[n] = true;
dist[n] = 0;

while (q.getLength()) {
    current = q.dequeue();
    if (current * 2 < max && !check[current * 2]) {
        q.enqueue(current * 2);
        check[current * 2] = true;
        dist[current * 2] = dist[current];
    }
    if (current + 1 < max && !check[current + 1]) {
        nextQ.enqueue(current + 1);
        check[current + 1] = true;
        dist[current + 1] = dist[current] + 1;
    }
    if (current - 1 >= 0 && !check[current - 1]) {
        nextQ.enqueue(current - 1);
        check[current - 1] = true;
        dist[current - 1] = dist[current] + 1;
    }

    if (!q.getLength()) {
        q = nextQ;
        nextQ = new Queue();
    }
}

console.log(dist[m]);