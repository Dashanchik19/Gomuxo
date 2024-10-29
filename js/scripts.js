let btn = document.querySelector(".header__burger");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
});

let mainBtns = document.querySelectorAll(".main__btn");

mainBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    mainBtns.forEach((btn) => btn.classList.remove("active"));

    btn.classList.add("active");
  });
});
