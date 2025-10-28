document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("#nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("show");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const form = document.querySelector(".signup");
  const email = document.getElementById("email");
  if (form && email) {
    form.addEventListener("submit", () => {
      const value = email.value.trim();
      if (!value) return;
      alert(`Thanks! We'll be in touch at ${value}.`);
      email.value = "";
    });
  }
});
