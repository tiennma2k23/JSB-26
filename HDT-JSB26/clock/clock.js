let _hour, _min, _sec;
var clicksound = new Audio();
clicksound.src = "beep.mp3";
var submit = document.querySelector(".submit");
submit.addEventListener("click", update_time);
function update_time() {
  let h = document.getElementById("get_hours").value;
  _hour = h;
  let m = document.getElementById("get_min").value;
  _min = m;
  let s = document.getElementById("get_sec").value;
  _sec = s;

  var gio = document.getElementById("hours");
  var phut = document.getElementById("minutes");
  var giay = document.getElementById("seconds");
  var sec = String(_sec);
  var minute = String(_min);
  var hour = String(_hour);
  if (sec.length < 2) sec = "0" + sec;
  if (minute.length < 2) minute = "0" + minute;
  if (hour.length < 2) hour = "0" + hour;
  gio.innerHTML = hour;
  phut.innerHTML = minute;
  giay.innerHTML = sec;
}
let cnt = 0;
var start = document.querySelector(".start");
start.addEventListener("click", Start);
function demnguoc() {
  if (_sec == 0 && _hour == 0 && _min == 0) {
    clicksound.play();
    clearInterval(interval);
    interval = null;

    var gio = document.getElementById("hours");
    var phut = document.getElementById("minutes");
    var giay = document.getElementById("seconds");
    var sec = String(_sec);
    var minute = String(_min);
    var hour = String(_hour);
    while (sec.length < 2) sec = "0" + sec;
    while (minute.length < 2) minute = "0" + minute;
    while (hour.length < 2) hour = "0" + hour;
    gio.innerHTML = hour;
    phut.innerHTML = minute;
    giay.innerHTML = sec;
  } else {
    _sec--;
    if (_sec < 0) {
      _sec = 59;
      _min--;
      if (_min < 0) {
        _hour--;
      }
    }
    var gio = document.getElementById("hours");
    var phut = document.getElementById("minutes");
    var giay = document.getElementById("seconds");
    var sec = String(_sec);
    var minute = String(_min);
    var hour = String(_hour);
    while (sec.length < 2) sec = "0" + sec;
    while (minute.length < 2) minute = "0" + minute;
    while (hour.length < 2) hour = "0" + hour;
    gio.innerHTML = hour;
    phut.innerHTML = minute;
    giay.innerHTML = sec;
  }
}
function Start() {
  cnt++;
  if (cnt % 2) {
    start.textContent = "Stop";
    interval = setInterval(demnguoc, 1000);
  } else {
    start.textContent = "Start";
    clearInterval(interval);
    interval = null;
  }
}
var reset = document.querySelector(".reset");
reset.addEventListener("click", Reset);
function Reset() {
  cnt = 0;
  clearInterval(interval);
  start.textContent = "Start";
  interval = null;
  var gio = document.getElementById("hours");
  var phut = document.getElementById("minutes");
  var giay = document.getElementById("seconds");
  var sec = "--";
  var minute = "--";
  var hour = "--";
  while (sec.length < 2) sec = "0" + sec;
  while (minute.length < 2) minute = "0" + minute;
  while (hour.length < 2) hour = "0" + hour;
  gio.innerHTML = hour;
  phut.innerHTML = minute;
  giay.innerHTML = sec;
}
