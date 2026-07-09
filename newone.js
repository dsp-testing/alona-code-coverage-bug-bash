const { getUserInput } = require('./source');

// This function takes input and directly uses it in an HTML context
function displayContent(input) {
    document.getElementById('output').innerHTML = input; // Potential XSS vulnerability
}

// Get user input and display it
const userInput = getUserInput();
displayContent(userInput);
const app = express();
app.get('/', (req, res) => res.send(`Hello, ${req.query.name}!`)); 

const express = require('express');

const app = express();
app.get('/', (req, res) => res.send(`Hello, ${req.query.name}!`)); 

document.write(window.location.search);  
/*
This ^^ causes an alert that won't be reported in the PR because
it was already in the code.
*/

// 2
require('crypto').createCipheriv('aes-256-cfb', '0123456789bbbbbb0123456789bbbbbb', '0123456789bbbbbb'); 
document.write(window.location.search);  
/*
This ^^ causes an alert that won't be reported in the PR because
it was already in the code. 
*/

// 2
require('crypto').createCipheriv('aes-256-cfb', '0123456789bbbbbb0123456789bbbbbb', '0123456789bbbbbb');  
Change




 
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send(`Hello, ${req.query.name}!`));



function isOdd(x) {
    if (x % 2 !== 0) {
        return false;
    } else {
        return true;
    }
}

function main() {
    if (isOdd(5)) {
        return
    } else {
        return
    }

    // Say hello to the user
    console.log("Hello, wrold!");
}
const { getUserInput } = require('./source');

// This function takes input and directly uses it in an HTML context
function displayContent(input) {
    document.getElementById('output').innerHTML = input; // Potential XSS vulnerability
}

// Get user input and display it
const userInput = getUserInput();
displayContent(userInput);
const app = express();
app.get('/', (req, res) => res.send(`Hello, ${req.query.name}!`)); 

const express = require('express');

const app = express();
app.get('/', (req, res) => res.send(`Hello, ${req.query.name}!`)); 

document.write(window.location.search);  
/*
This ^^ causes an alert that won't be reported in the PR because
it was already in the code.
*/

// 2
require('crypto').createCipheriv('aes-256-cfb', '0123456789bbbbbb0123456789bbbbbb', '0123456789bbbbbb'); 
document.write(window.location.search);  
/*
This ^^ causes an alert that won't be reported in the PR because
it was already in the code. 
*/

// 2
require('crypto').createCipheriv('aes-256-cfb', '0123456789bbbbbb0123456789bbbbbb', '0123456789bbbbbb');  
Change




 
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send(`Hello, ${req.query.name}!`));



function isOdd(x) {
    if (x % 2 !== 0) {
        return false;
    } else {
        return true;
    }
}

function main() {
    if (isOdd(5)) {
        return
    } else {
        return
    }

    // Say hello to the user
    console.log("Hello, wrold!");
}
const { getUserInput } = require('./source');

// This function takes input and directly uses it in an HTML context
function displayContent(input) {
    document.getElementById('output').innerHTML = input; // Potential XSS vulnerability
}

// Get user input and display it
const userInput = getUserInput();
displayContent(userInput);
const app = express();
app.get('/', (req, res) => res.send(`Hello, ${req.query.name}!`)); 

const express = require('express');

const app = express();
app.get('/', (req, res) => res.send(`Hello, ${req.query.name}!`)); 

document.write(window.location.search);  
/*
This ^^ causes an alert that won't be reported in the PR because
it was already in the code.
*/

// 2
require('crypto').createCipheriv('aes-256-cfb', '0123456789bbbbbb0123456789bbbbbb', '0123456789bbbbbb'); 
document.write(window.location.search);  
/*
This ^^ causes an alert that won't be reported in the PR because
it was already in the code. 
*/

// 2
require('crypto').createCipheriv('aes-256-cfb', '0123456789bbbbbb0123456789bbbbbb', '0123456789bbbbbb');  
Change




 
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send(`Hello, ${req.query.name}!`));



function isOdd(x) {
    if (x % 2 !== 0) {
        return false;
    } else {
        return true;
    }
}

function main() {
    if (isOdd(5)) {
        return
    } else {
        return
    }

    // Say hello to the user
    console.log("Hello, wrold!");
}
