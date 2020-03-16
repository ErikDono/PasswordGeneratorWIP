




// Assignment Code
var generateBtn = document.querySelector("#generate");

var

var randomItem = {
  numbers =["0,1,2,3,4,5,6,7,8,9"];
  uppercaseLetters =["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
  lowercaseLetters =["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
  symbols =[" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
}

var newPass = ("")


// Write password to the #password input
function writePassword() {

  alert("Lets make a password!")
  var passLength = prompt("How many characters ? (8-128)")
  //im thinking passlength= passlenght.value, but i need to turn it from a string to an object... i think? so that i can use it to feed the info to my new password. 
  // if input is < 8, then there should be an alert. 
  // if the input is > 128, there should be an alert
  //Else!! the input needs to feed to the newpass


  var upperChoice = confirm("Would you like to use Upper Case Letters?")
  if (upperChoice === true) { }
  //if this is true, i want upper case in my password

  var lowerChoice = confirm("would you like to use ")
  if (lowerChoice === true) { }
  // if this is true, i want lower case in my new password

  var numChoice = confirm("Would you like to use numbers?")
  if (numChoice === true) { }
  //if this is true, i want numbers to be used in my new password

  var specChoice = confirm("Would you like to use special characters?")
  if (specChoice === true) { }
  // if this is true, i want special characters to be used for my new password

}

function generatePassword() {


}

var password = generatePassword()
var passwordText = document.querySelector("#password");
passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


