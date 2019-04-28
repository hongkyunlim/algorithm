var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./9095.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var go = function(sum, goal) {
    if (sum > goal) return 0;
    if (sum === goal) return 1;
    var now = 0;
    for (var ix = 1; ix <= 3; ix++) {
        now += go(sum+ix, goal);
    }

    return now;
};

var ix, input;
for (ix = 1; ix < inputs.length; ix++) {
    input = +(inputs[ix].split(' '));
    console.log(go(0, input));
}

