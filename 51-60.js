//ques 51
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
checkNumber(5); 
checkNumber(-3); 
checkNumber(0); 

//ques 52
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap Year");
    } else {
        console.log("Not a Leap Year");
    }
}
isLeapYear(2020); 
isLeapYear(2021);

//ques 53
function canVote(age) {
    if (age >= 18) {
        console.log("Can Vote");
    } else {
        console.log("Cannot Vote");
    }
}
canVote(20); 
canVote(16); 
//ques 54
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number");
    }
}
getDayName(1); 
getDayName(5); 

//ques 55
function divisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Divisible by 3 and 5");
    } else {
        console.log("Not divisible by 3 and 5");
    }
}
divisible(15); 
divisible(10); 

//ques 56
function checkGrade(marks) {
    if (marks >= 90) {
        console.log("A");
    } else if (marks >= 80) {
        console.log("B");
    } else if (marks >= 70) {
        console.log("C");
    } else if (marks >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}
checkGrade(85); 
checkGrade(72); 

//ques 57
function compareStrings(str1, str2) {
    if (str1 === str2) {
        console.log("Strings are equal");
    } else {
        console.log("Strings are not equal");
    }
}
compareStrings("hello", "hello");
compareStrings("hello", "world");

//ques 58
function EorO(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log(EorO(4));
console.log(EorO(7));

//ques 59
function findLargestOfThree(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
findLargestOfThree(10, 20, 30);
findLargestOfThree(50, 20, 30); 

//ques 60
function Discount(price) {
    let discount;
    if (price > 100) {
        discount = price * 0.1;
    } else {
        discount = price * 0.05;
    }
    console.log(`Discount: ${discount}`);
}
Discount(150);
Discount(80); 