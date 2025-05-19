
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  setTimeout(() => {
    loader.classList.add("hide");
    content.style.display = "block";
  }, 1500);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
