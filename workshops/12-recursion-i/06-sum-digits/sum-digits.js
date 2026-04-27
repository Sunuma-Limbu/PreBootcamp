// YOUR CODE BELOW

const sumDigits = (num) => {
    if (num === 0) return 0;
    return (num % 10) + sumDigits(Math.floor(num / 10));
}