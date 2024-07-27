import { news } from "../data.js";

const sideNewElement = document.getElementById("side-news");

const topic = "Topic";

for (let i = 0; i < 6; i++) {
  const sidenew = document.createElement("div");
  sidenew.className = "side-new";
  let content = `
        <h3 class="topic">${topic}</h3>
        <img src="${news[i].image}" alt="${news[i].title}">
        <p class="pt-1 first-in-topic" >${news[i].title}</p>
        <hr />
        <p class="">${news[i].title}</p>
        <hr />
        <p class="">${news[i].title}</p>
    `;
  if (i > 1) {
    content = `
        <h3 class="topic">${topic}</h3>
        <p class="pt-1 first-in-topic">${news[i].title}</p>
        <hr />
        <p class="">${news[i].title}</p>
        <hr />
        <p class="">${news[i].title}</p>
    `;
  }
  sidenew.innerHTML = content;
  sideNewElement.appendChild(sidenew);
}