// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChoice = "";
var upperChoice = "";
var numberChoice = "";
var specialChoice = "";
var myPassword = "";

// Defines generatePassword function
function generatePassword() {
  // Defines lists of possible character types used in password
  var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var chosenList = [];

  // Sets a variable to the return of getpassLength()
  var myPasswordLength = (getpassLength());

  // The while loop ensures at least one character type is chosen
  // While loop contains the prompts for character type as well as concatenating chosen options to a separate list
  charChoices = 4
  while (charChoices == 4) {
    lowerChoice = window.prompt("Would you like to include lowercase characters? (yes/no):");
    if (lowerChoice == "yes") {
      chosenList = chosenList.concat(lowerList);
      charChoices -= 1
    }
    upperChoice = window.prompt("Would you like to include uppercase characters? (yes/no):");
    if (upperChoice == "yes") {
      chosenList = chosenList.concat(upperList);
      charChoices -= 1
    }
    numberChoice = window.prompt("Would you like to include numbers? (yes/no):");
    if (numberChoice == "yes") {
      chosenList = chosenList.concat(numberList);
      charChoices -= 1
    }
    specialChoice = window.prompt("Would you like to include special characters? (yes/no):");
    if (specialChoice == "yes") {
      chosenList = chosenList.concat(specialList);
      charChoices -= 1
    }
    if (charChoices == 4) {
      mustChoose = window.alert("You must include at least one type of character.")
    }
    console.log(charChoices)
  }
  
  console.log(lowerChoice)
  console.log(upperChoice)
  console.log(numberChoice)
  console.log(specialChoice)
  console.log(chosenList);

  // For loop iterates through the length of desired password, adding a random character to myPassword each time
  for (var i = 0; i < myPasswordLength; i++) {
    myPassword += chosenList[Math.floor(Math.random() * (chosenList.length))];
  }
  console.log(myPassword)
  console.log(myPassword.length)

  // Returns completed password
  return myPassword;
}

// Defines a function to ask for password length, ensures that user enters number between 8 and 128
function getpassLength() {
  var passLength = 0;
  while ((passLength < 8) || (passLength > 128)) {
    passLength = window.prompt("Enter length of desired password (8-128 characters): ");
    if ((passLength >= 8) && (passLength <= 128)) {
      return passLength;
    } else {
      passLength = 0
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
