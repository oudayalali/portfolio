const btn = document.getElementById("nextBtn");
const aboutMe = document.getElementById("aboutMe");
const quoteOne = document.getElementById("quoteOne");
const title = document.getElementById("title");
const titleTwo = document.getElementById("titleTwo");

btn.addEventListener("click", () => {
  aboutMe.classList.toggle("hidden");
  quoteOne.classList.toggle("hidden");
  title.classList.toggle("hidden");
  titleTwo.classList.toggle("hidden");
});
