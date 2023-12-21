                // Assignment Code, querySelector is used to select id=`generate` in HTML and assign it to generateBtn
let generateBtn = document.querySelector(`#generate`);

                // Global variables 
                // Special characters 
let specialCharacters = [`@`,`%`,`+`,`\\`,`/`,`'`,`!`,`#`,`$`,`^`,`?`,`:`,`,`,`)`,`(`,`}`,`{`,`]`,`[`,`~`,`-`,`_`,`.`];

                // Numeric characters 
let numericCharacters = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

                // Lowercase characters 
let lowerCasedCharacters = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];

                // Uppercase characters 
let upperCasedCharacters = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];

                // Function to write password to the #password input on the HTML
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

                // function is called when button is pressed
function generatePassword() {
    let passwordPool = [];
                // Prompt user to enter the password length and change the string to number
    let userInput = parseInt(prompt("Please enter password length (between 8 and 128 characters)", "16"));

                // Check to see if password length is between 8 to 128 characters. If not, then exit function.
    if (userInput >= 8 && userInput <= 128) {
                // concat special characters to passwordPool passwordPool
         if (confirm("Do you want to include special characters?")) {
                passwordPool = passwordPool.concat(specialCharacters);
         
                // concat numbers to passwordPool passwordPool
        } if (confirm("Do you want to include numbers")) {
                passwordPool = passwordPool.concat(numericCharacters);
         
            // concat lowercase characters to passwordPool passwordPool
        } if (confirm("Do you want to include lowercase letters?")) {
                passwordPool = passwordPool.concat(lowerCasedCharacters);
        } 
            // concat uppercase characters to passwordPool passwordPool
        if (confirm("Do you want to include uppercase letters?")) {
                passwordPool = passwordPool.concat(upperCasedCharacters)
        }
            // check if user selected at least 1 character type
        if (passwordPool.length === 0) {
            alert ("Please select at least 1 character type.");
            return generatePassword();
        }
            // prompt user to restart or cancel if they input an invalid response
    } else if (confirm("Please enter a number between 8 and 128. Hit OK to restart or Cancel to quit")) {
            return generatePassword();
        }
            // This function is used to shuffle the passwordPool array. source: Fisher-Yates algorith https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#:~:text=The%20first%20and%20simplest%20way
        function shufflePasswordPool() {
            for (let i = passwordPool.length - 1; i > 0; i-- ) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = passwordPool[i];
                passwordPool[i] = passwordPool[j]
                passwordPool[j] = temp;
            }
            return passwordPool
        }

    let shuffledPool = shufflePasswordPool(passwordPool);

    let passwordString = "";
    for (let i = 0; i<userInput; i++) {
        let randomPassword = Math.floor(Math.random() * shuffledPool.length);
        passwordString += shuffledPool[randomPassword];
    }
    return passwordString
    
}

// Add event listener to generate button. generateBtn is linked to the HTML id. Once it is clicked, it will call the function writePassword
generateBtn.addEventListener(`click`, writePassword);
