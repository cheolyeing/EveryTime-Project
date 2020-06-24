const id = document.querySelector(".inputID");
const pw = document.querySelector(".inputPW");
const univ = document.querySelector(".inputUniv");
let user = ["", "", "", []];

const backBtn = document.querySelector(".backBtn");
const joinBtn = document.querySelector(".joinBtn");

let Database = [];
let time = [
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
  [[], [], [], [], [], [], []],
];

function loadDatabase() {
  const loadedDatabase = localStorage.getItem("Database");
  if (loadedDatabase !== null) {
    Database = JSON.parse(loadedDatabase);
  }
}

function saveDatabase() {
  localStorage.setItem("Database", JSON.stringify(Database));
}

joinBtn.onclick = function clickJoin(event) {
  event.preventDefault();
  console.log("click");
  console.log(id.value + " " + pw.value + " " + univ.value);
  if (id.value === "" || id.value === null) {
    alert("아이디를 입력해주세요!");
    return;
  } else if (pw.value === "" || pw.value === null) {
    alert("비밀번호를 입력해주세요!");
    return;
  } else if (univ.value === "" || univ.value === null) {
    alert("대학교를 입력해주세요!");
    return;
  } else {
    user[0] = id.value;
    user[1] = pw.value;
    user[2] = univ.value;
    user[3] = time;
    Database = [...Database, user];
    console.log(Database);
    saveDatabase();

    location.href = "index.html";
  }
};

backBtn.onclick = function clickBack(event) {
  event.preventDefault();
  location.href = "index.html";
};

function init() {
  loadDatabase();
}

init();
