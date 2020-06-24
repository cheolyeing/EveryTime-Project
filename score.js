const main = document.querySelector(".main");
const lecture = document.querySelector(".lecture");
const timeTable = document.querySelector(".timeTable");
const score = document.querySelector(".score");
const logout = document.querySelector(".logout");

const serviceTitle = document.querySelector(".serviceTitle");
const service = document.querySelector(".service");
const submitBtn = document.querySelector(".submitBtn");

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
let num = 0;

submitBtn.onclick = function clickSubmitBtn() {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += parseInt(document.querySelector(".select" + i).value);
  }
  document.querySelector(".expectedScore").innerHTML =
    "예상학점 : " + parseFloat(sum / num).toFixed(2) + "점";
};

function input() {
  for (let t = 1; t < 5; t++) {
    for (let d = 1; d < 6; d++) {
      let className = "a" + t + d;
      const pos = document.createElement("t");

      if (time[t][d][0] !== undefined && time[t][d][0] !== "") {
        pos.innerHTML = time[t][d][0];
        service.appendChild(pos);

        const selector = document.createElement("select");
        selector.className = "select" + num;
        num += 1;
        const empty = document.createElement("option");
        empty.innerHTML = "학점 선택";
        empty.value = 0;
        const A = document.createElement("option");
        A.innerHTML = "A";
        A.value = 4;
        const B = document.createElement("option");
        B.innerHTML = "B";
        B.value = 3;
        const C = document.createElement("option");
        C.innerHTML = "C";
        C.value = 2;
        const D = document.createElement("option");
        D.innerHTML = "D";
        D.value = 1;
        const F = document.createElement("option");
        F.innerHTML = "F";
        F.value = 0;
        selector.appendChild(empty);
        selector.appendChild(A);
        selector.appendChild(B);
        selector.appendChild(C);
        selector.appendChild(D);
        selector.appendChild(F);

        service.appendChild(selector);
        service.appendChild(document.createElement("br"));
        service.appendChild(document.createElement("br"));
      }
    }
  }
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

function setServiceTitle() {
  serviceTitle.innerHTML = user[2] + "대학교 " + user[0] + "님의 학점예측";
}

function loadUser() {
  const loadedUser = localStorage.getItem("User");
  user = JSON.parse(loadedUser);
}

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
  setServiceTitle();
  input();
}

init();
