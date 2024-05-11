const apiUrl="https://api.quotable.io/random";

const quote=document.getElementById('quote');
const author=document.getElementById('author');



const getQuote=async(url)=>{
   const response=await fetch(url) ;
   var data=await response.json();
   console.log(data)
   quote.innerHTML=data.content;
   author.innerHTML=data.author;
}
getQuote(apiUrl);
const tweet=()=>{
    window.open(href="https://twitter.com/intent/tweet?text=" +quote.innerHTML,"Tweet Window","width=600, height=300");
}