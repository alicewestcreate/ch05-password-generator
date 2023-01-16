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
  special : "",
  // numeric : "",
  // upper : "",
  // lower : "",
}

let words = {
  length : "length",
  special : "special",
  numeric : "numeric",
  upper : "uppercases",
  lower : "lowercases",
}


let arrayOfOptions = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters]


for (let property in options) {
  
  if (property === "length") { 
    options[property] = prompt("Enter the length of password (between 10-64)")
    // while entry is less than 10 or more than 64 or not a number, display error message
    while (options[property] <= 9 || options[property] >= 64 || isNaN(options[property])) {
      options[property] = "" //Clears the previous entry to enter the loop again. 
      alert(`Invalid option, please try again.`)
      options[property] = prompt("Enter the length of password (between 10-64)")
    } // end while
  }// end of if

  else {
    options[property] = prompt(`Does the password require ENTTRY WORDS \n Enter 'y' or 'n'`)
      while (options[property] !== "y" && options[property] !== "n") {
        alert(`Invalid option, please try again.`)
        options[property] = prompt(`Does the password require ENTTRY WORDS \n Enter 'y' or 'n'`)
      } // end of while
  } // end of else 
} // end of for

console.log(options)

// arrayOfOptions[i].length  = returns the length of an the next array


let arrayLength = function() {
  for (let index = 0; index < arrayOfOptions[0].length; index++) {
    const length = arrayOfOptions[0][index];
    console.log(length)
  }
}
arrayLength()

let randomIndex = Math.floor(Math.random() * 5)
let item = arrayLength[0][randomIndex]
console.log(item)




// let randomValue = specialCharacters[randomIndex]
// console.log(randomValue)

// console.log(arrayOfOptions)



// I need to get a random character, for each of the types of charaters requested. 
// And repeat this for the value entered in "length"







// getLength function, gets the number entered into the length property, 
// and loops until counters == the length entered.

// let getLength = function() {

//   let counter = 0

//   while (counter < options.length) {
//   counter += 1
//   console.log(counter)
//   }
// }

// getLength()

//For index in range("length") 
// if option.special = yes
  // go get a random item

// if special = yes
// loop throught spcialCharaters 


















// Function to prompt user for password options
function getPasswordOptions() {


  for (let property in options) {
  
    if (property === "length") {  //for the property === length, ask for a number, and check creditals
      options[property] = prompt("Enter the length of password (between 10-64)")
      // while entry is less than 10 or more than 64 or not a number, display error message
      while (options[property] <= 9 || options[property] >= 64 || isNaN(options[property])) {
        options[property] = "" //Clears the previous entry to enter the loop again. 
        alert(`Invalid option, please try again.`)
        options[property] = prompt("Enter the length of password (between 10-64)")
      } // end while
    }// end of if
  
    else { // for all the other properites, just ask yes and no questions 
      options[property] = prompt(`Does the password require ENTTRY WORDS \n Enter 'y' or 'n')`)
        while (options[property] !== "y" && options[property] !== "n") {
          alert(`Invalid option, please try again.`)
          options[property] = prompt(`Does the password require ENTTRY WORDS \n Enter 'y' or 'n')`)
        } // end of while
    } // end of else 
  } // end of for
  
  return(options)
  



                          // options.length = prompt("Enter the length of password (between 10-64)")
                          // while (options.length < 10 || options.length > 64 ){
                          //   alert(`Invalid option, please try again.`)
                          //   options.length = prompt("Enter the length of password (between 10-64)")
                          // }

                          // options.lower = prompt(`Does the password require lowercase letters? \n Enter 'y' or 'n')`)
                          // while (options.lower !== "y" && options.lower !== "n")  {
                          //   alert(`Invalid option, please try again.`)
                          //   options.lower = prompt(`Does the password require lowercase letters? \n Enter 'y' or 'n'`)
                          // }

                          // options.upper = prompt(`Does the password require uppercase letters? \n Enter 'y' or 'n')`)
                          // while (options.upper !== "y" && options.upper !== "n")  {
                          //   alert(`Invalid option, please try again.`)
                          //   options.upper = prompt(`Does the password require uppercase letters? \n Enter 'y' or 'n'`)
                          // }

                          // options.numeric = prompt(`Does the password require number? \n Enter 'y' or 'n'`)
                          // while (options.numeric !== "y" && options.numeric !== "n")  {
                          //   alert(`Invalid option, please try again.`)
                          //   options.numeric = prompt(`Does the password require number? \n Enter 'y' or 'n'`)
                          // }

                          // options.special = prompt(`Does the password require special characters? \n Enter 'y' or 'n')`)
                          // while (options.special !== "y" && options.special !== "n")  {
                          //   alert(`Invalid option, please try again.`)
                          //   options.special = prompt(`Does the password require special characters? \n Enter 'y' or 'n'`)
                          // }
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