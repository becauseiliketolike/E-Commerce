const searchBoxIcon = document.querySelector(".search-icon");
const searchBoxInput = document.querySelector(".search-box input");
const carSlider = document.querySelector(".car-slider");

searchBoxIcon.addEventListener("click", () => {
  searchBoxInput.classList.toggle("active");
});

let i = 0;
const img = document.createElement("img");
img.src = `./images/car-${(i + 1) % 6}.jpg`;
img.alt = `Car ${(i + 1) % 6}`;
carSlider.appendChild(img);
i++;

setInterval(() => {
  img.src = `./images/car-${(i + 1) % 6}.jpg`;
  img.alt = `Car ${(i + 1) % 6}`;
  carSlider.appendChild(img);
  i++;
  if (i == 5) i = 0;
}, 2000);
// if (i == 4) i = 0;
