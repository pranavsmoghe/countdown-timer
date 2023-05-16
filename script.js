var timeInterval;

function startTimer() {
  var minutesInput = document.getElementById("minutes");
  var minutes = parseInt(minutesInput.value, 10);
  
  if (isNaN(minutes)) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  var duration = minutes * 60; // Convert minutes to seconds
  var timer = duration, minutes, seconds;

  timeInterval = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("countdown").textContent = minutes + ":" + seconds;

    if (--timer < 0) {
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
