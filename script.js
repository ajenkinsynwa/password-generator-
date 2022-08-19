//Assignemt code 
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatedpassword() { 

var userInput = window.prompt("How Long Do You Want Your Password to Be?")

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
window.alert("This is not a number!")
return 
}

if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return 
}

var wantsNumbers = confirm("Would you like to include numbers in your password?")
var wantsLowerLetters = confirm("Do desire lowercases in your password?");
var wantsUpperLetters = confirm("Do you desire uppercases in your password?");
var wantsSymbols = confirm("Do you desire special characters in your password?");

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 

var symbolsList =  ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
"-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 

var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var usersBox = []

for (var i = 0; i < lowerCaseList.length; i++) {
  upperCaseList[i] = lowerCaseList[i].toUpperCase()
}

if (wantsNumbers === true) {
  usersBox.push(numberList)
}

if (wantsSymbols === true) {
  usersBox.push(symbolsList)
}

if (wantsUpperLetters === true) {
  usersBox.push(upperCaseList)
}

if (wantsLowerLetters === true) {
  usersBox.push(lowerCaseList)
}

if (usersBox.length === 0) {
usersBox.push(lowerCaseList)
}

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
var randomlist = getRandomItem(usersBox)
var randomchar = getRandomItem(randomlist)
generatedPassword += randomchar 
}

return generatedPassword 
}

//Write password to the #password input 
function writePassword() {
  var password = generatedpassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  return '';
}









//add button
generateBtn.addEventListener("click", writePassword);



