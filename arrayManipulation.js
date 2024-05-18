// arrayManipulation.js

/**
 * Function that processes an array of numbers.
 * Each even number is squared and each odd number is tripled.
 */
function processArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i] * arr[i]);
        } else {
            result.push(arr[i] * 3);
        }
    }
    return result;
}


