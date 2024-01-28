let todaysDate = new Date();
function dayandtime (date) {
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

    let currentDay = days[date.getDay()];
    let currentHour = hour.getHour();
    let currentMinutes = minutes.getMinutes();
    let currentDate = document.querySelector("#date");
    date.innerhtml = `${currentdDay} ${currentHour}:${currentMins}`
}



// city name should display where 'Sydney' is
// °C to °F conversion
