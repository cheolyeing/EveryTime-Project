const main = document.querySelector(".main");
const lecture = document.querySelector(".lecture");
const timeTable = document.querySelector(".timeTable");
const score = document.querySelector(".score");
const logout = document.querySelector(".logout");

const serviceTitle = document.querySelector(".serviceTitle");
const addBtn = document.querySelector(".addLecture");

let user = [];
let Database = [];
let time = [
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
];
let index = 0;

function paintTable() {
  for (let t = 1; t < 5; t++) {
    for (let d = 1; d < 6; d++) {
      let className = "a" + t + d;
      const pos = document.querySelector("." + className);

      if (time[t][d][0] !== undefined && time[t][d][0] !== "") {
        pos.innerHTML = time[t][d][0] + "<br/>" + time[t][d][1] + " 교수";
      }
    }
  }
}

function setServiceTitle() {
  serviceTitle.innerHTML = user[2] + "대학교 " + user[0] + "님의 시간표";
}

function loadTime() {
  for (let i = 0; i < Database.length; i++) {
    if (Database[i][0] === user[0]) {
      index = i;
      time = Database[i][3];
      break;
    }
  }
}

function loadDatabase() {
  const loadedDatabase = localStorage.getItem("Database");
  Database = JSON.parse(loadedDatabase);
}

function loadUser() {
  const loadedUser = localStorage.getItem("User");
  user = JSON.parse(loadedUser);
}

addBtn.onclick = function addLecture(event) {
  event.preventDefault();
  const day = document.querySelector(".selectDay").value;
  const t = document.querySelector(".selectTime").value;
  const lecture = document.querySelector(".inputLecture").value;
  const professor = document.querySelector(".inputProfessor").value;
  time[t][day] = [lecture, professor];
  console.log(time);
  Database[index][3] = time;
  localStorage.setItem("Database", JSON.stringify(Database));
  paintTable();
};

main.onclick = function clickMain(event) {
  event.preventDefault();
  location.href = "main.html";
};

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
  loadDatabase();
  loadTime();
  paintTable();
  setServiceTitle();
}

init();
