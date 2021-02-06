function setAlarm() { }
let timeRemaining = 0;
function setAlarm() {
  let inputBox document.getElementById("alarmSet");
  let valueIn = inputBox.value;
  inputBox.value = "";
  if (valueIn) {
    alert("Please set the time.");
    inputBox.focus();
    return;
  } else if (valueIn / 3600 > 24) {
    alert
  }
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
