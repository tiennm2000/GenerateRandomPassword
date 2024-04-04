const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+{}|[]></-=";

const allChar = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  while (password.length < length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

document.querySelector("button").addEventListener("click", createPassword);
document.querySelector(".display img").addEventListener("click", copyPassword);
