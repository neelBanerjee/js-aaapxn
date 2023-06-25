// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

appDiv.innerHTML = `<h1>JS Starter</h1>`;

const obj = { a: 1, b: 2, c: 3, d: 4 };

const { c: test } = obj;

console.log(test);
