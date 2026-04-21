// YOUR CODE BELOW

const functionLogger = (func, arg) => {
    console.log('Function starting')
    const result = func(arg)
    console.log('Function complete')
    return result
}

function squareNum(x) {
    return x * x;
}

let squareofFour = functionLogger(squareNum, 4)
console.log(squareofFour)