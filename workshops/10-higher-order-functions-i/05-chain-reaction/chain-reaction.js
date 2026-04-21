// YOUR CODE BELOW

const chainReaction = (startingValue, functions) => {
    let result = startingValue;

    for (let i = 0; i < functions.length; i++) {
        result = functions[i](result)
    }

    return result;
}