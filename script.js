// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var getLettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var getLettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var getRandomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var getRandomSymbols = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(','}','{',']','[','~','-','_','.'];

function randomFunctions(array) {
  
var randomIndex = Math.floor(Math.random() * array.length);
var randomPass = array[randomIndex];
console.log(randomPass);
return randomPass;
}



// first function to generate what exactly to push through the generator 
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


// was unable to figure out how to get the actual generator to push through an actual random password...