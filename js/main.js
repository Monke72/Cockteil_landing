var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    860: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const scrollBtn = document.querySelector(".achievements__button-top");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

var swiperToo = new Swiper(".mySwiperToo", {
  loop: true,
  speed: 600,
  allowTouchMove: false,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next-too",
  },
});

const questionsBtnAll = document.querySelectorAll(
  ".questions__accordion-header"
);
const questionsBtn = document.querySelectorAll(".questions__accordion-header");
const questionPlus = document.querySelectorAll(".button__plus");
const details = document.querySelectorAll(".questions__accordion");

// if (details.hasAttribute("open")) {

// }

// questionsBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     questionPlus.forEach((any) => {
//       any.classList.toggle("none");
//     });
//   });
// });

// questionsBtn.onclick = () => {
//   questionsInfo.classList.toggle("border__btm");
// };

// questionsBtnAll.forEach((event) => {
//   event.addEventListener("click", () => {
//     console.log(event);
//     details.forEach((e) => {
//       if (e.hasAttribute("open")) {
//         questionsBtn.classList.remove("border__btm");
//       } else {
//         questionsBtn.classList.add("border__btm");
//       }
//     });
//   });
// });

const detailsItem = document.querySelector(".questions__info");
detailsItem.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName === "SUMMARY") {
    event.target.classList.toggle("open");
    event.target.classList.toggle("border__btm");
  }
});

const checkBox = document.querySelector(".invate__chekbox");
const checkBtn = document.querySelector(".checked");
console.log(checkBox);
console.log(checkBtn);

checkBox.addEventListener("click", () => {
  checkBtn.classList.toggle("any");
});

const burgerBtn = document.querySelector(".header__top-menu");
const burgerMenu = document.querySelector(".burger__menu");
const closeBtn = document.querySelector(".burger__button-close");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("none");
});

closeBtn.addEventListener("click", () => {
  burgerMenu.classList.add("none");
});
