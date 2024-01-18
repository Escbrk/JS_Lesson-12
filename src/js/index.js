import axios from 'axios';

console.log(999)

//* api key: abeb1fead2de446d8cf3c831a721e668

const api = axios.create({
  params: {
    apiKey: 'abeb1fead2de446d8cf3c831a721e668',
    // baseURL: 'https://qwe.com',
    language: 'ru',
  },
});

api.get('https://qweqwe.com');
api.post('aqwew')
fetch('https://newsapi.org/v2').then(console.log)

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

  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

//?============================
console.log(123)
