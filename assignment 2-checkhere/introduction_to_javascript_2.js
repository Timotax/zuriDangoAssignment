let operatorType = prompt('Enter the operator you want to do');
let numBer1 = prompt('Enter a number');
let numBer2 = prompt('Enter another number');

if (operatorType == '+') {
    let numUse = parseInt(numBer1) + parseInt(numBer2);
    window.prompt('The result is' + numUse);
} else if (operatorType == '*') {
    let numUse = numBer1 * numBer2;
    window.prompt('The result is' + numUse);
} else if (operatorType == '/') {
    let numUse = numBer1 / numBer2;
    window.prompt('The result is' + numUse);
} else if (operatorType == '-') {
    let numUse = numBer1 - numBer2;
    window.prompt('The result is' + numUse);
}