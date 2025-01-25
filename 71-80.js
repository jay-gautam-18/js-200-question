//ques 71
const str = "Hello, JavaScript!";
console.log(str.length); 

//ques 72
const four = str.slice(-4);
console.log(four); 

//ques 73
const lowercase = str.toLowerCase();
console.log(lowercase);

//ques 74
const words = str.split(' ');
console.log(words);
//ques 75
const find = str.indexOf('a');
console.log(find);

//ques 76
const replaced = str.replace("JavaScript", "JS");
console.log(replaced);

//ques 77
const repeated = "Hello".repeat(3);
console.log(repeated); 
//ques 78
function containsWord(str, word) {
    return str.includes(word);
}
console.log(containsWord(str, "JavaScript")); 
console.log(containsWord(str, "Python")); 

//ques 79
const spaces = "   Hello, JavaScript!   ";
const removed = spaces.trim();
console.log(removed);

//ques 80
function vowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(vowels(str)); 