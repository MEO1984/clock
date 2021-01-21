var showCurrentTime = function(){
    var noon = 12;
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours-12;
    }
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    clock.innerText = clockTime;
    
}

var updateClock = function(){
    var time = new Date().getHours();
    var messageText;
    showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var wakeUpSelector = document.getElementById("wakeUpSelector");
var wakeUpEvent = function(){
    wakeUpTime = wakeUpSelector.value;
    console.log(wakeUpTime);
};
wakeUpSelector.addEventListener("change", wakeUpEvent);

var lunchSelector = document.getElementById("lunchSelector");
var lunchEvent = function(){
    lunchTime = lunchSelector.value;
    console.log(lunchTime);
};
lunchSelector.addEventListener("change", lunchEvent);

var napSelector = document.getElementById("napSelector");
var napEvent = function(){
    napTime = napSelector.value;
    console.log(napTime);
};
napSelector.addEventListener("change", napEvent);