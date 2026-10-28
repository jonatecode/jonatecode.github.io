// Shared navigation: one source of truth for the top bar + sidebar on every page.
// Load this as the first thing inside <body> (no defer) so the nav is in place before first paint.
// Add data-nav="full" to <body> to show every link in the top bar (used on the home page).
(() => {
  const pages = [
    { href: "/index.html", label: "Home" },
    { href: "/education.html", label: "Education" },
    { href: "/coding.html", label: "Coding" },
    { href: "/photography.html", label: "Photography" },
  ];

  const icon = {
    close:
      '<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" aria-hidden="true"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>',
    menu:
      '<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" aria-hidden="true"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>',
  };

  const here = location.pathname.replace(/\/$/, "/index.html");
  const item = (p, cls = "") =>
    `<li${cls ? ` class="${cls}"` : ""}><a href="${p.href}"${p.href === here ? ' aria-current="page"' : ""}>${p.label}</a></li>`;

  const [home, ...sections] = pages;
  const topLinks = document.body.dataset.nav === "full" ? pages : [home];

  document.body.insertAdjacentHTML(
    "afterbegin",
    `<nav aria-label="Menu">
      <ul class="sidebar">
        <li data-menu="close"><a href="#" aria-label="Close menu">${icon.close}</a></li>
        ${sections.map((p) => item(p)).join("")}
      </ul>
    </nav>
    <nav aria-label="Main">
      <ul>
        ${topLinks.map((p) => item(p, p === home ? "" : "nav-extra")).join("")}
        <li data-menu="open"><a href="#" aria-label="Open menu">${icon.menu}</a></li>
      </ul>
    </nav>`
  );

  const sidebar = document.querySelector(".sidebar");
  const setSidebar = (open) => (sidebar.style.display = open ? "flex" : "none");

  document.addEventListener("click", (e) => {
    const toggle = e.target.closest("[data-menu]");
    if (!toggle) return;
    e.preventDefault();
    setSidebar(toggle.dataset.menu === "open");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setSidebar(false);
  });
})();
