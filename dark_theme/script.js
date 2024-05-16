const moonIcon=document.getElementById('moon')

const changeIcon=()=>{
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains("dark-theme")){
    moonIcon.src="sun.png"

  }
  else{
    moonIcon.src="moon.png";
  }
  
}


moonIcon.addEventListener('click',changeIcon);

