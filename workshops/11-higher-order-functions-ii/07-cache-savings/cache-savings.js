// YOUR CODE BELOW

const cacheSavings = (callback) => {
    let cache = {}
    return function(arg) {
        if (arg in cache) {
            return cache[arg]
        }
        const result = callback(arg)
        cache[arg] = result;
        return result;
    }
}