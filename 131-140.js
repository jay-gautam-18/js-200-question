// ques 131
function powerOf(exponent) {
    return function(base) {
        return Math.pow(base, exponent);
    };
}
const square = powerOf(2);
console.log(square(4)); 

// ques 3122
function fibonacci(n, sequence = [0, 1]) {
    if (n <= 2) return sequence.slice(0, n);
    const nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    return fibonacci(n, [...sequence, nextTerm]);
}
console.log(fibonacci(5)); 

// ques 133
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}
const counter = createCounter();
console.log(counter()); 
console.log(counter()); 

// ques 134
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 

// ques 135
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}
const debouncedFunction = debounce(() => console.log("Button clicked"), 300);
document.getElementById("myButton").addEventListener("click", debouncedFunction);

// ques 136
function throttle(fn, limit) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn(...args);
        }
    };
}
const throttledFunction = throttle(() => console.log("API call"), 1000);
document.getElementById("myButton").addEventListener("click", throttledFunction);

// ques 137
function applyCallback(array, callback) {
    return array.map(callback);
}
console.log(applyCallback([1, 2, 3], num => num * 2));

// ques 138
function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}
console.log(gcd(48, 18)); 

// ques 139
function executeSequentially(functions) {
    functions.forEach(fn => fn());
}
executeSequentially([
    () => console.log("First function"),
    () => console.log("Second function"),
    () => console.log("Third function")
]);

// ques 140
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}
const addThreeNumbers = (a, b, c) => a + b + c;
const curriedAdd = curry(addThreeNumbers);
console.log(curriedAdd(1)(2)(3)); 