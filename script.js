const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const parallaxSection = document.querySelector("[data-parallax]");

const closeMenu = () => {
  if (!menuToggle || !mobilePanel) return;
  menuToggle.classList.remove("is-open");
  mobilePanel.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

if (menuToggle && mobilePanel) {
  menuToggle.addEventListener("click", () => {
    const willOpen = !mobilePanel.classList.contains("is-open");
    menuToggle.classList.toggle("is-open", willOpen);
    mobilePanel.classList.toggle("is-open", willOpen);
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    document.body.classList.toggle("menu-open", willOpen);
  });

  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("has-shadow", window.scrollY > 18);
};

const updateParallax = () => {
  if (!parallaxSection) return;
  const offset = Math.min(window.scrollY * 0.08, 42);
  parallaxSection.style.setProperty("--parallax-y", `${offset}px`);
};

updateHeader();
updateParallax();

window.addEventListener(
  "scroll",
  () => {
    updateHeader();
    updateParallax();
  },
  { passive: true }
);

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -50px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Děkujeme, formulář je v demo režimu. Pro skutečnou poptávku prosím zavolejte nebo napište e-mail.";
    form.reset();
  });
}
