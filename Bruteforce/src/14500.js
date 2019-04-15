var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14500.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var nm = inputs[0].split(' ');
var n = +nm[0];
var m = +nm[1];
var a = [];
var input, ix, jx, tmpVal;
var result = 0

inputs = inputs.splice(1);
for (ix = 0; ix < inputs.length; ix++) {
    input = inputs[ix].split(' ');
    if (a[ix] == null) {
        a[ix] = [];
    }
    for (jx = 0; jx < input.length; jx++) {
        a[ix][jx] = +input[jx];
    }
}
for (ix = 0; ix < n; ix++) {
    for (jx = 0; jx < m; jx++) {
        // 1. ㅡ 가로
        if (jx + 3 < m) {
            tmpVal = a[ix][jx] + a[ix][jx+1] + a[ix][jx+2] + a[ix][jx+3];
            if (result < tmpVal) result = tmpVal;
        }
        // 2. | 세로
        if (ix + 3 < n) {
            tmpVal = a[ix][jx] + a[ix+1][jx] + a[ix+2][jx] + a[ix+3][jx];
            if (result < tmpVal) result = tmpVal;
        }
        // 3. ㄴ (가로긴거)
        if (ix + 1 < n && jx + 2 < m) {
            tmpVal = a[ix][jx] + a[ix+1][jx] + a[ix+1][jx+1] + a[ix+1][jx+2];
            if (result < tmpVal) result = tmpVal;
        }
        // 4. ㄱ 좌우 대칭 (세로긴거)
        if (ix + 2 < n && jx + 1 < m) {
            tmpVal = a[ix][jx] + a[ix][jx+1] + a[ix+1][jx] + a[ix+2][jx];
            if (result < tmpVal) result = tmpVal;
        }
        // 5. ㄱ 가로긴거
        if (ix + 1 < n && jx + 2 < m) {
            tmpVal = a[ix][jx] + a[ix][jx+1] + a[ix][jx+2] + a[ix+1][jx+2];
            if (result < tmpVal) result = tmpVal;
        }
        // 6. ㄱ 세로긴거
        if (ix + 2 < n && jx + 1 < m) {
            tmpVal = a[ix][jx] + a[ix][jx+1] + a[ix+1][jx+1] + a[ix+2][jx+1];
            if (result < tmpVal) result = tmpVal;
        }
        // 7. ㄴ 좌우 대칭 (세로긴거)
        if (ix + 2 < n && jx - 1 >= 0) {
            tmpVal = a[ix][jx] + a[ix+1][jx] + a[ix+2][jx] + a[ix+2][jx-1];
            if (result < tmpVal) result = tmpVal;
        }
        // 8. ㄴ 좌우대칭 (가로긴거)
        if (ix - 1 >= 0 && jx + 2 < m) {
            tmpVal = a[ix][jx] + a[ix][jx+1] + a[ix][jx+2] + a[ix-1][jx+2];
            if (result < tmpVal) result = tmpVal;
        }
        // 9. ㄴ (세로긴거)
        if (ix + 2 < n && jx + 1 < m) {
            tmpVal = a[ix][jx] + a[ix+1][jx] + a[ix+2][jx] + a[ix+2][jx+1];
            if (result < tmpVal) result = tmpVal;
        }
        // 10. ㄱ 좌우대칭 (가로긴거)
        if (ix + 1 < n && jx + 2 < m) {
            tmpVal = a[ix][jx] + a[ix+1][jx] + a[ix][jx+1] + a[ix][jx+2];
            if (result < tmpVal) result = tmpVal;
        }
        // 11. ㅁ
        if (ix + 1 < n && jx + 1 < m) {
            tmpVal = a[ix][jx] + a[ix+1][jx] + a[ix][jx+1] + a[ix+1][jx+1];
            if (result < tmpVal) result = tmpVal;
        }
        // 12. h
        if (ix + 2 < n && jx + 1 < m) {
            tmpVal = a[ix][jx] + a[ix+1][jx] + a[ix+1][jx+1] + a[ix+2][jx+1];
            if (result < tmpVal) result = tmpVal;
        }
        // 13. h 좌우대칭
        if (ix + 2 < n && jx - 1 >= 0) {
            tmpVal = a[ix][jx] + a[ix+1][jx] + a[ix+1][jx-1] + a[ix+2][jx-1];
            if (result < tmpVal) result = tmpVal;
        }
        // 14. ㄹ
        if (ix + 1 < n && jx + 2 < m) {
            tmpVal = a[ix][jx] + a[ix][jx+1] + a[ix+1][jx+1] + a[ix+1][jx+2];
            if (result < tmpVal) result = tmpVal;
        }
        // 15. ㄹ 좌우대칭
        if (ix - 1 >= 0 && jx + 2 < m) {
            tmpVal = a[ix][jx] + a[ix][jx+1] + a[ix-1][jx+1] + a[ix-1][jx+2];
            if (result < tmpVal) result = tmpVal;
        }
        if (jx + 2 < m) {
            // 16. ㅜ
            if (ix + 1 < n) {
                tmpVal = a[ix][jx] + a[ix][jx+1] + a[ix][jx+2] + a[ix+1][jx+1];
                if (result < tmpVal) result = tmpVal;
            }
            // 17. ㅗ
            if (ix - 1 >= 0) {
                tmpVal = a[ix][jx] + a[ix][jx+1] + a[ix][jx+2] + a[ix-1][jx+1];
                if (result < tmpVal) result = tmpVal;
            }
        }
        if (ix + 2 < n) {
            if (jx + 1 < m) {
                tmpVal = a[ix][jx] + a[ix+1][jx] + a[ix+2][jx] + a[ix+1][jx+1];
                if (result < tmpVal) result = tmpVal;
            }
            if (jx - 1 >= 0) {
                tmpVal = a[ix][jx] + a[ix+1][jx] + a[ix+2][jx] + a[ix+1][jx-1];
                if (result < tmpVal) result = tmpVal;
            }
        }
    }
}
console.log(result);