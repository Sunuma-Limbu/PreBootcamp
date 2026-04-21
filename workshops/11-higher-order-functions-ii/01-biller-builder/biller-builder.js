// YOUR CODE BELOW

const billerBuilder = (state) => {
    return function(price) {
        let finalPrice = 0
        if (state === 'NY') {
            finalPrice = price * 1.03 * 1.04
        } 
        if (state === 'NJ') {
            finalPrice = price * 1.05 * 1.06625
        }
        return finalPrice;
    }
}