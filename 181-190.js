// ques 181
function groupBy(array, property) {
    return array.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
const data = [
    { category: "fruit", name: "apple" },
    { category: "fruit", name: "banana" },
    { category: "vegetable", name: "carrot" }
];
console.log(groupBy(data, "category"));

// ques 182
const transformedData = data.map(item => ({
    type: item.category,
    itemName: item.name
}));
console.log(transformedData);

// ques 183
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);

// ques 184
function mergeUniqueArrays(...arrays) {
    return [...new Set(arrays.flat())];
}
console.log(mergeUniqueArrays([1, 2], [2, 3], [3, 4])); 

// ques 185
function countProperties(array, property) {
    return array.reduce((acc, obj) => {
        const key = obj[property];
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
}
console.log(countProperties(data, "category"));

// ques 186
function sortByProperties(array, properties) {
    return array.sort((a, b) => {
        for (const property of properties) {
            if (a[property] > b[property]) return 1;
            if (a[property] < b[property]) return -1;
        }
        return 0;
    });
}
const people = [
    { name: "jaay", age: 30 },
    { name: "zayy", age: 25 },
    { name: "jay", age: 20 }
];
console.log(sortByProperties(people, ["name", "age"]));

// ques 187
function createNestedObject(pairs) {
    return pairs.reduce((acc, [key, value]) => {
        const keys = key.split('.');
        keys.reduce((nested, key, index) => {
            if (index === keys.length - 1) {
                nested[key] = value;
            } else {
                nested[key] = nested[key] || {};
            }
            return nested[key];
        }, acc);
        return acc;
    }, {});
}
console.log(createNestedObject([["a.b.c", 1], ["a.b.d", 2]]));

// ques 188
function groupByReduce(array, property) {
    return array.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
console.log(groupByReduce(data, "category"));

// ques 189
function findDifference(arr1, arr2, key) {
    const arr2Keys = arr2.map(obj => obj[key]);
    return arr1.filter(obj => !arr2Keys.includes(obj[key]));
}
const arr1 = [{ id: 1, name: "zayy" }, { id: 2, name: "Jayy" }];
const arr2 = [{ id: 1, name: "Jayy" }];
console.log(findDifference(arr1, arr2, "name")); 

// ques 190
function filterAndTransform(array, filterFn, transformFn) {
    return array.filter(filterFn).map(transformFn);
}
const items = [
    { name: "apple", type: "fruit" },
    { name: "carrot", type: "vegetable" }
];
console.log(filterAndTransform(items, item => item.type === "fruit", item => item.name));