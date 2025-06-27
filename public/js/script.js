const navbar = document.getElementById("navbar");
let lastScrollY = window.scrollY;

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY < 10) {
    navbar.classList.remove("shadow-md");
    navbar.classList.remove("bg-white/90");
    navbar.classList.add("bg-white/0");
  } else {
    navbar.classList.add("shadow-md");
    navbar.classList.remove("bg-white/0");
    navbar.classList.add("bg-white/90");
  }

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScrollY = currentScrollY;
}

// Attach scroll event
window.addEventListener("scroll", handleScroll);

// ✅ Call once on page load
handleScroll();
