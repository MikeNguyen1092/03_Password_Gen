// Assignment Code, querySelector is used to select id=`generate` in HTML and assign it to generateBtn
let generateBtn = document.querySelector(`#generate`);

// Global variables
// Special characters
let specialCharacters = [
  `@`,
  `%`,
  `+`,
  `\\`,
  `/`,
  `'`,
  `!`,
  `#`,
  `$`,
  `^`,
  `?`,
  `:`,
  `,`,
  `)`,
  `(`,
  `}`,
  `{`,
  `]`,
  `[`,
  `~`,
  `-`,
  `_`,
  `.`,
];

// Numeric characters
let numericCharacters = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

// Lowercase characters
let lowerCasedCharacters = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `g`,
  `h`,
  `i`,
  `j`,
  `k`,
  `l`,
  `m`,
  `n`,
  `o`,
  `p`,
  `q`,
  `r`,
  `s`,
  `t`,
  `u`,
  `v`,
  `w`,
  `x`,
  `y`,
  `z`,
];

// Uppercase characters
let upperCasedCharacters = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`,
];

// This Function is used to write password to the #password input on the HTML file.
function writePassword() {
  // Calls and receive generated password from generatePassword function.
  let password = generatePassword();
  // Target id password in HTML using querySelector
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function is called when button is pressed
function generatePassword() {
  let passwordPool = [];
  // Prompt user to enter the password length and change the string to number
  let userInput = parseInt(
    prompt("Please enter password length (between 8 and 128 characters)", "16")
  );

  // Check to see if password length is between 8 to 128 characters. If not, then exit function.
  if (userInput >= 8 && userInput <= 128) {
    // concat special characters to passwordPool passwordPool
    if (confirm("Do you want to include special characters?")) {
      passwordPool = passwordPool.concat(specialCharacters);

      // concat numbers to passwordPool passwordPool
    }
    if (confirm("Do you want to include numbers")) {
      passwordPool = passwordPool.concat(numericCharacters);

      // concat lowercase characters to passwordPool passwordPool
    }
    if (confirm("Do you want to include lowercase letters?")) {
      passwordPool = passwordPool.concat(lowerCasedCharacters);
    }
    // concat uppercase characters to passwordPool passwordPool
    if (confirm("Do you want to include uppercase letters?")) {
      passwordPool = passwordPool.concat(upperCasedCharacters);
    }
    // check if user selected at least 1 character type
    if (passwordPool.length === 0) {
      alert("Please select at least 1 character type.");
      return generatePassword();
    }
    // prompt user to restart or cancel if they input an invalid response
  } else if (
    confirm(
      "Please enter a number between 8 and 128. Hit OK to restart or Cancel to quit"
    )
  ) {
    return generatePassword();
  }
  /*    
        This function is used to shuffle the passwordPool array. 
        Source: Fisher-Yates algorithm https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#:~:text=The%20first%20and%20simplest%20way
        Added this function because I noticed that it wasn't really selection special characters every often.
        */
  function shufflePasswordPool() {
    // for loop, i = 0, ends loop when i > passwordPool.length, add 1 to i each loop
    for (let i = 0; i < passwordPool.length; i++) {
      // j = random index number 0 <= j < passwordPool.length
      const j = Math.floor(Math.random() * passwordPool.length);

      // this swap the position of passwordPool[i] and passwordPool[j]
      const temp = passwordPool[i];
      passwordPool[i] = passwordPool[j];
      passwordPool[j] = temp;
    }
    return passwordPool;
  }
  // calls shufflePasswordPool function
  let shuffledPool = shufflePasswordPool(passwordPool);

  // generate the password. getting a random index number and putting that value into an empty string
  let passwordString = "";
  for (let i = 0; i < userInput; i++) {
    let randomPassword = Math.floor(Math.random() * shuffledPool.length);
    passwordString += shuffledPool[randomPassword];
  }
  // returns the generated password to the writePassword function
  return passwordString;
}

// Add event listener to generate button. generateBtn is linked to the HTML id. Once it is clicked, it will call the function writePassword
generateBtn.addEventListener(`click`, writePassword);
