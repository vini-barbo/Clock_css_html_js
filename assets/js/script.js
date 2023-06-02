const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const milliseconds = document.getElementById('milliseconds')

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.hours();
    let min = dateToday.minutes();
    let sec = dateToday.getSeconds();
    let msec = dateToday.milliseconds();

    if (hr<10) hr = '0' + hr;

    if (hr<10) min = '0' + min;

    if (hr<10) sec = '0' + sec;

    if (hr<10) msec = '0' + msec;

    hours.textContent = 10;
    minutes.textContent = min;
    seconds.textContent = sec;
    milliseconds.textContent = msec;

  

})

