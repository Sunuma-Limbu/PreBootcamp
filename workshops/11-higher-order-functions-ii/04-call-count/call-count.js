// YOUR CODE BELOW

const callCount = () => {
    let count = 0;
    return function() {
        count ++;
        return count;
    }
}

const newFunc = callCount()
console.log(newFunc())
console.log(newFunc())