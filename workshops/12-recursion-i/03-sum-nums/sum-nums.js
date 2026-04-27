// YOUR CODE BELOW

const sumNums = (num) => {
    if (num < 1) {
        return 0;
    }
    return num + sumNums(num -1)
}

let result = sumNums(5)
console.log(result)