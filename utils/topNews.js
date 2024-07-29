import { news } from "../data.js";

const topPostElement = document.getElementById("top-post");
const subPostElement = document.getElementById("sub-posts");

// Hiển thị bài viết chính
const topPost = news[0];
topPostElement.innerHTML = `
      <img src="${topPost.image}" alt="${topPost.title}">
      <h2>
      <a href="/news">
      ${topPost.title}</a></h2>
      <p>${topPost.summary}</p>
  `;

// Hiển thị các bài viết phụ
news.slice(1).forEach((post) => {
  const subPost = document.createElement("div");
  subPost.className = "sub-post";
  subPost.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <a href="/news">${post.title}</a>
    `;
  subPostElement.appendChild(subPost);
});
