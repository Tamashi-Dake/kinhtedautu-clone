document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = [
    // Tin tức Kinh tế Đầu tư Văn hóa, giáo dục Sức Khỏe Xe Pháp luật Bạn trẻ Công nghệ Không gian đẹp
    {
      title: "Tin tức",
      items: [
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
      ],
    },
    {
      title: "Kinh tế",
      items: [
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
        { divider: true },
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
      ],
    },
    {
      title: "Đầu tư",
      items: [
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
        { divider: true },
        { text: "Tin Trong nước", href: "/news-list" },
      ],
    },
    {
      title: "Văn hóa, Giáo dục",
      items: [
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
        { divider: true },
        { text: "Tin Trong nước", href: "/news-list" },
      ],
    },
    {
      title: "Sức Khỏe",
      items: [
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
      ],
    },
    {
      title: "Xe",
      items: [
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
      ],
    },
    {
      title: "Pháp luật",
      items: [
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
      ],
    },
    {
      title: "Bạn trẻ",
      items: [
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
      ],
    },
    {
      title: "Công nghệ",
      items: [
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
      ],
    },
    {
      title: "Không gian đẹp",
      items: [
        { text: "Tin Trong nước", href: "/news-list" },
        { divider: true },
        { text: "Tin quốc tế", href: "/news-list" },
      ],
    },
  ];

  const navbarItems = document.getElementById("navbarItems");

  dropdowns.forEach((dropdown) => {
    const li = document.createElement("li");
    li.className = "nav-item dropdown";

    const a = document.createElement("a");
    a.className = "nav-link nav-title dropdown-toggle";
    a.href = "/news-list";
    a.id = `${dropdown.title.replace(" ", "")}Dropdown`;
    a.role = "button";
    a.setAttribute("data-bs-toggle", "dropdown");
    // a.setAttribute("aria-expanded", "false");
    a.textContent = dropdown.title.toUpperCase();

    const ul = document.createElement("ul");
    ul.className = "dropdown-menu";
    ul.setAttribute(
      "aria-labelledby",
      `${dropdown.title.replace(" ", "")}Dropdown`
    );

    dropdown.items.forEach((item) => {
      if (item.divider) {
        const hr = document.createElement("hr");
        hr.className = "dropdown-divider";
        ul.appendChild(hr);
      } else {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "dropdown-item";
        a.href = item.href;
        a.textContent = item.text.toUpperCase();
        li.appendChild(a);
        ul.appendChild(li);
      }
    });

    li.appendChild(a);
    li.appendChild(ul);
    navbarItems.appendChild(li);
  });

  var navbar = document.getElementById("navbar");
  var offset = navbar.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= offset) {
      navbar.classList.add("sticky-nav");
    } else {
      navbar.classList.remove("sticky-nav");
    }
  });
});
