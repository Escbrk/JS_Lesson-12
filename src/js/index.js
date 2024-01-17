import axios from 'axios';

const api = axios.create();

const refs = {
  searchForm: document.querySelector('.search-form'),
  articlesContainer: document.querySelector('.articles'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

function renderArticles(articles = []) {
  const markup = articles.reduce(
    (html, { url, urlToImage, title, author, description }) =>
      html +
      `
<li>
  <a href="${url}" target="_blank" rel="noopener noreferrer">
  <article>
    <img src="${urlToImage}" alt="${title} width="480">
    <h2>${title}</h2>
    <p>Posted by: ${author}</p>
    <div class="description-wrapper">
      <p class="description">${description}</p>
    </div>
  </article></a>
</li>
    `,
    ''
    );
    
    refs.articlesContainer.insertAdjacentHTML('beforeend', markup)
}
