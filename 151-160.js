// ques 151
for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    button.textContent = `Button ${i}`;
    button.id = `button${i}`;
    document.body.appendChild(button);
}

// ques 152
document.getElementById("button1").addEventListener("click", function() {
    console.log(this.id);
});

// ques 153
const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "lightblue";
div.addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightgreen";
});
div.addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
});
document.body.appendChild(div);

// ques 154
document.getElementById("button2").addEventListener("click", function() {
    div.classList.add("new-class");
});

// ques 155
function toggleVisibility(element) {
    element.style.display = element.style.display === "none" ? "block" : "none";
}
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Visibility";
toggleButton.addEventListener("click", function() {
    toggleVisibility(div);
});
document.body.appendChild(toggleButton);

// ques 156
function countPTags() {
    return document.getElementsByTagName("p").length;
}
console.log(countPTags());

// ques 157
function disableAllInputs(form) {
    const inputs = form.getElementsByTagName("input");
    for (const input of inputs) {
        input.disabled = true;
    }
}
const form = document.createElement("form");
const input1 = document.createElement("input");
const input2 = document.createElement("input");
form.appendChild(input1);
form.appendChild(input2);
document.body.appendChild(form);
disableAllInputs(form);

// ques 158
const originalElement = document.createElement("div");
originalElement.textContent = "Original Element";
document.body.appendChild(originalElement);
const cloneButton = document.createElement("button");
cloneButton.textContent = "Clone Element";
cloneButton.addEventListener("click", function() {
    const clonedElement = originalElement.cloneNode(true);
    document.body.appendChild(clonedElement);
});
document.body.appendChild(cloneButton);

// ques 159
const ul = document.createElement("ul");
["Item 1", "Item 2", "Item 3"].forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", function() {
        console.log(this.textContent);
    });
    ul.appendChild(li);
});
document.body.appendChild(ul);

// ques 160
function validateForm(form) {
    const inputs = form.getElementsByTagName("input");
    for (const input of inputs) {
        if (input.value.trim() === "") {
            alert("All fields must be filled out");
            return false;
        }
    }
    return true;
}
const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.addEventListener("click", function() {
    validateForm(form);
});
form.appendChild(submitButton);