

// Step 0
// Generate a password when the button is clicked

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// STEP 1
// Present a series of prompts for password criteria


// Function to prompt user for password options
function getPasswordOptions() {

//Clearing the pool
let charactersPool = " ";


// STEP 1.A
// Length of password

let length = prompt(`Enter length of password (between 10-64)`)


//STEP 1.B
// At least 10 characters but no more than 64.

if (length >= 10 && length <= 64) {

  // Character types
  // Lowercase
  // Uppercase
  // Numeric
  // Special characters ($@%&*, etc)

  let lowercaseConfirm = confirm(`Do you require lowercase letters`)
  let uppercaseConfirm = confirm(`Do you require uppercase letters`)
  let numericConfirm = confirm(`Do you require numbers`)
  let specialConfirm = confirm(`Do you require special characters`)
}

// STEP 1.C
// Code should validate for each input and at least one character type should be selected

if (lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false && specialConfirm === false) {
  alert(`Wrong input`)
} else {
  if (lowercaseConfirm) {
    //add lowers case array to pool array

  }
  if (uppercaseConfirm) {

  }
  if (numericConfirm) {

  }
  if (specialConfirm) {

  }

}



}








// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}


// STEP 4
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}









// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];






