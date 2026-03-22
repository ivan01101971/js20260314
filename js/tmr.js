const tNum=document.querySelector(".tNum");
let totalSeconds=5;
let running=false;
let tD;
let midT="02 : 00";
let midTs=totalSeconds;

const updateTimer=(seconds)=>{
    let mins=String(Math.floor(seconds/60)).padStart(2,"0");
    let secs=String(seconds%60).padStart(2,"0");
    tNum.textContent=`${mins} : ${secs}`;
    midT=`${mins} : ${secs}`;    
    return `${mins} : ${secs}`;
    cC();
}

const sR=()=>{
    running=true;
    tD=setInterval(()=>{   
        if(totalSeconds>1){
            totalSeconds--;
            midTs=totalSeconds;
            updateTimer(totalSeconds);
        }else{
            console.log(tD);
            updateTimer(0);
            clearInterval(tD);
            
            pSound();
        }
    },1000)
}

const cC=()=>{
    if(totalSeconds==0){
        tNum.classList.add("tUp");        
    }else{
        tNum.classList.remove("tUp"); 
    }
    

}

const pSound=()=>{
    const pS=new Audio("tone/Alarm01.wav");
    pS.play();
}

// setInterval(()=>{   
//     updateTimer(totalSeconds--);
//     // console.log(totalSeconds--);
// },1000)

document.addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){
        if(!running && totalSeconds>0){
            totalSeconds=midTs;
            tNum.textContent=midT;
            sR();
        }else{
            console.log(midT,midTs); 
            clearInterval(tD);  
            running=false;            
        }
    }    
});
  


