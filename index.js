const id = document.querySelector(".inputID");
const pw = document.querySelector(".inputPW");
const user = ["", "", ""];

const loginBtn = document.querySelector(".loginBtn");
const joinBtn = document.querySelector(".joinBtn");

let Database = [];

function loadDatabase() {
  const loadedDatabase = localStorage.getItem("Database");
  if (loadedDatabase !== null) {
    Database = JSON.parse(loadedDatabase);
  }
}

function saveDatabase() {
  localStorage.setItem("Database", JSON.stringify(Database));
}

function saveUser() {
  localStorage.setItem("User", JSON.stringify(user));
}

function tryLogin(id, pw) {
  console.log(id + " " + pw);
  for (let i = 0; i < Database.length; i++) {
    if (Database[i][0] === id && Database[i][1] === pw) {
      user[0] = Database[i][0];
      user[1] = Database[i][1];
      user[2] = Database[i][2];
      return true;
    }
  }
  return false;
}

loginBtn.onclick = function clickLogin(event) {
  event.preventDefault();
  if (tryLogin(id.value, pw.value)) {
    saveUser();
    alert("로그인 되었습니다!");
    location.href = "main.html";
  } else {
    alert("회원 정보가 일치하지 않습니다!");
  }
};

joinBtn.onclick = function clickJoin(event) {
  event.preventDefault();
  location.href = "join.html";
};

function init() {
  loadDatabase();
}

init();
