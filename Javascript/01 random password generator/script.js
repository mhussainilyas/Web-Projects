let inputElement = document.getElementById("input");
let generateBtn = document.querySelector(".generate-btn");
let clearBtn = document.querySelector(".clear-btn");
let copyBtn = document.querySelector(".fa-copy");
let copyAlert = document.querySelector(".alert-copy-password");

let allCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function handleClearInput() {
  inputElement.value = "";
}

function generateRandomIndex() {
  return Math.floor(Math.random() * allCharacters.length);
}

function handleGeneratePassword() {
  let password = "";
  let passwordLength = 16;
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = generateRandomIndex();
    password += allCharacters[randomIndex];
  }
  inputElement.value = password;
}

function handleCopyPassword() {
  inputElement.select(); // 💡 select for desktop devices
  inputElement.setSelectionRange(0, 99999); // 💡 select for mobile devices
  navigator.clipboard.writeText(inputElement.value);
  copyAlert.classList.add("active");
  setTimeout(() => {
    copyAlert.classList.remove("active");
  }, 3000);
}

clearBtn.addEventListener("click", handleClearInput);
generateBtn.addEventListener("click", handleGeneratePassword);
copyBtn.addEventListener("click", handleCopyPassword);
