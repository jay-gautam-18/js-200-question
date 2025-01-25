// ques 1
let nam = 'jay gautam'
let hobibes = ["games","movies","listening"]
console.log(nam,hobibes);
// ques2
let date = Date.now()
let currentYear = new Date().getFullYear();
console.log(currentYear);
// ques3
console.log(45 * 2 - 10);
//ques 4
var Fname = "jay"
var Lname = "gautam"
console.log(Fname + " "+ Lname);
//ques 5
let number = 0;
function updateNumber(newValue) {
    console.log(`The number changed from ${number} to ${newValue}`);
    number = newValue;
  }
updateNumber(10);
updateNumber(4);
updateNumber(15);
//ques 6
console.error('user not found')
// ques 7 
var num  = 12 
console.log(num**2);
//ques 8
var val = true
console.log(typeof val);
//ques 9
var age = 21
if(age >= 18) return console.log( age-18 + " years: greator than 18");
console.log("smaller or eqaual to 18");
//ques 10
console.log(100/0); // infintiy