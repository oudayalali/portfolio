let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

// wait to completely load html css resources
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    // Intro Hello
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
    // body is visible after intro
    document.querySelector("body").style.visibility = "visible";
  }
};

// Next button
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
