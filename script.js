/*windows prompt for upper
for lower
for sym
for numb

wind prmpt with information input
for length  bet 8-128  min 8

get respon

send to 
build passwd

var for each

 rtn to user

*/
var alpha = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lowcasEl = prompt("Do you want lower case letters?");
  var uppcasEl = prompt("Do you want upper case letters?");
  var numbersEl = prompt("Do you want numbers?");
  var symbolsEl = prompt("Do you want symbols?");
  var numchars = prompt("How many characters do you want (8 minumum)?");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

var userSelected = []
console.log(userSelected)

  /*if (lowcasEl == true) {
     userSelected.push(alpha);
   } else {
       return;
  }*/


/*if (lowcasEl == "true") {
  for ( var i = 0; i < length -1; i++ )
    result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
  userSelected.push(alpha);
   } else {
       return;
  }
  }
*/

  if (uppcasEl) {
    userSelected.push(alpha);
   } else {
       return;

  };


  if (numbersEl) {
    userSelected.push(alpha);
   } else {
       return;

  };


  if (symbolsEl) {
    userSelected.push(alpha);
   } else {
       return;

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(length) {
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!$^&*-=+_?";

  var options = alpha + caps + numeric + special;
console.log(options)
  var password = "";
  var passwordArray = Array(length);

  for (i = 0; i <= length - 1; i++) {
      var currentOption = options[Math.floor(Math.random() * options.length)];
      var randomChar = currentOption.generatePassword(Math.floor(Math.random() * currentOption.length));
      password = randomChar;
      passwordArray.push(randomChar);
      
  }
}

