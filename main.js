// Частина 1: Збереження інформації в LocalStorage

// Функція для збереження інформації в LocalStorage
function saveToLocalStorage() {
  // Отримуємо значення введених користувачем даних
  var name = document.getElementById("nameInput").value;
  var age = document.getElementById("ageInput").value;

  // Створюємо об'єкт з отриманими даними
  var userInfo = {
    name: name,
    age: age,
  };

  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";

  alert("Інформацію збережено в LocalStorage.");
}

function readFromLocalStorage() {
  var userInfoString = localStorage.getItem("userInfo");

  var userInfo = JSON.parse(userInfoString);

  if (userInfo && userInfo.name) {
    alert("Ім'я користувача: " + userInfo.name);
  } else {
    alert("Інформація не знайдена в LocalStorage.");
  }
}
