// ques 81
function getEvenNumbers(array) {
    return array.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// ques 82
function countOccurrences(array, value) {
    return array.reduce((count, current) => (current === value ? count + 1 : count), 0);
}
console.log(countOccurrences([1, 2, 2, 3, 4, 2], 2));

// ques 83
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 

// ques 84
function logPattern() {
    let pattern = "";
    for (let i = 1; i <= 4; i++) {
        pattern += "*".repeat(i) + "\n";
    }
    console.log(pattern);
}
logPattern();
// ques 85
function squareNumbers(array) {
    return array.map(num => num * num);
}
console.log(squareNumbers([1, 2, 3, 4]));

// ques 86
let sumOddNumbers = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        sumOddNumbers += i;
    }
}
console.log(sumOddNumbers);

// ques 87
const person = {
    firstName: "zaaay",
    lastName: "gautaam"
};
console.log(`${person.firstName}  ${person.lastName}`); 

// ques 88
const strNumber = "10";
const convertedNumber = Number(strNumber) + 5;
console.log(convertedNumber); 

// ques 89
function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
console.log(reverseArray([1, 2, 3, 4])); 
// ques 90
function Empty(array) {
    return array.length === 0;
}
console.log(Empty([])); 
console.log(Empty([1, 2, 3])); 

// ques 91
function currentDate() {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
console.log(currentDate()); 

// ques 92
function findSmallestNumber(array) {
    return Math.min(...array);
}
console.log(findSmallestNumber([5, 2, 9, 1, 7]));

// ques 93
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}
console.log(fibonacci(5));

// ques 94
function divide(a, b) {
    try {
        return a / b;
    } catch (error) {
        console.error(error.message);
    }
}
console.log(divide(10, 2));
console.log(divide(10, 0)); 

// ques 95
function vowel(str) {
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return i;
        }
    }
    return "no vowel found";
}
console.log(vowel("bhopu")); 
console.log(vowel("sky")); 

// ques 96
function nonRepeat(array) {
    return [...new Set(array)];
}
console.log(nonRepeat([1, 2, 2, 3, 4, 4, 5]));

// ques 97
function mergeSortedArrays(arr1, arr2) {
    let newArr =  arr1.concat(arr2);
    for(var i = 0 ; i < newArr.length ;i++){
        for(var j = 0 ; j < (newArr.length-i) ;j++){
            if(newArr[j]>newArr[j+1]){
                var t = newArr[j]
                newArr[j]=newArr[j+1]
                newArr[j+1]=t
            }
        }
    }
    return newArr
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// ques 98
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log(countWords("Hello world! This is a test."));

// ques 99
// document.getElementById("myButton").addEventListener("click", function() {
//     this.style.backgroundColor = this.style.backgroundColor === "blue" ? "green" : "blue";
// });

// ques 100
function greatorElements(array, value) {
    return array.every(element => element > value);
}
console.log(greatorElements([10, 20, 30], 5)); 
console.log(greatorElements([10, 20, 30], 15)); 