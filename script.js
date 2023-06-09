const searchBoxIcon = document.querySelector(".search-icon");
const searchBoxInput = document.querySelector(".search-box input");
const carSliderImg = document.querySelector(".car-slider img");

searchBoxIcon.addEventListener("click", () => {
  searchBoxInput.classList.toggle("active");
});

let i = 0;
setInterval(() => {
  if (i == 4) i = -1;
  i++;
  carSliderImg.src = `./images/car-${i % 5}.jpg`;
  carSliderImg.alt = `Car ${i % 5}`;
}, 3000);
