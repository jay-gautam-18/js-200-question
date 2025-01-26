// 171
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// 172
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Invalid JSON string:", error.message);
        return null;
    }
}

// 173
function validateInput(input) {
    if (typeof input !== "string" || input.trim() === "") {
        throw new Error("Invalid input: Input must be a non-empty string.");
    }
    return true;
}

// 174
function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Failed to fetch data:", error));
}

// 175
function fetchWithCleanup(url) {
    fetch(url)
        .then(response => response.json())
        .catch(error => console.error("Error:", error))
        .finally(() => console.log("Cleanup completed."));
}

// 176
async function retryApiCall(apiCall, retries = 3) {
    while (retries > 0) {
        try {
            return await apiCall();
        } catch (error) {
            retries--;
            if (retries === 0) throw error;
        }
    }
}

// 177
async function fetchWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

// 178
function executeCode(code) {
    try {
        eval(code);
    } catch (error) {
        console.error("Syntax error:", error.message);
    }
}

// 179.
function ensureDefined(variable) {
    if (typeof variable === "undefined") {
        throw new Error("Variable is not defined.");
    }
    return variable;
}

// 180.
const fs = require("fs");
function readFileIfExists(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, "utf8");
    } else {
        throw new Error("File does not exist.");
    }
}
