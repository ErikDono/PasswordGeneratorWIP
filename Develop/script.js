




// Assignment Code
var generateBtn = document.querySelector("#generate");

var

var randomItem = {
  numbers =["0,1,2,3,4,5,6,7,8,9"];
  uppercaseLetters =["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
  lowercaseLetters =["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
  symbols =[" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
}


// Write password to the #password input
function writePassword() {

  alert("Lets make a password!")
  var passLength = prompt("How many characters ? (8-128)")


  var upperChoice = confirm("Would you like to use Upper Case Letters?")
  if (upperChoice === true)

    var lowerChoice = confirm("would you like to use ")
  if (lowerChoice === true)

    var numChoice = confirm("Would you like to use numbers?")
  if (numChoice === true)

    var specChoice = confirm("Would you like to use special characters?")
  if (specChoice === true)

}

function generatePassword() {


}

var password = generatePassword()
var passwordText = document.querySelector("#password");
passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


