var wakeUpTime = 7;
var lunchTime = 12;
var napTime = 2;
var evening = 19;
var partytime;


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
    var image = "assets/default.jpg";
    var timeEventJS = document.getElementById("timeEvent");
    var imageJS = document.getElementById("photo");

    if (time == partytime)
    {
        image = "assets/party.jpg";
        messageText = "Lets Party!"
    }
    else if (time == wakeUpTime)
    {
        image = ("assets/morning.jpg");
        messageText = "Time to Wake Up!";
    }
    else if (time == lunchTime)
    {
        image = "assets/lunch.jpg";
        messageText = "Lunch Time!";
    }
    else if (time == napTime)
    {
        image = "assets/nap.jpg";
        messageText = "Nap Time!"
    }
    else if ( time < 12)
        {
            image = "assets/sunrise.jpg";
            messageText = "Good Morning!"
        }
    else if (time >= evening)
        {
            image = "assets/sunset.jpg";
            messageText = "Good Evening!"
        }
    else 
    {
        image = "assets/afternoon.jpg";
        messageText = "Good Afternoon!"
    }
    timeEventJS.innerText = messageText;
    console.log(messageText);
    photo.src = image
    showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyButton = document.getElementById("partyButton");
var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyButton.innerText = "Party Over!";
        partyButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 

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
var partyButton = document.getElementById("partyButton");

