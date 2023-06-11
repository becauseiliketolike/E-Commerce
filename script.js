const searchBoxIcon = document.querySelector(".search-icon");
const searchBoxInput = document.querySelector(".search-box input");
const imgSlider = document.querySelector(".img-slider img");
const faArrowLeft = document.querySelector(".fa-arrow-left");
const faArrowRight = document.querySelector(".fa-arrow-right");

searchBoxIcon.addEventListener("click", () => {
  searchBoxInput.classList.toggle("active");
});

let i = 0;
let sliderInterval;
const sliderImageLength = 7;

const startInterval = () => {
  sliderInterval = setInterval(() => {
    if (i == sliderImageLength - 1) i = -1;
    i++;
    updateSlider(i);
  }, 2500);
};

const updateSlider = (x) => {
  imgSlider.src = `./images/slide-${x % sliderImageLength}.jpg`;
  imgSlider.alt = `Image ${x % sliderImageLength}`;
  clearInterval(sliderInterval);
  startInterval();
};

faArrowLeft.addEventListener("click", () => {
  i == 0 ? (i = sliderImageLength - 1) : (i = (i - 1) % sliderImageLength);
  updateSlider(i);
});

faArrowRight.addEventListener("click", () => {
  i = (i + 1) % sliderImageLength;
  updateSlider(i);
});

startInterval();
