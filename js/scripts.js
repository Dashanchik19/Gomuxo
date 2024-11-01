let btn = document.querySelector(".header__burger");
let btnsSpan = document.querySelectorAll(".header__burger span");
let menu = document.querySelector(".menu");
let menuElements = document.querySelectorAll(".menu__list");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");

    btnsSpan.forEach((btnSpan) => (btnSpan.style.background = "#1a1d30"));
  } else {
    menu.classList.add("active");
    btnsSpan.forEach((btnSpan) => (btnSpan.style.background = "#fff"));
  }
});

// =======================

document.addEventListener("click", (event) => {
  // Перевіряємо, чи клік був поза меню та кнопкою
  if (!menu.contains(event.target) && !btn.contains(event.target)) {
    menu.classList.remove("active");
    btn.classList.remove("active");
    btnsSpan.forEach((btnSpan) => (btnSpan.style.background = "#1a1d30"));
  }
});

// =======================

function linkAction() {
  menu.classList.toggle("active");
  btn.classList.toggle("active");
  btnsSpan.forEach((btnSpan) => (btnSpan.style.background = "#1a1d30"));
}

menuElements.forEach((e) => e.addEventListener("click", linkAction));

// =======================

let mainBtns = document.querySelectorAll(".main__btn");

mainBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    mainBtns.forEach((button) => button.classList.remove("active"));

    // Add 'active' class to the clicked button
    btn.classList.add("active");
  });
});

// =======================
//! Плавна поява меню при прокручуванні користувачем

const bgHeader = () => {
  const header = document.querySelector("header");

  if (window.scrollY >= 200) {
    header.classList.add("bg-header");
  } else {
    header.classList.remove("bg-header");
  }
};

window.addEventListener("scroll", bgHeader);

// Викликаємо функцію для первісної ініціалізації
bgHeader();

//! Modal form

let modalBtn = document.querySelector(".header__btn");

function modalView(event) {
  let modal = document.querySelector(".registration-form");
  let closeModal = document.querySelector(".register__close");
  let body = document.body;

  // Тоглуємо клас для модального вікна
  modal.classList.toggle("modal-register");

  // Перевіряємо, чи модальне вікно активне, і додаємо/видаляємо клас для заборони скролу
  if (modal.classList.contains("modal-register")) {
    body.classList.add("no-scroll");

    // Додаємо обробник події для закриття модального вікна
    closeModal.addEventListener("click", closeModalHandler);
  } else {
    body.classList.remove("no-scroll");

    // Видаляємо обробник події, коли модальне вікно закрите
    closeModal.removeEventListener("click", closeModalHandler);
  }
}

// Функція для закриття модального вікна
function closeModalHandler() {
  let modal = document.querySelector(".registration-form");
  let body = document.body;

  modal.classList.remove("modal-register");
  body.classList.remove("no-scroll");

  // Видаляємо обробник події, щоб уникнути дублювання
  closeModal.removeEventListener("click", closeModalHandler);
}

// Додаємо подію до кнопки відкриття модального вікна
modalBtn.addEventListener("click", modalView);

// Додаємо обробник події для закриття модального вікна при кліку поза його межами
window.addEventListener("click", function (event) {
  let modal = document.querySelector(".registration-form");
  if (
    modal.classList.contains("modal-register") &&
    !modal.contains(event.target) &&
    !modalBtn.contains(event.target)
  ) {
    closeModalHandler();
  }
});
