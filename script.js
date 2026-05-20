const body = document.body;
const header = document.querySelector("[data-header]");
const loader = document.querySelector("[data-loader]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const hero = document.querySelector("[data-hero]");
const form = document.querySelector("[data-contact-form]");
const toast = document.querySelector("[data-toast]");
const toastClose = document.querySelector("[data-toast-close]");
const timeline = document.querySelector("[data-timeline]");
const timelineProgress = document.querySelector("[data-timeline-progress]");

let ticking = false;

const setLoaded = () => {
  body.classList.add("is-loaded");
  if (loader) {
    window.setTimeout(() => loader.remove(), 700);
  }
};

if (document.readyState === "complete") {
  setLoaded();
} else {
  window.addEventListener("load", setLoaded, { once: true });
  window.setTimeout(setLoaded, 1400);
}

const closeMenu = () => {
  if (!menuToggle || !mobilePanel) return;
  menuToggle.classList.remove("is-open");
  mobilePanel.classList.remove("is-open");
  header?.classList.remove("menu-is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  body.classList.remove("menu-open");
};

if (menuToggle && mobilePanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !mobilePanel.classList.contains("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    mobilePanel.classList.toggle("is-open", isOpen);
    header?.classList.toggle("menu-is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    body.classList.toggle("menu-open", isOpen);
  });

  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("has-shadow", window.scrollY > 24);
};

const updateHeroParallax = () => {
  if (!hero) return;
  const offset = Math.min(window.scrollY * 0.16, 82);
  hero.style.setProperty("--hero-y", `${offset}px`);
};

const updateTimeline = () => {
  if (!timeline || !timelineProgress) return;
  const rect = timeline.getBoundingClientRect();
  const viewport = window.innerHeight || document.documentElement.clientHeight;
  const start = viewport * 0.78;
  const end = viewport * 0.22 - rect.height;
  const progress = (start - rect.top) / (start - end);
  const clamped = Math.max(0, Math.min(1, progress));
  timeline.style.setProperty("--timeline-progress", `${clamped * 100}%`);
};

const updateScrollEffects = () => {
  updateHeader();
  updateHeroParallax();
  updateTimeline();
  ticking = false;
};

const requestScrollUpdate = () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(updateScrollEffects);
};

window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", requestScrollUpdate);
updateScrollEffects();

const revealItems = document.querySelectorAll(".reveal");
const countItems = document.querySelectorAll("[data-count]");
const animatedCounters = new WeakSet();

const animateCounter = (element) => {
  if (animatedCounters.has(element)) return;
  const target = Number(element.dataset.target);
  if (!Number.isFinite(target)) return;

  animatedCounters.add(element);
  const start = performance.now();
  const duration = target > 100 ? 1250 : 850;

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(target * eased).toLocaleString("cs-CZ")}${element.dataset.suffix || ""}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -70px 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.55 }
  );

  countItems.forEach((item) => counterObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
  countItems.forEach(animateCounter);
}

const showToast = () => {
  if (!toast) return;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 6200);
};

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    showToast();
  });
}

toastClose?.addEventListener("click", () => {
  toast?.classList.remove("is-visible");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeMenu();
  toast?.classList.remove("is-visible");
});
