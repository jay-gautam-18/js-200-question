//ques 61
const person = {
    name: "Jay gautam",
    age: 21,
    city: "bhopal Sherr me"
};
console.log(person);
//ques 62
person.isStudent = true
console.log(person);
//ques 63
console.log(person['city']);
//ques 64
delete person.age
console.log(person);
//ques 65
function logObjectKeys(obj) {
    for (const key in obj)  console.log(key);      
}
logObjectKeys(person);
//ques 66
const books = [
    { title: "haary potter and the philosopher's stone", author: "J. K. Rowling" },
    { title: "The Subtle Art of Not Giving a F*ck", author: "mark mason" },
    { title: "50 shades of gray ", author: "  E. L. James" }
];
console.log(books);

//ques 67
console.log(books[1].author);

//ques 68
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}
console.log(hasKey(person, 'name'));
console.log(hasKey(person, 'age'));

//ques 69
function countKeys(obj) {
    return Object.keys(obj).length;
}
console.log(countKeys(person));

//ques 70
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);