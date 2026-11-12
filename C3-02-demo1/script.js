// クリックで変化
const btn = document.querySelector(".fade-button-js");

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "#05b";

  setTimeout(() => {
    btn.style.backgroundColor = "rgb(255, 51, 0)";
  }, 5000)
});