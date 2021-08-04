const icon = document.getElementById("icon");
const header = document.getElementById("nav");
const list = document.querySelector("ul");
icon.addEventListener("click", () => {
  header.classList.add("active");
  list.addEventListener("click", () => {
    header.classList.remove("active");
  });
});
