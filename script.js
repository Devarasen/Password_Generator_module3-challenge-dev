// Assignment code here

// create gloabal variables and constants
var characterLength = 20;
var choiceArray = [];

const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const selectedSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


// Get prompts and validate
function getPrompts() {
  choiceArray = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8-128 characters)"));
  console.log(characterLength);
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 -128 digits. Please try again.");
    return false;
  }

  if(confirm("Would you like lowercase letters in your password?")){
    choiceArray = choiceArray.concat(lowerCaseLetters);
  }
  if(confirm("Would you like uppercase letters in your password?")){
    choiceArray = choiceArray.concat(upperCaseLetters);
  }
  if(confirm("Would you like special characters in your password?")){
    choiceArray = choiceArray.concat(selectedSpecialCharacters);
  }
  if(confirm("Would you like numerics in your password?")){
    choiceArray = choiceArray.concat(numbersZeroToNine);
  }
  return true
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var CorrectPrompts = getPrompts();

  if (CorrectPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  } 
  return window.alert(password)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





