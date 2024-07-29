import { news } from "../data.js";

const sideNewElement = document.getElementById("side-news");

const topic = "Topic";

for (let i = 0; i < 6; i++) {
  const sidenew = document.createElement("div");
  sidenew.className = "side-new";
  let content = `
        <h3 class="topic">
        <a href="/news-list" class="text-white">${topic}</a></h3>
        <img src="${news[i].image}" alt="${news[i].title}">
        <p class="pt-1 first-in-topic" >
        <a href="/news">
        ${news[i].title}</a>
        </p>
        <hr />
        <p class=""><a href="/news">
        ${news[i].title}</a></p>
        <hr />
        <p class=""><a href="/news">
        ${news[i].title}</a></p>
    `;
  if (i > 1) {
    content = `
        <h3 class="topic">        <a href="/news-list" class="text-white">${topic}</a></h3>
</h3>
        <p class="pt-1 first-in-topic"><a href="/news">
        ${news[i].title}</a></p>
        <hr />
        <p class=""><a href="/news">
        ${news[i].title}</a></p>
        <hr />
        <p class=""><a href="/news">
        ${news[i].title}</a></p>
    `;
  }
  sidenew.innerHTML = content;
  sideNewElement.appendChild(sidenew);
}
