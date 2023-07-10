const passwordLength = document.getElementById('passwordLength');
const password = document.getElementById('password');
let saveButton = document.getElementById('saveButton')

function generatePassword(length){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbol = "!@#$%^&*_{}[]|+=-.,/?~`:;<>";
    const numeric = "123456789";

    const data = lowerAlphabet + upperAlphabet + symbol + numeric;
    let generator = '';
    for(let index = 0; index < length; index++){
        generator += data[~~(Math.random() * data.length)];
        
    }
    return generator;
}
function getPassword(){
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
}

function savePassword(){
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(password.value))
    saveButton.setAttribute('download', 'MyPasswordLOG.txt');
}