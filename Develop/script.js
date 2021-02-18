// Variables
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";
var password ="";


// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//functions for the different variable that can be in the password
//length parameters
function generatePassword() {
  password = "";
  var allowed = '';
  var passwordLength = parseInt(document.generator.pwlength.value);
      if (passwordLength >= 8 && passwordLength <= 128) {
      if (!document.generator.uppercase.checked && !document.generator.lowercase.checked && !document.generator.numbers.checked && !document.generator.symbols.checked) {
        alert("Please enter a value between 8 and 128 and check the boxes of the applicable characters!")
      } else{
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
      }}
    } else{
      alert("Please enter a value between 8 and 128 and check the boxes of the applicable characters!")
    }
  }


// Event Listener Function
generateBtn.addEventListener("click", writePassword);

