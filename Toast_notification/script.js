let toastBox=document.getElementById('toastBox');
let sm=  '<i class="fa-solid fa-circle-check"></i> SuccessFully Submitted';
let im='<i class="fa-solid fa-circle-exclamation"></i>  Invalid input,check again';
let em='<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';


function showNotification(msg) {
    const toastBox = document.getElementById('toastBox');
    let toast = document.createElement('div');
    toast.classList.add('toast',);
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if(msg.includes(' SuccessFully ')){
        toast.classList.add('success')
    }
    if(msg.includes(' Invalid ')){
        toast.classList.add('invalid')
    }
    if(msg.includes(' fix ')){
        toast.classList.add('error');
    }
    setTimeout(()=>{
        toast.remove()
    },5000)

     // Remove toast after 3 seconds
}
