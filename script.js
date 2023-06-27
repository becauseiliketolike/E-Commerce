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
  const product = document.createElement("a");
  product.classList.add("product");
  product.href = `./details/${d.id}.html`;
  const img = document.createElement("img");
  img.src = `./images/products/product-${d.id}.jpg`;
  img.alt = d.title;
  const description = document.createElement("div");
  description.classList.add("description");
  const pTitle = document.createElement("p");
  pTitle.innerText = d.title;
  const pPrice = document.createElement("p");
  pPrice.innerText = d.price;
  const ctas = document.createElement("div");
  ctas.classList.add("ctas");
  const cta1 = document.createElement("button");
  const cta2 = document.createElement("button");
  cta1.classList.add("cta-1");
  cta1.innerText = "Add to Cart";
  cta2.classList.add("cta-2");
  cta2.innerText = "Browse";
  ctas.appendChild(cta1);
  ctas.appendChild(cta2);
  description.appendChild(pTitle);
  description.appendChild(pPrice);
  product.appendChild(img);
  product.appendChild(description);
  product.appendChild(ctas);
  products.appendChild(product);
});
