var generateBtn = document.querySelector("#generate");

var randomValue = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

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
var generators = [];
if (lowercaseEl !== null) {
  generators.push("lowercase");
}
if (uppercaseEl !== null) {
  generators.push("uppercase");
}
if (numberEl !== null) {
  generators.push("number");
}
if (symbolEl !== null) {
  generators.push("symbol");
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
  var password = "";
  if (lowercaseEl === "") {
    password += getRandomLower();
  }
  if (uppercaseEl === "") {
    password += getRandomUpper();
  }
  if (numberEl === "") {
    password += getRandomNumber();
  }
  if (symbolEl === "") {
    password += getRandomSymbol();
  }
  for (var i = password.length; i < lengthEl; i++) {
    passwordText.textContent = password[i];
    console.log(passwordText[i]);
  }
}

function getRandomLower() {
  return Math.floor(Math.random() * 26) + 97;
}

function getRandomUpper() {
  return Math.floor(Math.random() * 26) + 65;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 48;
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
