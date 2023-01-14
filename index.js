const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];




let generateBtn = document.getElementById("generate-btn")
let passField1 = document.getElementById("pass-field-1")
let passField2 = document.getElementById("pass-field-2")
let settingSymbols = document.getElementById("setting-symbols")
let settingNumbers = document.getElementById("setting-numbers")
let settingLength = document.getElementById("setting-length")

generateBtn.addEventListener("click", populatePasswordField)

function populatePasswordField() {
    passField1.textContent = generateDynamicPassword()
    passField2.textContent = generateDynamicPassword()
    
}


function generateDynamicPassword() {
    let password = ""
    let localArray = alphabets
    if (settingNumbers.checked) {
        localArray = localArray.concat(numbers)
    }
    if (settingSymbols.checked) {
        localArray = localArray.concat(symbols)
    }
    for (let i = 0; i < settingLength.value; i++) {
        let randomNum = Math.floor( Math.random() * localArray.length)
        password += localArray[randomNum]
    }

    return password
}


function generatePassword() {
    let password = ""
    for (let i = 0; i < 16; i++) {
        let randomNum = Math.floor( Math.random() * characters.length)
        password += characters[randomNum]
    }

    return password
}