const title = document.querySelector(".title");
const lecture = document.querySelector(".lecture");
const timeTable = document.querySelector(".timeTable");
const score = document.querySelector(".score");
const logout = document.querySelector(".logout");

const service = document.querySelector(".service");
const showLecture = document.createElement("h1");
const showTimeTable = document.createElement("h1");
const showScore = document.createElement("h1");

let user = [];

function loadUser() {
  const loadedUser = localStorage.getItem("User");
  user = JSON.parse(loadedUser);
}

function setTitle() {
  title.innerHTML = user[2] + "대학교의 " + user[0] + "님! 반갑습니다 ^__^";
}

lecture.onclick = function clickLecture(event) {
  event.preventDefault();
  location.href = "lecture.html";
};

timeTable.onclick = function clickTimeTable(event) {
  event.preventDefault();
  location.href = "timetable.html";
};

score.onclick = function clickScore(event) {
  event.preventDefault();
  location.href = "score.html";
};

logout.onclick = function clickLogout(event) {
  event.preventDefault();
  user = [];
  localStorage.setItem("User", JSON.stringify(user));
  location.href = "index.html";
};

function init() {
  loadUser();
  setTitle();
}

init();
