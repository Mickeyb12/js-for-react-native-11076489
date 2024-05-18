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



// Function to format strings based on corresponding numbers
function formatArrayStrings(strings, numbers) {

    let formattedStrings = [];

    for (let i = 0; i < strings.length; i++) {

        let currentString = strings[i];
        let currentNumber = numbers[i];

        if (currentNumber % 2 === 0) {

            formattedStrings.push(currentString.toUpperCase());
        } else {

            formattedStrings.push(currentString.toLowerCase());
        }
    }
    return formattedStrings;
}



