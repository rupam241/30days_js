const getTime = document.getElementById('getTime');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let timer=null;
let[seconds,minutes,hours]=[0,0,0];

const stopWatch=()=>{
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h=hours<10?"0" +hours:hours;
let m=minutes<10?"0"+minutes:minutes;
let s=seconds<10?"0"+seconds:seconds;
    getTime.innerHTML=h +":"+m+":"+s;
}


const playTime=(e)=>{
    
    if(timer!=null){
        clearInterval(timer);
   
    }
  timer= setInterval(stopWatch,1000);

}
const pauseTime=()=>{
    clearInterval(timer);
}
const resetTime=()=>{
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    getTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}
