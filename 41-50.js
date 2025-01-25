//ques 41
function EorO(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log(EorO(4)); 
console.log(EorO(7)); 

//ques 42
function Circle(radius) {
    return Math.PI * radius * radius;
}
console.log(Circle(5)); 

//ques 43
function sumArray(array) {
    return array.reduce((sum, current) => sum + current, 0);
  }
  const numbers = [1, 2, 3, 4, 5];
  const result = sumArray(numbers);
  console.log(result); 
  
//ques 44 
function check(str,char){
    if(str[0] == char) return true
    else return false
}
console.log(check("bla bla bla",'b'));
//ques 45
function findMax(a, b) {
    return a > b ? a : b;
}
console.log(findMax(10, 20)); 
console.log(findMax(30, 15)); 
//46
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5)); 

//ques 47
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello")); 

//ques 48
function findLargestNumber(array) {
    return Math.max(...array);
}
console.log(findLargestNumber([1, 2, 3, 4, 5]));

//ques 49
function toKebabCase(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}
console.log(toKebabCase("Hello World"));

//ques 50
function logHelloWorld() {
    console.log("Hello, World!");
}
logHelloWorld();