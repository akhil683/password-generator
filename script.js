const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-One");
let passwordTwo = document.getElementById("password-Two");
let passwordLength = 15;

        // password second

function getRandomCharacter1() {

    let randomCharacter1 = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter1]

}

function password1() {

    let randomPassword1 = "";
    
    for ( let i = 1; i < passwordLength; i++ ) {

        randomPassword1 += getRandomCharacter1();
    }
    passwordOne.textContent = randomPassword1;
}
        // password second 

function getRandomCharacter2() {

    let randomCharacter2 = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter2]

}

function password2() {

    let randomPassword2 = "";
    
    for ( let j = 1; j < passwordLength; j++ ) {

        randomPassword2 += getRandomCharacter2();
    }
    passwordTwo.textContent = randomPassword2;
}


function password() {
    password2();
    password1();
    
}