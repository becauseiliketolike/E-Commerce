import { data } from "./data.js";

const datas = Array.from(data());
const searchBoxIcon = document.querySelector(".search-icon");
const searchBoxInput = document.querySelector(".search-box input");
const readButton = document.querySelector(".read-more-less button");
const readDisplay = document.querySelector(".read-more-less p span");
const readMoreDots = document.querySelector(".read-more-less p i");
const imgSlider = document.querySelector(".img-slider img");
const faArrowLeft = document.querySelector(".fa-arrow-left");
const faArrowRight = document.querySelector(".fa-arrow-right");
const products = document.querySelector(".products");

searchBoxIcon.addEventListener("click", () => {
  searchBoxInput.classList.toggle("active");
});

readButton.addEventListener("click", () => {
  readButton.innerText == "Read More ⯆"
    ? (readButton.innerText = "Read Less ⯅")
    : (readButton.innerText = "Read More ⯆");
  readMoreDots.classList.toggle("active");
  readDisplay.classList.toggle("active");
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
  imgSlider.src = `./images/slider/slide-${x % sliderImageLength}.jpg`;
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

datas.forEach((d) => {
  const product = document.createElement("div");
  product.classList.add("product");
  const img = document.createElement("img");
  img.src = d.image;
  img.alt = d.title;
  const description = document.createElement("div");
  description.classList.add("description");
  const pTitle = document.createElement("p");
  pTitle.innerText = d.title;
  const pPrice = document.createElement("p");
  pPrice.innerText = d.price;
  description.appendChild(pTitle);
  description.appendChild(pPrice);
  product.appendChild(img);
  product.appendChild(description);
  products.appendChild(product);
});
