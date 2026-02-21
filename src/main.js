const topbar = document.getElementById("topbar");
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

const syncTopbar = () => {
  topbar.classList.toggle("scrolled", window.scrollY > 14);
};

syncTopbar();
window.addEventListener("scroll", syncTopbar, { passive: true });

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

menuToggle.addEventListener("click", () => {
  const opened = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(opened));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    const target = href ? document.querySelector(href) : null;

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
