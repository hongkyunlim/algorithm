var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./9095.txt'), 'utf8').toString().trim().split('\n');
// var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var ix;
for (ix = 0; ix < inputs.length; ix++) {
    inputs[ix] = +(inputs[ix].split(' '));
}
inputs = inputs.splice(1);
var n, l1, l2, l3, l4, l5, l6, l7, l8, l9, l0, result;
for (ix = 0; ix < inputs.length; ix++) {
    n = inputs[ix];
    result = 0;
    for (l1 = 1; l1 <=3; l1++) {
        if (l1 === n) result += 1;
        for (l2 = 1; l2 <=3; l2++) {
            if (l1 + l2 === n) result += 1;
            for (l3 = 1; l3 <=3; l3++) {
                if (l1 + l2 + l3 === n) result += 1;
                for (l4 = 1; l4 <=3; l4++) {
                    if (l1 + l2 + l3 + l4 === n) result += 1;
                    for (l5 = 1; l5 <=3; l5++) {
                        if (l1 + l2 + l3 + l4 + l5 === n) result += 1;
                        for (l6 = 1; l6 <=3; l6++) {
                            if (l1 + l2 + l3 + l4 + l5 + l6 === n) result += 1;
                            for (l7 = 1; l7 <=3; l7++) {
                                if (l1 + l2 + l3 + l4 + l5 + l6 + l7 === n) result += 1;
                                for (l8 = 1; l8 <=3; l8++) {
                                    if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 === n) result += 1;
                                    for (l9 = 1; l9 <=3; l9++) {
                                        if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 === n) result += 1;
                                        for (l0 = 1; l0 <=3; l0++) {
                                            if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l0 === n) result += 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result)
}
