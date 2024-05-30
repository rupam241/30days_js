const todayDate = document.getElementById("today-date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();

todayDate.innerText = "Date:" + (date.getDate()<10?"0":"")+date.getDate();
month.innerText = "Month:" + months[date.getMonth()];
year.innerHTML = "year:" + date.getFullYear();
day.innerHTML = "Day:" + weekdays[date.getDay()];



