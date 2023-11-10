window.onload = function()
{
	rTime();
	rDayOrNight();
	rDate();
	rHijri();
	rWeather();
	
	setInterval(rTime, 500);
	setInterval(rDayOrNight, 60000);
	setInterval(rDate, 500);
	setInterval(rHijri, 500);
	setInterval(rWeather, 300000);
}
let latitude = 32.027848
let longitude = 35.8825037
// id=time
function rTime() {
	const timeDisplay = document.getElementById("time");
    const date = new Date();
    let dateString = parseInt(date.getHours());
    dateString += ":";
    if (date.getMinutes() < 10)
        dateString += `0${date.getMinutes()}`;
    else
        dateString += date.getMinutes();
    dateString += ":";
    if (date.getSeconds() < 10)
        dateString += `0${date.getSeconds()}`;
    else
        dateString += date.getSeconds();
    timeDisplay.textContent = dateString;
}

// id=day-or-night
function rDayOrNight() {
	const dayOrNightDisplay = document.getElementById("day-or-night");
	const dayJson = JSON.parse(get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=is_day&timezone=auto&past_days=0`));
	console.log(dayJson);
	if (dayJson.current.is_day) {
		dayOrNightDisplay.textContent = "";
		dayOrNightDisplay.style.color = "#f9e2af";
	}
	else {
		dayOrNightDisplay.textContent = "";
		dayOrNightDisplay.style.color = "#b4befe";
	}
}

// id=date
function rDate() {
	const dateDisplay = document.getElementById("date");
    const date = new Date();
	let dayNum = parseInt(date.getDay());
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
	let dateString = `${dayNum} `;
	dateString += `${date.getDate()}/`;
	dateString += `${date.getMonth() + 1}/`;
	dateString += date.getFullYear();
	dateDisplay.textContent = dateString.toLowerCase();
}
function rHijri() {
	const hijriDisplay = document.getElementById("hijri");
	const date = new Date();

	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "Asia/Amman",
	};
	const format = new Intl.DateTimeFormat("en-JO-u-ca-islamic", options);
	const hijriParts = format.formatToParts(date);
	let hijriString = `(${hijriParts[2].value - 1} ${hijriParts[0].value} ${hijriParts[4].value})`;
	hijriString = hijriString.replace('II', 'ath-thaani');
	hijriString = hijriString.replace('I', 'al-awwal');
	hijriString = hijriString.replace('AH', '');
	hijriDisplay.textContent = hijriString.toLowerCase();
}

function rWeather() {
	const weatherJson = JSON.parse(get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max&timezone=auto&forecast_days=1`));
	const temp = document.getElementById("temp");
	console.log(weatherJson);
	let t = weatherJson.current.temperature_2m;
	console.log(t);
	if (t >= 30) {
		temp.textContent = " ";
		temp.style.color = "#f38ba8";
	}
	else if (t <= 18) {
		temp.textContent = " ";
		temp.style.color = "#94e2d5";
	}
	else {
		temp.textContent = " ";
		temp.style.color = "#fab387";
	}
	temp.textContent += `${t}C`;

	const tempMin = document.getElementById("temp-min");
	t = weatherJson.daily.temperature_2m_min[0];
	if (t >= 30)
		tempMin.style.color = "#f38ba8";
	else if (t <= 18)
		tempMin.style.color = "#94e2d5";
	else
		tempMin.style.color = "#fab387";
	tempMin.textContent = `${t}C`;
	
	const tempMax = document.getElementById("temp-max");
	t = weatherJson.daily.temperature_2m_max[0];
	if (t >= 30)
		tempMax.style.color = "#f38ba8";
	else if (weatherJson.daily.temperature_2m_max[0] <= 18)
		tempMax.style.color = "#94e2d5";
	else
		tempMax.style.color = "#fab387";
	tempMax.textContent = `${t}C`;

	const feelsTemp = document.getElementById("feels-temp");
	console.log(weatherJson);
	let fT = weatherJson.current.apparent_temperature;
	if (fT >= 30) {
		feelsTemp.textContent = " ";
		feelsTemp.style.color = "#f38ba8";
	}
	else if (fT <= 18) {
		feelsTemp.textContent = " ";
		feelsTemp.style.color = "#94e2d5";
	}
	else {
		feelsTemp.textContent = " ";
		feelsTemp.style.color = "#fab387";
	}
	feelsTemp.textContent += `${fT}C`;

	const feelsTempMin = document.getElementById("feels-temp-min");
	fT = weatherJson.daily.apparent_temperature_min[0];
	if (fT >= 30)
		feelsTempMin.style.color = "#f38ba8";
	else if (fT <= 18)
		feelsTempMin.style.color = "#94e2d5";
	else
		feelsTempMin.style.color = "#fab387";
	feelsTempMin.textContent = `${fT}C`;
	
	const feelsTempMax = document.getElementById("feels-temp-max");
	fT = weatherJson.daily.apparent_temperature_max[0];
	if (fT >= 30)
		feelsTempMax.style.color = "#f38ba8";
	else if (fT <= 18)
		feelsTempMax.style.color = "#94e2d5";
	else
		feelsTempMax.style.color = "#fab387";
	feelsTempMax.textContent = `${fT}C`;
}


function get(url) {
	const httpreq = new XMLHttpRequest();
    httpreq.open("GET", url, false);
    httpreq.send(null);
    return httpreq.responseText;          
}
