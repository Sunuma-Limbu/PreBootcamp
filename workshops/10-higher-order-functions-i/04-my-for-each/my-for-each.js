// YOUR CODE BELOW

const myForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}

let sum = 0;


function addToSum (num) {
    sum += num;
}