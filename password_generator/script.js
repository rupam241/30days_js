const passwordBox = document.getElementById('password');
const generateButton = document.getElementById('btn');
const copyButton = document.getElementById('copyText');
let length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "!@#$%^&*()_+-={}[]:;\"'<>?/\\|~";
const allChars = uppercase + lowercase + number + symbol;

const passwordGenerator = () => {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
};

const generateButton1 = () => {
    generateButton.addEventListener("click", passwordGenerator);
};

const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => console.log('Text copied to clipboard'))
        .catch(err => console.error('Could not copy text: ', err));
        alert("text copied")
};

const copyTextTo = () => {
    copyButton.addEventListener('click', copyPasswordToClipboard);
};

generateButton1(); // Initialize the button listener
passwordGenerator(); // Generate a password initially
copyTextTo(); // Initialize the copy button listener
