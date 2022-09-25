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
  var lowcasEl = confirm("Do you want lower case letters?");
  var uppcasEl = confirm("Do you want upper case letters?");
  var numbersEl = confirm("Do you want numbers?");
  var symbolsEl = confirm("Do you want symbols?");
  var length = prompt("How many characters do you want (8 minumum)?");
console.log(length)

if (length <8) {
  alert("You must have a minumum of 8 characters!")
  writePassword()
}

  
  //var password = generatePassword();
  
var userSelected = []
console.log(userSelected)

  

  if (lowcasEl) {
    userSelected.push(alpha);
   } else {
       return;

  };


  if (uppcasEl) {
    userSelected.push(caps);
   } else {
       return;

  };


  if (numbersEl) {
    userSelected.push(numeric);
   } else {
       return;

  }

  if (symbolsEl) {
    userSelected.push(special);
   } else {
       return;

  }


  if (!uppcasEl && !lowcasEl && !numbersEl && !symbolsEl) {
    alert("you must pick at least one")
    writePassword()
  }

    options = userSelected.join("")

  console.log(options)
  //""

  var password = "";
  //var passwordArray = Array(length);
  
  for (i = 0; i <= length -1; i++) {
      var randomChar = options[Math.floor(Math.random() * options.length)];
      //var randomChar = currentOption.generatePassword(Math.floor(Math.random() * currentOption.length));
      password = password.concat(randomChar);
      //passwordArray.push(randomChar);
      
  }

  console.log(password)
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  //generatePassword()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  // var alpha = "abcdefghijklmnopqrstuvwxyz";
  // var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var numeric = "0123456789";
  // var special = "!$^&*-=+_?";

  // var options = alpha + caps + numeric + special;
//console.log(options)

}

