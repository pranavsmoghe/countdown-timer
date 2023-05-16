var timeInterval;
var timer;

function startTimer() {
  var minutesInput = document.getElementById("minutes");
  var minutes = parseInt(minutesInput.value, 10);
  
  if (isNaN(minutes)) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  var duration = minutes * 60; // Convert minutes to seconds
  var startTime = Date.now() + duration * 1000; // Calculate the end time

  clearInterval(timeInterval); // Clear any existing interval

  timeInterval = setInterval(function() {
    var currentTime = Date.now();
    var remainingTime = Math.max(0, Math.floor((startTime - currentTime) / 1000)); // Calculate remaining time in seconds

    var minutes = Math.floor(remainingTime / 60);
    var seconds = remainingTime % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("countdown").textContent = minutes + ":" + seconds;

    if (remainingTime === 0) {
      clearInterval(timeInterval);
      alert("Countdown timer has ended!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timeInterval);
  document.getElementById("countdown").textContent = "00:00";
  document.getElementById("minutes").value = "";
}
