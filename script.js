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

let options = {
  length : "10",
  lower : "y",
  upper : "y",
  numeric : "y",
  special : "y",
}

let words = {
  length : "length",
  lower : "lowercases",
  upper : "uppercases",
  numeric : "numeric",
  special : "special",
}


// // iterate over option object and returns its properties 
// for ([key, value] of Object.entries(options)) {
//   console.log(`${key}: ${value}`)
// }

// for (let key in options) {
//   // this provide the properity
//   console.log(`key = ${key}`)
//   // this provide the value.
//   console.log(options[key])
// }





options[key].forEach((key, index) => {
  var words = words[index];
  console.log(key, index);
  
});


// for (let any in options) {

//   options[any] = prompt(`Does the password require ENTTRY WORDS \n Enter 'y' or 'n')`)
//   while (options[any] !== "y" && options[any] !== "n") {
//     alert(`Invalid option, please try again.`)
//     options[any] = prompt(`Does the password require ENTRY WORDS? \n Enter 'y' or 'n'`) 
// }

// }



// for i in object 

// every each property in options, 



/*
option.(ENTRY) = prompt(`Does the password require (ENTRY WORDS)? \n Enter 'y' or 'n')`)

while (options.(ENTRY)) !== "y" && options.lower !== "n") {
    alert(`Invalid option, please try again.`)
    options.lower = prompt(`Does the password require ENTRY WORDS? \n Enter 'y' or 'n'`) 
}
*/






// Function to prompt user for password options
function getPasswordOptions() {

    options.length = prompt("Enter the length of password (between 10-64)")
    while (options.length < 10 || options.length > 64 ){
      alert(`Invalid option, please try again.`)
      options.length = prompt("Enter the length of password (between 10-64)")
    }

    options.lower = prompt(`Does the password require lowercase letters? \n Enter 'y' or 'n')`)
    while (options.lower !== "y" && options.lower !== "n")  {
      alert(`Invalid option, please try again.`)
      options.lower = prompt(`Does the password require lowercase letters? \n Enter 'y' or 'n'`)
    }

    options.upper = prompt(`Does the password require uppercase letters? \n Enter 'y' or 'n')`)
    while (options.upper !== "y" && options.upper !== "n")  {
      alert(`Invalid option, please try again.`)
      options.upper = prompt(`Does the password require uppercase letters? \n Enter 'y' or 'n'`)
    }

    options.numeric = prompt(`Does the password require number? \n Enter 'y' or 'n'`)
    while (options.numeric !== "y" && options.numeric !== "n")  {
      alert(`Invalid option, please try again.`)
      options.numeric = prompt(`Does the password require number? \n Enter 'y' or 'n'`)
    }

    options.special = prompt(`Does the password require special characters? \n Enter 'y' or 'n')`)
    while (options.special !== "y" && options.special !== "n")  {
      alert(`Invalid option, please try again.`)
      options.special = prompt(`Does the password require special characters? \n Enter 'y' or 'n'`)
    }
}

// Function for getting a random element from an array
function getRandom(arr) {

  // return item[Math.floor()Math.random()]



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