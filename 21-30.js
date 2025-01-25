//ques 21
for (let i = 1; i <= 50; i++) {
    console.log(i);
}
//ques 22
var i = 1
var sum = 0 
while(i<11){
    sum +=i
    i++
}
console.log(sum);
//ques 23
var str = "javaScript"
for (const char of str) {
    console.log(char);
}
//ques 24
for (let i = 1; i <=20 ; i++) {
    i % 2 === 0 ? console.log(i):""  
}
//ques25
let num = 5;
do {
    console.log(num);
    num--;
} while (num >= 1);
//ques 26
let nume = 5
let factorial = 1;
for (let i = 1; i <= nume; i++) {
    factorial *= i;
}
console.log(`Factorial of ${nume} is ${factorial}`)
//ques 27 
for (let i = 1; i <= 3; i++) {
    let row = '';
    for (let j = 1; j <= 3; j++) {
        row += 8 + ' ';
    }
    console.log(row.trim());
}
//ques 28
let array = [1, 2, 3, 4];
let reversedArray = [];
for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}
console.log(reversedArray);
// ques 29 
let numb = 1;
while (numb <= 100) {
    if (numb % 5 === 0) {
        console.log(numb);
    }
    numb++;
}
//30
const obj = {a: 1, b: 2, c: 3};
for (const d in obj) console.log(obj[d]);
