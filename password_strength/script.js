const strengthPass = document.getElementById('strengthPass');
const response = document.getElementById('response');

const getPass = () => {
    const password = strengthPass.value;
    let strength = 0;

    // Check for each criteria
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;

    // Classify the password based on length and strength
    if (password.length < 8) {
        response.innerHTML = "The password is weak";
        response.style.visibility = "visible";
        response.style.color = "red";
        strengthPass.style.borderColor = "red";
    } else if (strength < 2) {
        response.innerHTML = "The password is weak";
        response.style.visibility = "visible";
        response.style.color = "red";
        strengthPass.style.borderColor = "red";
    } else if (strength === 3) {
        response.innerHTML = "The password is medium";
        response.style.visibility = "visible";
        response.style.color = "orange";
        strengthPass.style.borderColor = "orange";
    } else if (strength === 4) {
        response.innerHTML = "The password is strong";
        response.style.visibility = "visible";
        response.style.color = "green";
        strengthPass.style.borderColor = "green";
    }
}

strengthPass.addEventListener('keyup', getPass);
