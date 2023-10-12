// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChoice = "";
var upperChoice = "";
var numberChoice = "";
var specialChoice = "";
var myPassword = "";

function generatePassword() {
  var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var chosenList = [];

  var myPasswordLength = (getpassLength())

  lowerChoice = window.prompt("Would you like to include lowercase characters? (yes/no):");
  if (lowerChoice == "yes") {
    chosenList = chosenList.concat(lowerList);
  }
  upperChoice = window.prompt("Would you like to include uppercase characters? (yes/no):");
  if (upperChoice == "yes") {
    chosenList = chosenList.concat(upperList);
  }
  numberChoice = window.prompt("Would you like to include numbers? (yes/no):");
  if (numberChoice == "yes") {
    chosenList = chosenList.concat(numberList);
  }
  specialChoice = window.prompt("Would you like to include special characters? (yes/no):");
  if (specialChoice == "yes") {
    chosenList = chosenList.concat(specialList);
  }
  
  console.log(lowerChoice)
  console.log(upperChoice)
  console.log(numberChoice)
  console.log(specialChoice)
  console.log(chosenList);

  for (var i = 0; i < myPasswordLength; i++) {
    myPassword += chosenList[Math.floor(Math.random() * (chosenList.length))];
  }

  return myPassword
}

function getpassLength() {
  var passLength = 0;
  while ((passLength < 8) || (passLength > 128)) {
    passLength = window.prompt("Enter length of desired password (8-128 characters): ");
  }
  return passLength;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
