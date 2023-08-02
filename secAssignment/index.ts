 
var promptsYNC = require('prompt-sync')();
function calculateGrade(marks: number): string {
  if (marks >= 90 && marks<=100) {
    return 'A+';
  } else if (marks >= 80 && marks<=89) {
    return 'A';
  } else if (marks >= 70 && marks<=79) {
    return 'B';
  } else if (marks >= 60 && marks<=69) {
    return 'C';
  } else if (marks >= 50 && marks<=59) {
    return 'D';
  } else {
    return 'F';
  }
}

function getMarks(subject: string): number {
  let userInput: number | null = parseInt(promptsYNC(`Enter marks for ${subject}:`), 10);
  
  if (typeof userInput === 'number' && !isNaN(userInput)) {
    return userInput;
  } else {
    console.log('Invalid input. Please enter a valid number.');
    return 0;
  }
}

// Get marks for each subject
let mathMarks: number = getMarks('Mathematics');
let scienceMarks: number = getMarks('Science');
let englishMarks: number = getMarks('English');

// Calculate grades for each subject
let mathGrade: string = calculateGrade(mathMarks);
let scienceGrade: string = calculateGrade(scienceMarks);
let englishGrade: string = calculateGrade(englishMarks);

// Display the grades to the user
console.log(`Mathematics Grade: ${mathGrade}`);
console.log(`Science Grade: ${scienceGrade}`);
console.log(`English Grade: ${englishGrade}`);