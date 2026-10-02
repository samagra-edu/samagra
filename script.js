/* ============================================================
   EDIT THESE: your real contact details
   (leave a value empty to hide that button)
   ============================================================ */
const CONTACT = {
  whatsapp: "",   // country code + number, no + or spaces. e.g. "919876543210"
  phone: "",      // e.g. "+919876543210"
  email: ""       // e.g. "hello@example.com"
};

/* ---------- Language toggle ---------- */
(function () {
  const root = document.documentElement;
  const saved = (function () {
    try { return localStorage.getItem("lang"); } catch (e) { return null; }
  })();
  setLang(saved === "en" ? "en" : "ml");

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.dataset.setLang); });
  });
})();

/* ---------- Mobile menu ---------- */
(function () {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  function close() { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  btn.addEventListener("click", function () {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
})();

/* ---------- Contact buttons ---------- */
(function () {
  function setup(id, href) {
    const el = document.getElementById(id);
    if (!el) return;
    if (href) { el.href = href; } else { el.style.display = "none"; }
  }
  setup("whatsappLink", CONTACT.whatsapp && "https://wa.me/" + CONTACT.whatsapp +
    "?text=" + encodeURIComponent("Hello, I would like to know more about learning support for my child."));
  setup("callLink", CONTACT.phone && "tel:" + CONTACT.phone);
  setup("emailLink", CONTACT.email && "mailto:" + CONTACT.email);
})();

/* ---------- Scroll reveal ---------- */
(function () {
  document.documentElement.classList.add("js");
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("visible"); });
    return;
  }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
