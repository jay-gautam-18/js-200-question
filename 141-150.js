// ques 141
function reverseWords(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
console.log(reverseWords("Hello World")); 

// ques 1442
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
console.log(isValidEmail("test@example.com"));
console.log(isValidEmail("invalid-email")); 

// ques 143
function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}
console.log(containsOnlyDigits("12345")); 
console.log(containsOnlyDigits("123a5")); 

// ques 144
function extractNumbers(str) {
    return str.match(/\d+/g).map(Number);
}
console.log(extractNumbers("I have 2 apples and 3 oranges.")); 

// ques 145
function findOccurrences(str, word) {
    const regex = new RegExp(word, 'g');
    return str.match(regex) || [];
}
console.log(findOccurrences("The cat sat on the mat with another cat.", "cat")); 

// ques 146
function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeFirstLetter("hello world")); 

// ques1 47
function removeDuplicateCharacters(str) {
    return Array.from(new Set(str)).join('');
}
console.log(removeDuplicateCharacters("aabbcc")); 

// ques 148
function replaceMultipleSpaces(str) {
    return str.replace(/\s+/g, ' ');
}
console.log(replaceMultipleSpaces("This   is  a   test.")); 

// ques 149
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));

// ques 150
function countWordFrequency(str) {
    const words = str.toLowerCase().match(/\b\w+\b/g);
    return words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}
console.log(countWordFrequency("This is a test. This test is only a test.")); 
