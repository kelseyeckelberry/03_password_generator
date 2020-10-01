// Assignment Code
var generateBtn = document.querySelector("#generate");
const randomValue = { 
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
let passwordLength = prompt("Enter a password length between 8 and 128.");
while (passwordLength < 8 || passwordLength > 128) {
  alert("Number must be between 8 and 128.");
  passwordLength = prompt("Enter a password length between 8 and 128.");
}
let lowerCase = prompt("Would you like to include Lowercase letters?");
let upperCase = prompt("Would you like to include Uppercase letters?");
let includeNumber = prompt("Would you like to include Numbers?");
let includeSymbol = prompt("Would you like to include Symbols?");
while (lowerCase === null && upperCase === null && includeNumber === null && includeSymbol === null) {
  lowerCase = prompt("Would you like to include Lowercase letters?");
  upperCase = prompt("Would you like to include Uppercase letters?");
  includeNumber = prompt("Would you like to include Numbers?");
  includeSymbol = prompt("Would you like to include Symbols?");
}
const generators = [];
if(lowerCase !== null ){
  generators.push("lower");
}
if(upperCase !== null ){
  generators.push("upper");
}
if(includeNumber !== null ){
  generators.push("number");
}
if(includeSymbol !== null ){
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
  let password = "";
  if (lowerCase === "") {
    password += getRandomLower();
  }
  if (upperCase === "") {
    password += getRandomUpper();
  }
  if (includeNumber === "") {
    password += getRandomNumber();
  }
  if (includeSymbol === "") {
    password += getRandomSymbol();
  }
for (let i = password.length; i < passwordLength; i++) {
  let genkey = generators [Math.floor(Math.random() * generators.length)]
  password += randomValue[genkey]();
};
}
//function getRandomLower()
//return String.fromCharCode(Math.floor(Math.random() * 26) + ?);
//}

//function getRandomUpper() {
//return String.fromCharCode(Math.floor(Math.random() * 26) + ?);
//}

//function getRandomNumber() {
//return String.fromCharCode(Math.floor(Math.random() * 11) + ?);
//}

//function getRandomSymbol() {
//return String.fromCharCode("!*+,-./:;<=>?@^_`|~");
//}