// Assignment Code, querySelector is used to select id="generate" in HTML and assign it to generateBtn
let generateBtn = document.querySelector("#generate");

// Special characters 
let specialCharacters = [`@`,`%`,`+`,`\\`,`/`,`'`,`!`,`#`,`$`,`^`,`?`,`:`,`,`,`)`,`(`,`}`,`{`,`]`,`[`,`~`,`-`,`_`,`.`,];

// Numeric characters 
let numericCharacters = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

// Lowercase characters 
let lowerCasedCharacters = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`,];

// Uppercase characters 
let upperCasedCharacters = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`,];

//Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    const userInput = prompt(`Please enter password length (between 8 and 128 characters).`);
    let number = parseInt(userInput);

    if (number && userInput>7 && userInput<129) {
        console.log(`Great!`)
    }
}

// Add event listener to generate button. generateBtn is linked to the HTML id. Once it is clicked, it will call the function writePassword
generateBtn.addEventListener("click", writePassword);
