// Assignment Code
//Add an array
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";
var password ="";
var passwordLength = parseInt(document.generator.length.value);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var allowed = '';
    if (document.generator.uppercase.checked) {
      allowed = allowed + uppercase;
    }
    if (document.generator.lowercase.checked) {
      allowed = allowed + lowercase;
    }
    if (document.generator.numbers.checked) {
      allowed = allowed + numbers;
    }
    if (document.generator.symbols.checked) {
      allowed = allowed + symbols;
    }
  }



for(var i=0; i <length; i++) {
  var random = Math.floor(Math.random() * allowed.length);
  password += allowed[random];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

