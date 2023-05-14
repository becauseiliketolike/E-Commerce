const searchBoxIcon = document.querySelector(".search-icon");
const searchBoxInput = document.querySelector(".search-box input");

searchBoxIcon.addEventListener("click", () => {
  searchBoxInput.classList.toggle("active");
});
