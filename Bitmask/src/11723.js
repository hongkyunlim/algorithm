var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./11723.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

/*
    add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
    remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
    check x: S에 x가 있으면 1을, 없으면 0을 출력한다.
    toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
    all: S를 {1, 2, ..., 20} 으로 바꾼다.
    empty: S를 공집합으로 바꾼다.
    add    S | (1 << i)
    check  S & (1 << i)
    remove S & ~(1 << i)
    toggle S ^ (1 << i)
 */

var ix, input, mode, value, checkValue;
var bitSet = 0;
var result = '';
for (ix = 1; ix < inputs.length; ix++) {
    input = inputs[ix].split(' ');
    mode = input[0].trim();
    value = +(input[1]);
    if (mode === 'add') {
        bitSet |= (1 << value);
    } else if (mode === 'remove') {
        bitSet &= ~(1 << value);
    } else if (mode === 'check') {
        checkValue = bitSet & (1 << value);
        if (checkValue > 0) {
            result += '1\n';
        } else if (checkValue === 0) {
            result += '0\n';
        }
    } else if (mode === 'toggle') {
        bitSet ^= (1 << value);
    } else if (mode === 'all') {
        bitSet = (1 << 21) - 1;
        // bitSet &= ~(1);
    } else if (mode === 'empty') {
        bitSet = 0;
    }
}

console.log(result);
