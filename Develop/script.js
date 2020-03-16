




// Assignment Code
var generateBtn = document.querySelector("#generate");


var randomItem = {
  numbers: "0123456789",
  upLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowLetters: "abcdefghijklmnopqrstuvwxyz",
  symbols: "!#$%&'()*+,-./:;<=>?@[^_`{|}~"
}

var userChara = ""
var passLength = 0

// Write password to the #password input
function writePassword() {

  passLength = parseInt(prompt("How many characters ? (8-128)"))
  //im thinking passlength= passlenght.value, but i need to turn it from a string to an object... i think? so that i can use it to feed the info to my new password. 
  if (passLength < 8 || passLength > 128) {
    alert("Between 8 and 128 please")
    return
  }
  //passLength s going to feed the newpass through affecting the iterator when i am pulling throught the values and adding randomness to the chocies! 


  var upperChoice = confirm("Would you like to use upper case Letters?")

  //if this is confirmed, i want to merge! upper case in my password

  var lowerChoice = confirm("would you like to use lower case letters?")
  // if this is confirmed, i want to merge! lower case in my new password

  var numChoice = confirm("Would you like to use numbers?")

  //if this is confirmed, i want to merge! numbers to be used in my new password

  var specChoice = confirm("Would you like to use special characters?")

  // if this is confirmed, i want to merge! special characters to be used for my new password
  if (upperChoice === false && lowerChoice === false && numChoice === false && specChoice === false) {
    alert("Please select at least one, try again.")
    return
  }
  // im going to need the following merge statments for each possible answer: 
  // all yes, 3 yes, 2 yes, 1 yes. 
  // if no yes, then what?

  if (lowerChoice === true && upperChoice === true && specChoice === true && numChoice === true) {
    userChara += randomItem.lowLetters, randomItem.upLetters, randomItem.symbols, randomItem.numbers
  }
  if (lowerChoice === true && upperChoice === true && specChoice === true) {
    userChara += randomItem.lowLetters, randomItem.upLetters, randomItem.symbols
  }
  if (lowerChoice === true && upperChoice === true && numChoice === true) {
    userChara += randomItem.lowLetters, randomItem.upLetters, randomItem.numbers
  }
  if (lowerChoice === true && specChoice === true && numChoice === true) {
    userChara += randomItem.lowLetters, randomItem.symbols, randomItem.numbers
  }
  if (upperChoice === true && specChoice === true && numChoice === true) {
    userChara += randomItem.upLetters, randomItem.symbols, randomItem.numbers
  }
  if (lowerChoice === true && upperChoice === true) {
    userChara += randomItem.lowLetters, randomItem.upLetters
  }
  if (lowerChoice === true && specChoice === true) {
    userChara += randomItem.lowLetters, randomItem.symbols
  }
  if (lowerChoice === true && numChoice === true) {
    userChara += randomItem.lowLetters, randomItem.numbers
  }
  if (upperChoice === true && specChoice === true) {
    userChara += randomItem.upLetters, randomItem.symbols
  }
  if (upperChoice === true && numChoice === true) {
    userChara += randomItem.upLetters, randomItem.numbers
  }
  if (numChoice === true && specChoice === true) {
    userChara += randomItem.numbers, randomItem.symbols
  }

  // this ^^^ logic does not seem to be working, but i cannot spend more time on this, sadly. 

  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

function generatePassword() {
  var newPass = ""
  // this relates to generate passoword below, so the output of this function will be var password. Maybe this is where my random-ator goes? 
  for (let i = 0; i < passLength; i++) {
    newPass += userChara[Math.floor(Math.random() * passLength)]
  }
  return newPass
}








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


