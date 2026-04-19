// YOUR CODE BELOW

const mySplice = (arr, startIdx, deleteCount, newValue) => {
    let removedElement = [];
    let keptElement = [];

    for (let i = 0; i < startIdx; ++i) {
        let element = arr[i]
        keptElement.push(element);
    }

    if (newValue !== undefined) {
        keptElement.push(newValue)
    }
    
    for (let i = startIdx; i < startIdx + deleteCount; i++) {
        let element = arr[i]
        removedElement.push(element)
    }

    for (let i = startIdx + deleteCount; i < arr.length; i++) {
        keptElement.push(arr[i]);
    }

    while (arr.length) {
        arr.pop()
    }

    for (let i = 0; i < keptElement.length; i ++) {
        let element = keptElement[i];
        arr.push(element)
    }

    return removedElement;
}
