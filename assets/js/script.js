// Assignment code here

// List of variable possibilities for password characters
var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseSet = "ABCDEFGHIJKLMNIPQRATUVWXYZ";
var numberSet = "0123456789";
var symbolSet = "!@#$%^&*(){}[]=<>/,.";

function generatePassword() {
// Password length pop up prompt
var passwordLength = Number(prompt("Choose a password length between 8 to 128"));
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("Choose a password length between 8 to 128"));
  }  

// Character type selection prompt    
var uppercase = confirm("Include uppercase?");
var lowercase = confirm("Include lowercase?");
var number = confirm("Include numbers?");
var specialCharacters = confirm("Include special characters?");
  while (!uppercase && !lowercase && !number && !specialCharacters) {
    alert ("Please select one character type.");
    var uppercase = confirm("Include uppercase?");
    var lowercase = confirm("Include lowercase?");
    var number = confirm("Include numbers?");
    var specialCharacters = confirm("Include special characters?");
  };

// Holds global variables for password string
var passwordString = "";

if (uppercase) {
  passwordString = passwordString.concat(uppercaseSet);
}
if (lowercase) {
  passwordString = passwordString.concat(lowercaseSet);
}
if (number) {
  passwordString = passwordString.concat(numberSet);
}
if (specialCharacters) {
  passwordString = passwordString.concat(symbolSet);
}

// Generates the password using the selected, available variables and chosen length within specified limits
var passwordRandom = "";
for (var i = 0; i < passwordLength; i++) {
      passwordRandom += passwordString.charAt(Math.floor(Math.random()* passwordString.length));
  }
  return passwordRandom;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);