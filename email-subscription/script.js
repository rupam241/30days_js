let inputText=document.getElementById('inputText');
let btn=document.getElementById('btn');
let afterSubmit=document.querySelector('.afterSubmit');



const scriptURL = 'https://script.google.com/macros/s/AKfycbxzRW5XodFPQKcaAwUoJcTMs2mJG21_6ovCTPVb5k5uygcBqk7z68trftX7Pg6HSyZRXA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    
    afterSubmit.innerHTML="Thank you for subscribing";
    afterSubmit.style.color="green";
    afterSubmit.style.visibility="visible";
    setTimeout(function(){
        afterSubmit.innerHTML=" ";
    },5000)
    form.reset();

})







const validEmail=()=>{
    
    let email=inputText.value;
    
    if(email.length==0){
        afterSubmit.innerHTML='Email is required';
        afterSubmit.style.color="red";
        afterSubmit.style.visibility="visible"


        return false;

    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){

        afterSubmit.innerHTML="Please check the email"
        afterSubmit.style.color="red";
        afterSubmit.style.visibility="visible"
        return false;

    }
    afterSubmit.style.color="green";
    afterSubmit.style.visibility="visible";
    afterSubmit.innerHTML = "valid Email";
    return true;

}



inputText.addEventListener('keyup',validEmail);

