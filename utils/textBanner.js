import { recommended } from "../data.js";
const marqueeElement = document.getElementById("marquee");
const marqueeContent = document.createElement("div");
marqueeContent.className = "marquee-content";

recommended.forEach((item, index) => {
  const a = document.createElement("a");
  a.href = "/news";
  a.textContent = item;

  marqueeContent.appendChild(a);

  // Add a separator unless it's the last item
  if (index < recommended.length - 1) {
    const separator = document.createElement("span");
    separator.textContent = "   |  "; // Chuỗi khoảng trắng
    marqueeContent.appendChild(separator);
  }
});

marqueeElement.appendChild(marqueeContent);
