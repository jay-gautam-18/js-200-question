// ques 121
function mergeAndRemoveDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeAndRemoveDuplicates([1, 2, 3], [3, 4, 5]));

// ques 122
function findSecondLargest(arr) {
    const uniqueSortedArray = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSortedArray[1];
}
console.log(findSecondLargest([1, 2, 5, 3, 4])); 

// ques 123
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3]));

// ques 124
function totalSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(totalSum([1, 2, 3, 4, 5])); 

// ques 125
function rotateArrayLeft(arr, n) {
    return arr.slice(n).concat(arr.slice(0, n));
}
console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); 

// ques 126
function findFirstEven(arr) {
    return arr.find(num => num % 2 === 0);
}
console.log(findFirstEven([1, 3, 5, 4, 2])); 

// ques 127
function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3]]])); 
// ques 128
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}
console.log(countOccurrences([1, 2, 2, 3, 3, 3])); 

// ques 129
const array = [1, 2, 3, 4, 5];
const hasEven = array.some(num => num % 2 === 0);
const allPositive = array.every(num => num > 0);
console.log(hasEven);
console.log(allPositive);

// ques 130
const objectsArray = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
];
objectsArray.sort((a, b) => a.age - b.age);
console.log(objectsArray);
