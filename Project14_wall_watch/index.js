

setInterval(() => {
    let hours = document.getElementById('hours');
let mint = document.getElementById("minutes");
let sec = document.getElementById("seconds");

    let d = new Date();
    htime =d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    
    hrotation = 30*htime+mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hours.style.transform = `rotate(${hrotation}deg)`;
    mint.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;

}, 1000);