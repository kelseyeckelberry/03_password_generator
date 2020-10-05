var generateBtn = document.querySelector("#generate");

var lengthEl = prompt("Enter a password length between 8 and 128.");
if (lengthEl < 8 || lengthEl > 128) {
  alert("Number must be between 8 and 128.");
  lengthEl = prompt("Enter a password length between 8 and 128.");
}
var lowercaseEl = prompt("Would you like to include Lowercase letters?");
var uppercaseEl = prompt("Would you like to include Uppercase letters?");
var numberEl = prompt("Would you like to include Numbers?");
var symbolEl = prompt("Would you like to include Symbols?");
if (
  lowercaseEl === null &&
  uppercaseEl === null &&
  numberEl === null &&
  symbolEl === null
) {
  lowercaseEl = prompt("Would you like to include Lowercase letters?");
  uppercaseEl = prompt("Would you like to include Uppercase letters?");
  numberEl = prompt("Would you like to include Numbers?");
  symbolEl = prompt("Would you like to include Symbols?");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  for (var i = passwordText; i < lengthEl; i++) {
    var passwordText = document.querySelector("#password");
    passwordText += yourPassword[i];
  }
  var yourPassword = "";
  while (lowercaseEl == "") {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  while (uppercaseEl == "") {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  while (numberEl == "") {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  while (symbolEl == "") {
    var symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
};
