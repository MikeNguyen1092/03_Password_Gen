// Assignment Code, querySelector is used to select id=`generate` in HTML and assign it to generateBtn
let generateBtn = document.querySelector(`#generate`);

// Special characters 
let specialCharacters = [`@`,`%`,`+`,`\\`,`/`,`'`,`!`,`#`,`$`,`^`,`?`,`:`,`,`,`)`,`(`,`}`,`{`,`]`,`[`,`~`,`-`,`_`,`.`];

// Numeric characters 
let numericCharacters = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

// Lowercase characters 
let lowerCasedCharacters = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];

// Uppercase characters 
let upperCasedCharacters = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];

//Write password to the #password input on the HTML
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// function is called when button is pressed
function generatePassword() {
    let passwordPool = [];
        // Prompt user to enter the password length and change the string to number
    let userInput = parseInt(prompt("Please enter password length (between 8 and 128 characters)", "8"));


        // Check to see if password length is between 8 to 128 characters. If not, then exit function.
    if (userInput >= 8 && userInput <= 128) {
                // concat special characters to passwordPool array
         if (confirm("Do you want to include special characters?")) {
                passwordPool = passwordPool.concat(specialCharacters);
        } 
                // concat numbers to passwordPool array
        if (confirm("Do you want to include numbers")) {
                passwordPool = passwordPool.concat(numericCharacters);
        } 
            // concat lowercase characters to passwordPool array
        if (confirm("Do you want to include lowercase letters?")) {
                passwordPool = passwordPool.concat(lowerCasedCharacters);
        } 
            // concat uppercase characters to passwordPool array
        if (confirm("Do you want to include uppercase letters?")) {
                passwordPool = passwordPool.concat(upperCasedCharacters)
        }
        
        if (passwordPool.length === 0) {
            alert ("Please select at least 1 type of characters");
            return generatePassword();
        }

    } else {
            alert("Please enter a number between 8 and 128");
            return
        }

    let passwordString = "";
    for (let i = 0; i<userInput; i++) {
        let randomPassword = Math.floor(Math.random() * passwordPool.length);
        passwordString = passwordString + passwordPool[randomPassword];
    }
    return passwordString
    
}

// Add event listener to generate button. generateBtn is linked to the HTML id. Once it is clicked, it will call the function writePassword
generateBtn.addEventListener(`click`, writePassword);
