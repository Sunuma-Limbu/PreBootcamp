// YOUR CODE BELOW
let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

const finderFunction = (arr, callback) => {
    for (let i = 0; i < arr.length; i ++){
        callback(arr[i])
        if (callback(arr[i])) {
            return i;
        } 
    }
    return -1;
}

function isEven(num){
    return !(num % 2)
}

