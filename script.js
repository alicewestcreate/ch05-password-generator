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

// variables

let length = ""
let lower = ""
let upper = ""
let numeric = ""
let special = ""


// Function to prompt user for password options
function getPasswordOptions() {

    length = prompt("Enter the length of password (between 10-64)")
    while (length < 10 || length > 64 ){
      alert(`Invalid option, please try again.`)
      length = prompt("Enter the length of password (between 10-64)")
    }

    lower = prompt(`Does the password require lowercase letters? \n Enter 'y' or 'n')`)
    while (lower !== "y" && lower !== "n")  {
      alert(`Invalid option, please try again.`)
      lower = prompt(`Does the password require lowercase letters? \n Enter 'y' or 'n'`)
    }

    upper = prompt(`Does the password require uppercase letters? \n Enter 'y' or 'n')`)
    while (upper !== "y" && upper !== "n")  {
      alert(`Invalid option, please try again.`)
      upper = prompt(`Does the password require uppercase letters? \n Enter 'y' or 'n'`)
    }

    numeric = prompt(`Does the password require number? \n Enter 'y' or 'n'`)
    while (numeric !== "y" && numeric !== "n")  {
      alert(`Invalid option, please try again.`)
      numeric = prompt(`Does the password require number? \n Enter 'y' or 'n'`)
    }

    special = prompt(`Does the password require special characters? \n Enter 'y' or 'n')`)
    while (special !== "y" && special !== "n")  {
      alert(`Invalid option, please try again.`)
      special = prompt(`Does the password require special characters? \n Enter 'y' or 'n'`)
    }

}

// Function for getting a random element from an array
function getRandom(arr) {




}

// Function to generate password with user input
function generatePassword() {



}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




// 