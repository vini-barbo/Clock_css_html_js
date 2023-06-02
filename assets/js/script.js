
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const milliseconds = document.getElementById('milliseconds')

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let msec = dateToday.getMilliseconds();

    msec =   Math.ceil(msec/10)
    
    if (hr<10) hr = '0' + hr;

    if (min<10) min = '0' + min;

    if (sec<10) sec = '0' + sec;

    if (msec<10) msec = '0' + msec;

    if (msec == 100) msec = msec -1

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
    milliseconds.textContent = msec;

  

})

