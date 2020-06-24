const main = document.querySelector(".main");
const lecture = document.querySelector(".lecture");
const timeTable = document.querySelector(".timeTable");
const score = document.querySelector(".score");
const logout = document.querySelector(".logout");

const service = document.querySelector(".service");
const serviceTitle = document.querySelector(".serviceTitle");
const submitBtn = document.querySelector(".submitBtn");

let user = [];
let lectureScore = [[]];
let index = 0;

function findLecture() {
  for (let i = 0; i < lectureScore.length; i++) {
    index = i + 1;
    if (lectureScore[i][0] === user[2]) {
      index = i;
      break;
    }
  }
  console.log(index);
  if (index === lectureScore.length) {
    lectureScore.push([user[2]]);
    saveLecture();
  }
}

function listLecture() {
  for (let i = 1; i < lectureScore[index].length; i++) {
    const container = document.createElement("div");
    const lec = document.createElement("h2");
    lec.innerHTML = lectureScore[index][i][0];
    const pro = document.createElement("h4");
    pro.innerHTML = lectureScore[index][i][1] + " 교수";
    const content = document.createElement("t");
    content.innerHTML = lectureScore[index][i][2];

    container.appendChild(lec);
    container.appendChild(pro);
    container.appendChild(content);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));

    service.appendChild(container);
  }
}

submitBtn.onclick = function addLecture() {
  const lec = document.querySelector(".inputLecture").value;
  const pro = document.querySelector(".inputProfessor").value;
  const content = document.querySelector(".inputContent").value;
  lectureScore[index].push([lec, pro, content]);
  saveLecture();
  location.reload(true);
};

function setServiceTitle() {
  serviceTitle.innerHTML = user[2] + "대학교의 강의평가";
}

function loadLecture() {
  const loadedLecture = localStorage.getItem("Lecture");
  if (loadedLecture !== undefined && loadedLecture !== null) {
    lectureScore = JSON.parse(loadedLecture);
  }
}

function saveLecture() {
  localStorage.setItem("Lecture", JSON.stringify(lectureScore));
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
  loadLecture();
  findLecture();
  listLecture();
  setServiceTitle();
}

init();
