// 181. 
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// 182. 
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// 183. 
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

// 184. 
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 185.
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

// 186.
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 187. 
function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}

// 188. 
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// 189. 
function findPermutations(str) {
    if (str.length === 0) return [''];

    const permutations = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        for (let perm of findPermutations(remaining)) {
            permutations.push(char + perm);
        }
    }
    return permutations;
}

// 190.
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

