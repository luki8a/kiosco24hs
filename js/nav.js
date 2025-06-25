const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("active");
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
});
