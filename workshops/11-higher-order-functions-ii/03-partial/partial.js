// YOUR CODE BELOW

const partial = (callback, arga) => {
    return function(argb){
        return callback(arga, argb)
    }
}

const summer = (a, b) => {
    return a+b;
}

const sumFive = partial (summer, 5)
sumFive(5);