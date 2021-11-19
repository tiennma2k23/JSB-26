//var dong_ho=document.getElementsByClassName("dong_ho");
var time=document.getElementsByClassName("timer");

var lap_list=document.createElement('div');

document.body.appendChild(lap_list);

var _hours=0,_min=0,_sec=0;
var start=document.querySelector('.start');
start.addEventListener('click', Start);
var cnt=0;
function bamgio() {
    var gio = document.getElementById("hours");
    var phut = document.getElementById("minutes");
    var giay = document.getElementById("seconds");
    _sec++;
    if (_sec==60) 
    {
        _sec=0;
        _min++;
        if (_min==60)
        {
            _min=0;
            _hours++;
        }
    }
    var sec=String(_sec);
    var minute=String(_min);
    var hour=String(_hours);
    if (sec.length<2) sec='0'+sec;
    if (minute.length<2) minute='0'+minute;
    if (hour.length<2) hour='0'+hour;
    gio.innerHTML = hour;
    phut.innerHTML = minute;
    giay.innerHTML = sec;
}

function Start() {
    cnt++;
    if (cnt%2)
    {
        start.textContent = 'Stop';
        interval = setInterval(bamgio, 1000);
    }
    else 
    {
        start.textContent = 'Start';
        clearInterval(interval);
        interval = null;
    }
}

var reset=document.querySelector('.reset');
reset.addEventListener('click', Reset);
function Reset()
{
    cnt=0;
    clearInterval(interval);
    start.textContent = 'Start';
    interval = null;
    _hours=0,_min=0,_sec=0;
    var gio = document.getElementById("hours");
    var phut = document.getElementById("minutes");
    var giay = document.getElementById("seconds");
    var sec=String(_sec);
    var minute=String(_min);
    var hour=String(_hours);
    if (sec.length<2) sec='0'+sec;
    if (minute.length<2) minute='0'+minute;
    if (hour.length<2) hour='0'+hour;
    gio.innerHTML = hour;
    phut.innerHTML = minute;
    giay.innerHTML = sec;
    lap_list.remove();
    lap_list=document.createElement('div');
    document.body.appendChild(lap_list);
}

var lap=document.querySelector('.lap');
lap.addEventListener('click', Lap);
function Lap()
{
    let div_lap=document.createElement("li");
    var sec=String(_sec);
    var minute=String(_min);
    var hour=String(_hours);
    if (sec.length<2) sec='0'+sec;
    if (minute.length<2) minute='0'+minute;
    if (hour.length<2) hour='0'+hour;
    div_lap.innerHTML=hour+":"+minute+":"+sec;
    lap_list.appendChild(div_lap);
}

