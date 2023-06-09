import { data } from "../data.js";

const datas = Array.from(data());
const d = datas.filter(
  (data) => data.id === parseInt(localStorage.getItem("clicked"))
);

const main = document.querySelector("main");
const productPage = document.createElement("div");
productPage.classList.add("product-page");
const productImg = document.createElement("div");
productImg.classList.add("product-img");
const img = document.createElement("img");
img.src = `../images/products/product-${d[0].id}.jpg`;
img.alt = d[0].title;
productImg.appendChild(img);
const productDetails = document.createElement("div");
productDetails.classList.add("product-details");
const productName = document.createElement("div");
productName.classList.add("product-name");
const productH2 = document.createElement("h2");
productH2.innerText = d[0].title;
productName.appendChild(productH2);
const productH3 = document.createElement("h3");
productH3.innerText = d[0].price;
productName.appendChild(productH3);
const productDesc = document.createElement("p");
productDesc.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, molestiae modi, delectus dicta aliquam ea consequuntur odio numquam iure dolorem quidem quia distinctio perferendis ipsam, facere fugit ipsum hic illum";
const ctas = document.createElement("div");
ctas.classList.add("ctas");
const cta1 = document.createElement("button");
const cta2 = document.createElement("button");
cta1.classList.add("cta-1");
cta1.innerText = "Buy Now";
cta2.classList.add("cta-2");
cta2.innerText = "Add to Cart";
ctas.appendChild(cta1);
ctas.appendChild(cta2);
productDetails.appendChild(productName);
productDetails.appendChild(productDesc);
productDetails.appendChild(ctas);
productPage.appendChild(productImg);
productPage.appendChild(productDetails);
main.appendChild(productPage);
