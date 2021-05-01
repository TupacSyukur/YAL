fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
  .then((resp) => resp.json())
  .then((resp) => {
    const favorite = resp.top;
    let toppop = '';
    favorite.forEach((a) => {
      toppop += `
    <div class="col-md-3 p-3">
        <div class="card">
            <img src="${a.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">#${a.rank} ${a.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Episodes : ${a.episodes}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Year : ${a.start_date} - ${a.end_date}</h6>
                <a href="${a.url}" class="btn btn-primary" target="_blank" id="button-details">See Details</a>
            </div>
        </div>
    </div>`;
    });
    const animePop = document.querySelector('.popular-anime');
    animePop.innerHTML = toppop;
  });

fetch('https://api.jikan.moe/v3/top/anime/1/favorite')
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    const favorite = res.top;
    let topfav = '';
    favorite.forEach((data) => {
      topfav += `
    <div class="col-md-3 p-3">
        <div class="card">
            <img src="${data.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">#${data.rank} ${data.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Episodes : ${data.episodes}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Year : ${data.start_date} - ${data.end_date}</h6>
                <a href="${data.url}" class="btn btn-primary" target="_blank" id="button-details">See Details</a>
            </div>
        </div>
    </div>`;
    });
    const animeFav = document.querySelector('.favorite-anime');
    animeFav.innerHTML = topfav;
  });

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', function () {
  const inputKeyword = document.querySelector('#search-input');

  fetch('https://api.jikan.moe/v3/search/anime?q=' + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const animes = response.results;
      let cards = '';
      animes.forEach((a) => {
        cards += showCards(a);
      });
      const animeSearch = document.querySelector('.anime-search');
      animeSearch.innerHTML = cards;
    });
});

function showCards(a) {
  return `
  <div class="col-md-3 p-3">
    <div class="card">
      <img src="${a.image_url}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${a.title}</h5>
          <p class="card-text">${a.synopsis}</p>
          <a href="${a.url}" class="btn btn-primary" target="_blank" id="button-details">See Details</a>
      </div>
    </div>
  </div>`;
}
