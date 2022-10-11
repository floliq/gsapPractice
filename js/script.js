let tl = gsap.timeline();
tl.from(".hero__title", { y: 100, duration: 0.5, opacity: 0, delay: 1 })
  .from(".hero__btn", { y: 100, duration: 0.5, opacity: 0 }, "<")
  .from(".hero__descr", { opacity: 0, duration: 1 })
  .from(
    ".photos__picture-one",
    { opacity: 0, duration: 0.3, scale: 0.75 },
    ">-0.8"
  )
  .from(
    ".photos__picture-two",
    { opacity: 0, duration: 0.3, scale: 0.75, delay: 0.3 },
    "<"
  )
  .from(
    ".photos__picture-three",
    { opacity: 0, duration: 0.3, scale: 0.75, delay: 0.3 },
    "<"
  )
  .from(".photos__author", { opacity: 0, duration: 1, delay: 0.15 }, "<");

let tlOpen = gsap.timeline();
tlOpen
  .from(".menu", { opacity: 0, duration: 0.5 })
  .from(".nav__list", { opacity: 0, y: 50, duration: 0.6 }, ">-0.2")
  .from(".social", { opacity: 0, y: 50, duration: 0.75, delay: 0.3 }, "<")
  .from(".menu__right", { opacity: 0, y: 50, duration: 0.75 }, "<");

tlOpen.pause();

let menuBtn = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");
let isClicked = false;

menuBtn.addEventListener("click", () => {
  menu.classList.add("menu--open");
  tlOpen.play();
});

closeBtn.addEventListener("click", () => {
  isClicked = !isClicked;
  if (isClicked){
    tlOpen.reverse();
    setTimeout(function () {
      menu.classList.remove("menu--open");
    }, 1550);
    isClicked = !isClicked
  }
});
