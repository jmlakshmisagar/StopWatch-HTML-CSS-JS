let [hours, minutes, seconds]=[0,0,0];
let timeing=document.getElementById("timeing");

let timmer=null;
function time(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h= hours<10?"0"+hours:hours;
    let m= minutes<10?"0"+minutes:minutes;
    let s= seconds<10?"0"+seconds:seconds;

    timeing.innerHTML=h+":"+m+":"+s; 
}
function start(){
    if(timmer !== null){
        clearInterval(timmer);
    }
    timmer = setInterval(time, 1000);
}
function stop(){
    clearInterval(timmer);
}
function reset(){
    clearInterval(timmer);
    [hours, minutes, seconds] = [0, 0, 0];
    timeing.innerHTML = "00:00:00";
}
