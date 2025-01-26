// ques 91
async function fetchUserData() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    console.log(data);
}
fetchUserData();

// ques 92
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
    }

    totalCost() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}
const cart = new ShoppingCart();
cart.addItem({ name: 'Apple', price: 1 });
cart.addItem({ name: 'Banana', price: 2 });
cart.removeItem('Apple');
console.log(cart.totalCost());

// ques 93
function paginate(array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(paginate(data, 3, 2));

// ques 94
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'My Dataset',
            data: [10, 20, 30]
        }]
    }
});
function updateChart(newData) {
    chart.data.datasets[0].data = newData;
    chart.update();
}
updateChart([15, 25, 35]);

// ques 95
function highlightText(searchText) {
    const bodyText = document.body.innerHTML;
    const highlightedText = bodyText.replace(new RegExp(searchText, 'gi'), match => `<mark>${match}</mark>`);
    document.body.innerHTML = highlightedText;
}
highlightText('specific text');

// ques 96
class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.elapsedTime = 0;
        this.running = false;
    }

    start() {
        if (!this.running) {
            this.startTime = Date.now() - this.elapsedTime;
            this.running = true;
            this.interval = setInterval(() => {
                this.elapsedTime = Date.now() - this.startTime;
                console.log(this.elapsedTime);
            }, 1000);
        }
    }

    stop() {
        if (this.running) {
            clearInterval(this.interval);
            this.running = false;
        }
    }

    reset() {
        this.stop();
        this.elapsedTime = 0;
    }
}
const stopwatch = new Stopwatch();
stopwatch.start();
setTimeout(() => stopwatch.stop(), 5000);
setTimeout(() => stopwatch.reset(), 7000);

// ques 97
function validatePassword(password) {
    const rules = [
        { regex: /.{8,}/, message: 'Password must be at least 8 characters long' },
        { regex: /[A-Z]/, message: 'Password must contain at least one uppercase letter' },
        { regex: /[a-z]/, message: 'Password must contain at least one lowercase letter' },
        { regex: /[0-9]/, message: 'Password must contain at least one number' },
        { regex: /[^A-Za-z0-9]/, message: 'Password must contain at least one special character' }
    ];
    for (const rule of rules) {
        if (!rule.regex.test(password)) {
            return rule.message;
        }
    }
    return 'Password is strong';
}
console.log(validatePassword('Password123!'));

// ques 98
let currentIndex = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // yaha par images ko daal dena 
function showImage(index) {
    const imgElement = document.getElementById('slider');
    imgElement.src = images[index];
}
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
showImage(currentIndex);

// ques 99
async function fetchAndSortData() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    const users = data.results;
    users.sort((a, b) => a.name.first.localeCompare(b.name.first));
    console.log(users);
}
fetchAndSortData();


// ques 100
const form = document.getElementById('myForm');
form.addEventListener('input', () => {
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    localStorage.setItem('formData', JSON.stringify(formObject));
});
window.addEventListener('load', () => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        Object.keys(savedData).forEach(key => {
            form.elements[key].value = savedData[key];
        });
    }
});