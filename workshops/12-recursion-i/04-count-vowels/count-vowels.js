// YOUR CODE BELOW

const countVowels = (str) => {
    if (str.length === 0) return 0;

    let vowels = 'aeiouAEIOU'
    let first = str[0]

    return (vowels.includes(first) ? 1 : 0) + countVowels(str.slice(1))
}