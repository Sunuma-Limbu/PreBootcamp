// YOUR CODE BELOW

const deeperCopy = (arr) => {
    let copy = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let innerCopy = []

            for (let j = 0; j < arr[i].length; j++) {
                innerCopy.push(arr[i][j])
            }

            copy.push(innerCopy)
        } else {
            copy.push(arr[i])
        }
    }

    return copy;
}
