// 191. 
function longestPalindromeSubstring(str) {
    let maxLength = 0;
    let longestPalindrome = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            const substring = str.slice(i, j + 1);
            if (substring === substring.split('').reverse().join('') && substring.length > maxLength) {
                maxLength = substring.length;
                longestPalindrome = substring;
            }
        }
    }

    return longestPalindrome;
}

// 192. 
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// 193.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// 194. 
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// 195.
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);

    function merge(left, right) {
        const sorted = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sorted.push(left.shift());
            } else {
                sorted.push(right.shift());
            }
        }
        return [...sorted, ...left, ...right];
    }
}

// 196. 
function heapSort(arr) {
    const n = arr.length;

    function heapify(arr, n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

// 197.
function countingSort(arr, max) {
    const count = Array(max + 1).fill(0);
    const output = Array(arr.length);

    for (let num of arr) {
        count[num]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}

// 198. 
function radixSort(arr) {
    const maxNum = Math.max(...arr) + '';
    let divisor = 1;

    for (let i = 0; i < maxNum.length; i++) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (let num of arr) {
            const digit = Math.floor((num / divisor) % 10);
            buckets[digit].push(num);
        }

        arr = [].concat(...buckets);
        divisor *= 10;
    }

    return arr;
}

// 199. 
function shellSort(arr) {
    let gap = Math.floor(arr.length / 2);

    while (gap > 0) {
        for (let i = gap; i < arr.length; i++) {
            const temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// 200. 
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}
