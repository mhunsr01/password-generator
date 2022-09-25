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

//these are the uneversal variables for the passwords
var alpha = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";

// this is for the button to start the process
var generateBtn = document.querySelector("#generate");

// this is the function to roll thruough the prompts to include various choices, set length, and create the password
function writePassword() {
  var lowcasEl = confirm("Do you want lower case letters?");
  var uppcasEl = confirm("Do you want upper case letters?");
  var numbersEl = confirm("Do you want numbers?");
  var symbolsEl = confirm("Do you want symbols?");
  var length = prompt("How many characters do you want (8 minumum)?");
console.log(length)

//series of if else to ensure the correct choices are made for the passward parameters
if (length <8) {
  alert("You must have a minumum of 8 characters!")
  writePassword()
}

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

  //check to ensure choices are made
  if (!uppcasEl && !lowcasEl && !numbersEl && !symbolsEl) {
    alert("you must pick at least one")
    writePassword()
  }

    options = userSelected.join("")

  console.log(options)
 
  var password = "";
  //creates random password and sets length
  for (i = 0; i <= length -1; i++) {
      var randomChar = options[Math.floor(Math.random() * options.length)];
       password = password.concat(randomChar);
  }

  console.log(password)
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
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

