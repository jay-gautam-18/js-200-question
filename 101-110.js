// ques 1
const result = (5 + 3) * 2 - 8 / 4;
console.log(result);

// ques 2
let variable = 5;
console.log("Before incrementing:", variable); 
variable++;
console.log("After incrementing:", variable);

// ques 3
let a = 10;
let b = 20;
a=a+b;
b=a-b;
a=a-b;
console.log("a:", a); 
console.log("b:", b); 

// ques 4
const nam = "zayyyy";
const age = 21;
console.log(`My name is ${nam} and I am ${age} years old.`); 
// ques 5
const person = { name: "zayay", age: 21, city: "Bhopal" };
console.table(person);

// ques 6
console.group("User Details");
console.log("Name: zayy");
console.log("Age: 21");
console.log("City: Bhopal");
console.groupEnd();

// ques 7
console.time("Loop Time");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Loop Time");

// ques 8
const value = 42;
console.log(`The value is: ${value}`);

// ques 9
function functionA() {
    functionB();
}
function functionB() {
    functionC();
}
function functionC() {
    console.trace("Trace the call stack");
}
functionA();

// ques 10
const dynamicKey = "dynamicProperty";
const dynamicObject = {
    [dynamicKey]: "This is a dynamic value"
};
console.log(dynamicObject); 