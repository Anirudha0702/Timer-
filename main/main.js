const minuteBox=document.querySelector("#minute");
const secondBox=document.querySelector("#second");
const startButton=document.querySelector("#start");
const stopButton=document.querySelector("#stop");
const timerProgress=document.querySelector(".timer");
const timeBox=document.querySelectorAll(".time");
let flag=false;



startButton.addEventListener("click",()=>{
    let minute=parseInt(minuteBox.value);
    let second=parseInt(secondBox.value);
    if( minute >=0 && second>=0){
        timeBox.forEach(element => {
            element.style.border="none";
        });
        startButton.disabled=true;
        let progressVar=1;
        second+=minute*60;
        const progressPerSecond=360/second;
        second--;
        let interval=setInterval(() => {
            if(second==0 || flag){
                startButton.disabled=false;
                clearInterval(interval);
            }
            minuteBox.value=Math.floor(second/60);
            secondBox.value=second-parseInt(minuteBox.value)*60;
            timerProgress.style.background=`conic-gradient(white ${progressVar*progressPerSecond}deg,rgb(231, 127, 144) 0deg)`;
            second--;
            progressVar++;
            
        }, 1000);
    }
    else{
        minute<0?minuteBox.style.border="2px solid red":secondBox.style.border="4px solid red";
        window.alert("Time cannot be negative or null value ");
    }
    
})
