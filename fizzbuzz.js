// empty array
let sample_array = [];

// helper function
let fill_elements = (arr, num) => {

    for (let i = 0; i <= num; i++) {
        arr[i] = i;
    }

    return arr;
}

let fizzbuzz = (arr, num) => {

    // fill in the array with numbers using the helper function
    fill_elements(arr, num);
    
    for (let i = 1; i < arr.length; i++) {

        // multiples of both three and five
        if (i % 3 === 0 && i % 5 === 0) {
            arr[i] = `${i} - FizzBuzz`;
        }

        // multiples of three
        else if (i % 3 === 0) {
            arr[i] = `${i} - Fizz`;
        }

        // multiples of five
        else if (i % 5 === 0) {
            arr[i] = `${i} - Buzz`;
        }

        console.log(arr[i]);
    }
    
    return `\nComplete!`;
}

console.log(fizzbuzz(sample_array, 30));

/* Output:

    1
    2
    3 - Fizz
    4
    5 - Buzz
    6 - Fizz
    7
    8
    9 - Fizz
    10 - Buzz
    11
    12 - Fizz
    13
    14
    15 - FizzBuzz
    16
    17
    18 - Fizz
    19
    20 - Buzz
    21 - Fizz
    22
    23
    24 - Fizz
    25 - Buzz
    26
    27 - Fizz
    28
    29
    30 - FizzBuzz

    Complete!
*/