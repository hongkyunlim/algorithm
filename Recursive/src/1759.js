var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1759.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var check = function(strList) {
    var ja = 0;
    var mo = 0;
    var str;
    for (var ix = 0; ix < strList.length; ix++) {
        str = strList[ix];
        if (str === 'a' || str === 'e' || str == 'i' || str == 'o' || str == 'u') {
            mo += 1;
        } else {
            ja += 1;
        }
    }
    return ja >= 2 && mo >= 1;
}

var go = function(n, alphaList, password, index) {
    if (password.length === n) {
        if (check(password)) {
            console.log(password)
        }
        return;
    }

    if (index >= alphaList.length) return;
    go(n, alphaList, password + alphaList[index], index + 1);
    go(n, alphaList, password, index+1);

};

var ix, input, len, count;
for (ix = 0; ix < inputs.length; ix++) {
    if (ix === 0) {
        input = inputs[ix].split(' ');
        len = +(input[0]);
        count = +(input[1]);
    } else {
        input = inputs[ix].split(' ');
    }
}

input.sort();

go(len, input, '', 0);