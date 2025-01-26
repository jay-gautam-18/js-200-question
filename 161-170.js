// 161.
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);

    return merged;
}

// 162.
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return "target not matched";
}

// 163
function isOneEditAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;

    let edits = 0, i = 0, j = 0;
    while (i < str1.length && j < str2.length) {
        if (str1[i] !== str2[j]) {
            if (edits === 1) return false;
            edits++;

            if (str1.length > str2.length) i++;
            else if (str1.length < str2.length) j++;
            else {
                i++;
                j++;
            }
        } else {
            i++;
            j++;
        }
    }

    return edits <= 1;
}

// 164
function longestCommonPrefix(strs) {
    if (!strs.length) return '';

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return '';
        }
    }

    return prefix;
}

// 165
function canFormPalindrome(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) oddCount++;
        if (oddCount > 1) return false;
    }

    return true;
}

// 166
function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [];

    for (let num of set1) {
        if (set2.has(num)) intersection.push(num);
    }

    return intersection;
}

// 167
function sieveOfEratosthenes(n) {
    const primes = Array(n + 1).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    return primes.map((isPrime, num) => isPrime ? num : null).filter(Boolean);
}

// 168
function generateSubsets(arr) {
    const subsets = [];

    function backtrack(start, current) {
        subsets.push([...current]);

        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    return subsets;
}

// 169
function power(base, exponent) {
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
}

// 170
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = arr.filter(el => el < pivot);
    const right = arr.filter(el => el > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}
