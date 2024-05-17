const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');
const form = document.getElementById('myForm');

const validateName = () => {
    let name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Please enter a valid name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'; // Clear the error message if the name is valid
    return true;
}



// Similar functions for phone
const validateNo = () => {
    let phoneNo = document.getElementById('contact-no').value;
   if(phoneNo.length==0){
    phoneError.innerHTML='phone no is required';
    return false;
   }
   if(!phoneNo.match(/^\d{10}$/)){
    phoneError.innerHTML='only  10 digits please';
    return false;
   }
   phoneError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
   return true;
}


// Similar functions for email

const validateEmail=()=>{
    let email=document.getElementById('contact-email').value;
    console.log(email);
    if(email.length==0){
        emailError.innerHTML=" email is required";
        return false;

    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){

        emailError.innerHTML="Please check the email"
        return false;

    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
   
}

const validateMessage=()=>{
    let message=document.getElementById('contact-message').value;
    var required=30;
    var left=required-message.length;
    if(left>0){
        messageError.innerHTML=left+ "more character requires";
        return false;

    }
    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;



}

const validateForm = () => {
    if (!validateNo() || !validateName() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the errors";
        setTimeout(function() {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
    
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    // Prevent the form from submitting

    const formData = {
        name: document.getElementById('contact-name').value,
        phone: document.getElementById('contact-no').value,
        email: document.getElementById('contact-email').value,
        message: document.getElementById('contact-message').value
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    // Optionally, you can reset the form after storing the data
    form.reset();

    // Show a success message or perform other actions
    alert('Form data saved successfully!');

});