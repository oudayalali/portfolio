let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 3000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 3300);
  });
});

const btn = document.getElementById("nextBtn");
const aboutMe = document.getElementById("aboutMe");
const quoteOne = document.getElementById("quoteOne");
const title = document.getElementById("title");
const titleTwo = document.getElementById("titleTwo");
const img = document.getElementById("img");
const profileImg = document.getElementById("profileImg");

btn.addEventListener("click", () => {
  img.classList.toggle("hidden");
  aboutMe.classList.toggle("hidden");
  quoteOne.classList.toggle("hidden");
  title.classList.toggle("hidden");
  titleTwo.classList.toggle("hidden");
  profileImg.classList.toggle("hidden");
});

const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate__flipInY");
    } else {
      entry.target.classList.remove("animate__flipInY");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});
