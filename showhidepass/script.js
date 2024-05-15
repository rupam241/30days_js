const inputText = document.getElementById('inputText');
const eyeIcon = document.getElementById('eyeIcon');

const hidePass = () => {
    if (inputText.type === 'password') {
        inputText.type = 'text';
        eyeIcon.src="eye-open.png"
    } else {
        inputText.type = 'password';
        eyeIcon.src="eye-close.png"
    }
};

eyeIcon.addEventListener('click', hidePass);
