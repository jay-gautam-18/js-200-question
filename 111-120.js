// 111. 
for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + '\t';
    }
    console.log(row);
}

// 112.
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}

// 113.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log('Sum of all even numbers between 1 and 100:', sum);

// 114. 
const str = "JavaScript";
let vowelCount = 0;
for (let char of str) {
    if ('aeiouAEIOU'.includes(char)) {
        vowelCount++;
    }
}
console.log('Number of vowels in the string:', vowelCount);

// 115.
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log('First number divisible by 7:', i);
        break;
    }
}

// 116.
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// 117.
let number;
do {
    number = prompt("Enter a positive number:");
} while (number <= 0);

// 118.
const rows = 4;
for (let i = 1; i <= rows; i++) {
    let str = ' '.repeat(rows - i);
    str += '*'.repeat(2 * i - 1);
    console.log(str);
}

// 119. 
const originalString = "JavaScript";
let reversedString = '';
for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
}
console.log('Reversed string:', reversedString);

// 120.
const numbers = [1, 2, 3, 4, 5];
let product = 1;
for (let num of numbers) {
    product *= num;
}
console.log('Product of all numbers in the array:', product);
