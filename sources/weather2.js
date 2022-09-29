let now = new Date();

let todayDate = document.querySelector(".currentDate");
let todayTime = document.querySelector(".currentTime");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

todayDate.innerHTML = `${month} ${day} ${date}, ${year}`;
todayTime.innerHTML = `${hours}:${minutes}`;

function changeCity(response) {
  console.log(response);
  let tempRound = Math.round(response.data.main.temp);

  let h1 = document.querySelector("h1");

  if (input.value) {
    h1.innerHTML = `It is ${tempRound} degrees in ${input.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please type a city");
  }
}

function updateLocation(event) {
  event.preventDefault();
  let input = document.querySelector("#input");
  let apiKey = "1dbf926d3b4417bf379db7043bec1047";
  let city = input.value;
  let locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  console.log(city);
  console.log(locationUrl);

  axios.get(locationUrl).then(changeCity);
}

let form = document.querySelector("form");
form.addEventListener("submit", updateLocation);

function changeFahTemp(event) {
  event.preventDefault();
  let linkFahChange = document.querySelector(".currentTemp");
  linkFahChange.innerHTML = "95°";
}

let fahChange = document.querySelector("#fah-temp");
fahChange.addEventListener("click", changeFahTemp);

function changeCelTemp(event) {
  event.preventDefault();
  let linkCelChange = document.querySelector(".currentTemp");
  linkCelChange.innerHTML = "35°";
}

let celChange = document.querySelector("#cel-temp");
celChange.addEventListener("click", changeCelTemp);
