
const passwordResult1 = document.querySelector("#password1")
const passwordResult2 = document.querySelector("#password2")
const passwordResult3 = document.querySelector("#password3")
const passwordResult4 = document.querySelector("#password4")
const passwordBox = document.querySelectorAll(".pwd")
const generatePassword = document.getElementById("generate-btn")
const reloadBtn = document.getElementById("reload")
const userInput = document.getElementById("user-input").value



// reload page
reloadBtn.addEventListener("click",() => location.reload())

// create random password from list of string 
function randomPassword() {
    let chars = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@-=#$%&*()[]\/{}|<>~`^"
    let passwordLength = userInput
    let passwords = ""
    
    for (let i = 0 ; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * chars.length);
        passwords += chars.substring(randomPassword, randomPassword + 1);
    }   
    return passwords
}

//display random password into provided button area
function getRandomPassword() {
    passwordResult1.textContent = randomPassword()
    passwordResult2.textContent = randomPassword()
    passwordResult3.textContent = randomPassword()
    passwordResult4.textContent = randomPassword()

}

// copy password to clipboard
function copyPasswordResult1() {    
    navigator.clipboard.writeText(passwordResult1.innerText).then(() => alert('Copied'));
    //how to copy selected field using only one function??  i have no clue, yet. 
}

function copyPasswordResult2() {    
    navigator.clipboard.writeText(passwordResult2.innerText).then(() => alert('Copied'));
}

function copyPasswordResult3() {    
    navigator.clipboard.writeText(passwordResult3.innerText).then(() => alert('Copied'));
}

function copyPasswordResult4() {    
    navigator.clipboard.writeText(passwordResult4.innerText).then(() => alert('Copied'));
}