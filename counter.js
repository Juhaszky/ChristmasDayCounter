const   daysElement     = document.getElementById("days");
const   hoursElement    = document.getElementById("hours");   
const   minutesElement  = document.getElementById("minutes");
const   secondsElement  = document.getElementById("seconds");


const date = new Date();
const thisYear = date.getFullYear();
const thisMonth = date.getMonth();
const thisDay = date.getDay();
const christmas = "24 Dec "+thisYear;



function countDown() {
    const christmasDay = new Date(christmas);
    const currentDate = new Date();
    const totalSeconds = (christmasDay-currentDate) / 1000;

 
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
        
        
        daysElement.innerHTML = days;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;
    
}
countDown();
setInterval(countDown,1000);