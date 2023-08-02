"use strict";
var promptsYNC = require('prompt-sync')();
function calculateGrade(marks) {
    if (marks >= 90 && marks <= 100) {
        return 'A+';
    }
    else if (marks >= 80 && marks <= 89) {
        return 'A';
    }
    else if (marks >= 70 && marks <= 79) {
        return 'B';
    }
    else if (marks >= 60 && marks <= 69) {
        return 'C';
    }
    else if (marks >= 50 && marks <= 59) {
        return 'D';
    }
    else {
        return 'F';
    }
}
function getMarks(subject) {
    let userInput = parseInt(promptsYNC(`Enter marks for ${subject}:`), 10);
    if (typeof userInput === 'number' && !isNaN(userInput)) {
        return userInput;
    }
    else {
        console.log('Invalid input. Please enter a valid number.');
        return 0;
    }
}
// Get marks for each subject
let mathMarks = getMarks('Mathematics');
let scienceMarks = getMarks('Science');
let englishMarks = getMarks('English');
// Calculate grades for each subject
let mathGrade = calculateGrade(mathMarks);
let scienceGrade = calculateGrade(scienceMarks);
let englishGrade = calculateGrade(englishMarks);
// Display the grades to the user
console.log(`Mathematics Grade: ${mathGrade}`);
console.log(`Science Grade: ${scienceGrade}`);
console.log(`English Grade: ${englishGrade}`);
