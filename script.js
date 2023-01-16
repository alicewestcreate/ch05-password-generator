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



// Global Variables 

let charactersPool = [];
let passwordLength = "";


// --------------------------------------------------------------
///////////////////////////  STEP 0  ///////////////////////////
// --------------------------------------------------------------

// Generate a password when the button is clicked & Get references to the #generate element & Add event listener to generate button
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);



// --------------------------------------------------------------
///////////////////////////  STEP 1  ///////////////////////////
// --------------------------------------------------------------

// This function runs a series of prompts for password criteria
function getPasswordOptions() {

  //This clears the variables every time the function is called. 
  charactersPool = [];
  let lowercaseConfirm = " "
  let uppercaseConfirm = " "
  let numericConfirm = " "
  let specialConfirm = " "

  //This declares password length
  passwordLength = prompt(`Enter length of password (between 10-64)`)

  // Check and validate input. Repeat code, until input matches criteria
  while (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
    alert("Invalid Entry");
    passwordLength = prompt(`Enter length of password (between 10-64)`);
  }

  //A series of confirm prompts for the remaining criteria
  let characterPrompts = function() {
    lowercaseConfirm = confirm(`Can the password have lowercase letters`)
    uppercaseConfirm = confirm(`Can the password have uppercase letters`)
    numericConfirm = confirm(`Can the password have numbers`)
    specialConfirm = confirm(`Can the password have special characters`)

    let results = [lowercaseConfirm, uppercaseConfirm, numericConfirm, specialConfirm]
    return results
  }

  characterPrompts ()


    // Validate each character type, if selected/true, push the array for that group to the characterPool array. 
    if (lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false && specialConfirm === false) {
      alert(`Error - Please select at least one type of character`)
    characterPrompts ()
    }  
    
    if (lowercaseConfirm === true) {
      charactersPool.push(...lowerCasedCharacters)
    }
    if (uppercaseConfirm === true) {
      charactersPool.push(...upperCasedCharacters)
    }
    if (numericConfirm === true) {
      charactersPool.push(...numericCharacters)
    }
    if (specialConfirm === true) {
      charactersPool.push(...specialCharacters)
    }
  
  return 

  } // End of getPasswordOptions function

  // --------------------------------------------------------------
  ///////////////////////////  STEP 2  ///////////////////////////
  // --------------------------------------------------------------

  // Function for getting a random element from an array
  function getRandom(arr) {

    // Produce a randomised number, from 0 to length of array
    let randomIndex = (Math.floor(Math.random() * charactersPool.length))
    // assign the randomised number as an index number, to get corrosponding item
    let item = charactersPool[randomIndex]

  return item

} // getRandom() END


// --------------------------------------------------------------
///////////////////////////  STEP 3  ///////////////////////////
// --------------------------------------------------------------


// Function to generate password with user input
function generatePassword() {
  // Call the getPassword Function to provide the information for the generatePassword function
  getPasswordOptions()
  
  // Variable to hold the randomised characters each time the loop runs
  let randomisedCharacters = []

  for (let index = 0; index < passwordLength; index++) {
    item = getRandom()
    randomisedCharacters.push(item) 
  }

  // removing the commas from the randomisedCharacterarray. 
  let prePassword = randomisedCharacters.join("")
  return prePassword

}

// --------------------------------------------------------------
///////////////////////////  STEP 4  ///////////////////////////
// --------------------------------------------------------------

// Function to write password, when the funcation is called on click. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  console.log(`This is password ${password}`)
  passwordText.value = password;
}

