// Your calculator is going to contain functions for all of the basic math operators you 
//typically find on simple calculators, so start by creating functions for the following items 
//and testing them in your browser’s console.

//     add
//     subtract
//     multiply
//     divide

// Create a new function operate that takes an operator and 2 numbers and
// then calls one of the above functions on the numbers.



function operate(operator,x,y) {
    return operator(x,y)
}

function add(x,y) {
    return x+y;
}
function substract(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x*y;
}
function divide(x,y) {
    return x/y;
}