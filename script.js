// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var passwordLength = parseInt(
    prompt("How many characters do you want your password?"));
  var upperCase = confirm("Do you want to use uppercase letters?");
  var lowerCase = confirm("Do you want to use lowercase letters?");
  var numeric = confirm("Do you want to use any numerics?");
  var specialCharacters = confirm("Do you want to use special characters?"); 

  if (passwordLength >= 8 && passwordLength <= 128) {
    if (upperCase || lowerCase || numeric || specialCharacters) {   
    } else {
      alert("Please choose at least one option");
      return writePassword();
    } 
  } else {
    alert("Please choose a password between 8 and 128!");
    return writePassword();

  }
  for (var i = 0; i < passwordLength; i ++);
};





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
