let hour = 0;
let min = 0;
let sec = 0;
let msec = 0;
let interval;
let hourHeading = document.getElementById("hour");
let minHeading = document.getElementById("min");
let secHeading = document.getElementById("sec");
let msecHeading = document.getElementById("msec");

function startTimer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML =sec
        msec = 0;
    }
    else if(sec>=60){
        min++;
        minHeading.innerHTML = min
        sec = 0;
    }
    else if(min>=60){
        hour++;
        hourHeading.innerHTML = hour
        min = 0;
    }
}


function start(){
   interval = setInterval(startTimer,10)
}

function pause(){
    clearInterval(interval)
}

function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    hourHeading.innerHTML = hour;
    pause();
}
