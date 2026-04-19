// YOUR CODE BELOW

const veryOddMutant = (arr) => {
    let count = 0;
    for (let i in arr) {
        if (arr[i] % 2 == 0) {
            arr[i] = 'normie'
            count ++;
        }
    }
    return count;
}