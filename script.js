var timeInterval;

function startTimer() {
  var duration = 60 * 5; // 5 minutes in seconds
  var timer = duration, minutes, seconds;

  timeInterval = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("countdown").textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      stopTimer();
      alert("Countdown timer has ended!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timeInterval);
  document.getElementById("countdown").textContent = "00:00";
}
