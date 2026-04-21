// YOUR CODE BELOW

const stringify = (callback) => {
    return function() {
        return String(callback())
    }
}

const returnANumber = () => {
    return 100;
}