function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const date = new Date();
    var dateString = parseInt(date.getHours()) % 12 + ":" + date.getMinutes() + ":" + date.getSeconds();
    if (date.getHours() > 12)
        dateString += " PM";
    else
        dateString += " AM";
    timeDisplay.textContent = dateString;
  }
    setInterval(refreshTime, 1000);