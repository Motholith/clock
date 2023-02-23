function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const date = new Date();
    var dateString = parseInt(date.getHours()) % 12;
    if (dateString == "0")
        dateString = "12"
    dateString += ":";
    if (date.getMinutes() < 10)
        dateString += "0" + date.getMinutes();
    else
        dateString += date.getMinutes();
    dateString += ":";
    if (date.getSeconds() < 10)
        dateString += "0" + date.getSeconds();
    else
        dateString += date.getSeconds();
    if (date.getHours() >= 12)
        dateString += " PM";
    else
        dateString += " AM";
    timeDisplay.textContent = dateString;
}

setInterval(refreshTime, 1);