// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  // Toggle nav on hamburger click
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close nav when a link is clicked
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});



// Navbar background on scroll (use class, not inline style)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Contact form submission (unchanged)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      status.textContent = "Message sent successfully!";
      setTimeout(() => {
        status.textContent = "";
      }, 2000);
    } else {
      status.textContent = "Oops! Something went wrong.";
    }
  } catch (error) {
    status.textContent = "Error connecting to server.";
  }
});

// Theme toggle (toggle 'light' class on body)
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light");
} else {
  body.classList.remove("light");
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const theme = body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", theme);
});

document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.getElementById("typing-text");

  const text =
    "I'm a passionate Full-Stack Developer specializing in creating modern web applications with clean architecture and best practices. With expertise in both front-end and back-end technologies, I build scalable and maintainable software solutions.";

  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting) {
      paragraph.innerText = text.substring(0, index + 1);
      index++;
      if (index === text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      paragraph.innerText = text.substring(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
      }
    }
    setTimeout(typeEffect, isDeleting ? 20 : 40);
  }

  typeEffect();
});



