document.querySelectorAll(".hamburger-icon, .hamburger-links a").forEach((btn) => {
  btn.addEventListener("click", toggleMenu);
  console.log(btn);
});

function toggleMenu() {
  const menu = document.querySelector(".hamburger-nav");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  console.log("ididathing");
}
