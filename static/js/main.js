// CSS-COBC Website JavaScript

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS-COBC Website loaded successfully');
    
    // Add your JavaScript functionality here
    initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
    // Add event listeners
    setupEventListeners();
    
    // Any other initialization code
    console.log('Website initialized');
}

// Setup event listeners
function setupEventListeners() {
    // Example: Add click handlers, form submissions, etc.
    // document.getElementById('someButton').addEventListener('click', handleClick);
}

// Example function
function handleClick(event) {
    event.preventDefault();
    console.log('Button clicked');
}

// Additional functions can be added here as needed

// variables
let btn1 = document.getElementById('btn_p1');
let btn2 = document.getElementById('btn_p2');

let p1 = document.getElementById('first_event_p')
let p2 = document.getElementById('second_event_p')

function btnShowp1() {
    p1.style.display = 'block';
    p2.style.display = 'none';
}

