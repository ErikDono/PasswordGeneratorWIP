




// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0,1,2,3,4,5,6,7,8,9"]
var uppercaseLetterw = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]
var lowercaseLetters = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["]


// Write password to the #password input
function writePassword() {
  alert("Lets make a password!")
  var passLength = prompt("How many characters ? (8-128)")
  var charCase = prompt("Would you like to use upper case, or lower case letters, or both?")
  var numChoice = prompt("Would you like to use numbers?")
  var specChoice = prompt("Would you like to use special characters?")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


