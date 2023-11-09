window.onload = function()
{
	refreshTime();
	refreshDayOrNight();
	refreshDate();
	refreshWeather();
	
	setInterval(refreshTime, 500);
	setInterval(refreshDayOrNight, 60000);
	setInterval(refreshDate, 500);
	setInterval(refreshWeather, 900000);
}
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

// id=day-or-night
function refreshDayOrNight() {
	const dayOrNightDisplay = document.getElementById("day-or-night");
	const dayJson = JSON.parse(get("https://api.open-meteo.com/v1/forecast?latitude=32.03072&longitude=35.884237&current=is_day&timezone=auto&past_days=0"));
	if (dayJson.is_day) {
		dayOrNightDisplay.textContent = "";
		dayOrNightDisplay.style.color = "#f9e2af";
	}
	else {
		dayOrNightDisplay.textContent = "";
		dayOrNightDisplay.style.color = "#b4befe";
	}
}

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
	dateString += date.getDate() + 1 + "/";
	dateString += date.getMonth() + 1 + "/";
	dateString += date.getFullYear();
	dateDisplay.textContent = dateString;
}

function refreshWeather() {
	const temperature = document.getElementById("temperature");
	const weatherJson = JSON.parse(get("https://api.open-meteo.com/v1/forecast?latitude=32.03072&longitude=35.884236&minutely_15=temperature_2m,apparent_temperature,precipitation,rain,wind_speed_10m,wind_direction_10m&timezone=auto&forecast_days=1"));
	console.log(weatherJson);
	if (weatherJson.minutely_15.temperature_2m[0] >= 30) {
		temperature.textContent = " ";
		temperature.style.color = "#f38ba8";
	}
	else if (weatherJson.minutely_15.temperature_2m[0] <= 18) {
		temperature.textContent = " ";
		temperature.style.color = "#94e2d5";
	}
	else {
		temperature.textContent = " ";
		temperature.style.color = "#f5e0dc";
	}
	temperature.textContent += weatherJson.minutely_15.temperature_2m[0] + "C";
}


function get(url) {
    var httpreq = new XMLHttpRequest();
    httpreq.open("GET", url, false);
    httpreq.send(null);
    return httpreq.responseText;          
}
