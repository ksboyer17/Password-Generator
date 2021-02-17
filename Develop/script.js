// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";
var password ="";
var passwordLength = parseInt(document.generator.pwlength.value);

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//functions for the difference variable that can be in the password
function generatePassword() {
  password = "";
  var allowed = '';
    if (document.generator.uppercase.checked) {
      allowed += uppercase;
    }
    if (document.generator.lowercase.checked) {
      allowed += lowercase;
    }
    if (document.generator.numbers.checked) {
      allowed += numbers;
    }
    if (document.generator.symbols.checked) {
      allowed += symbols;
    }
    console.log(allowed.length)
    //randomizing math function
    for(var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * allowed.length);
      console.log(random)
     password += allowed[random];
    }
    
  
  }




// Event Listener Function
generateBtn.addEventListener("click", writePassword);

