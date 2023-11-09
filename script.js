// id=time
function refreshTime() {
	const timeDisplay = document.getElementById("time");
    const date = new Date();
    var dateString = parseInt(date.getHours()) // % 12;
    // if (dateString == "0")
    //     dateString = "12"
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
    // if (date.getHours() >= 12)
    //     dateString += " PM";
    // else
    //     dateString += " AM";
    timeDisplay.textContent = dateString;
}
setInterval(refreshTime, 1);

// id=date
function refreshDate() {
	const dateDisplay = document.getElementById("date");
    const date = new Date();
	var dayNum = parseInt(date.getDay());
	switch (dayNum) {
		case 0:
			dayNum = "Sunday";
			break;
		case 1:
			dayNum = "Monday";
			break;
		case 2:
			dayNum = "Tuesday";
			break;
		case 3:
			dayNum = "Wednesday";
			break;
		case 4:
			dayNum = "Thursday";
			break;
		case 5:
			dayNum = "Friday";
			break;
		case 6:
			dayNum = "Saturday";
			break;
	}
	var dateString = dayNum + " ";
	dateString += date.getDate() + "/";
	dateString += date.getMonth() + "/";
	dateString += date.getFullYear();
	dateDisplay.textContent = dateString;
}
setInterval(refreshDate, 1);
