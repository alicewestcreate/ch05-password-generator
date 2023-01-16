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




// // Step 0
// // Generate a password when the button is clicked

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);



// Global Variables 

let charactersPool = [];
let passwordLength = "";


// STEP 1
// Present a series of prompts for password criteria

// Function to prompt user for password options
function getPasswordOptions() {

  //Clearing the pool
  charactersPool = [];

  // STEP 1.A
  // Length of password
  passwordLength = prompt(`Enter length of password (between 10-64)`)

  //STEP 1.B
  // At least 10 characters but no more than 64.
  let lowercaseConfirm = " "
  let uppercaseConfirm = " "
  let numericConfirm = " "
  let specialConfirm = " "

  if (passwordLength >= 10 && passwordLength <= 64) {
    // Character types // Lowercase // Uppercase // Numeric // Special characters ($@%&*, etc)
    lowercaseConfirm = confirm(`Do you require lowercase letters`)
    uppercaseConfirm = confirm(`Do you require uppercase letters`)
    numericConfirm = confirm(`Do you require numbers`)
    specialConfirm = confirm(`Do you require special characters`)
  }

  // STEP 1.C
  // Code should validate for each input and at least one character type should be selected
  if (lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false && specialConfirm === false) {
    alert(`Wrong input`)
  } else {
    if (lowercaseConfirm) {
      charactersPool.push(...lowerCasedCharacters)
    }
    if (uppercaseConfirm) {
      charactersPool.push(...upperCasedCharacters)
    }
    if (numericConfirm) {
      charactersPool.push(...numericCharacters)
    }
    if (specialConfirm) {
      charactersPool.push(...specialCharacters)
    }
  }
  return 

  } // End of getPasswordOptions function


  // -------------------------------------------------------------------------------------------

  // STEP 2 
  // Function for getting a random element from an array
  function getRandom(arr) {

    // Produce a randomised number, from 0 to length of array
    let randomIndex = (Math.floor(Math.random() * charactersPool.length))
    // assign the randomised number as an index number, to get corrosponding item
    let item = charactersPool[randomIndex]

  return item

} // getRandom() END


// -------------------------------------------------------------------------------------------


// Function to generate password with user input
function generatePassword() {
  // Call the getPassword Function to provide informatio for the generatePassword function
  getPasswordOptions()
  
  let password = []
  for (let index = 0; index < passwordLength; index++) {
    item = getRandom()
    password.push(item) 
  }

let newpassword = password.join("")
console.log(`${newpassword}`) 
return 

}


// STEP 4
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  console.log(`This is password ${password}`)
  passwordText.value = password;
}


writePassword()









