const inputText = document.getElementById('text');
const buttons = document.querySelectorAll('.button'); // Changed variable name to buttons
let string = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            inputText.value = string;
        } 
        else if (e.target.innerHTML === "Ac") {
            string = "";
            inputText.value = string; // Update input text value
        }
        else if (e.target.innerHTML === "De") {
            string = string.slice(0, -1); // Remove the last character
            inputText.value = string; // Update input text value
        }
        else {
            string = string + e.target.innerHTML;
            inputText.value = string;
        }
    });
});
