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
  menu.classList.remove("active");
}

menuElements.forEach((e) => e.addEventListener("click", linkAction));

// =======================

let mainBtns = document.querySelectorAll(".main__btn");

mainBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    mainBtns.forEach((btn) => btn.classList.remove("active"));

    btn.classList.add("active");
  });
});
