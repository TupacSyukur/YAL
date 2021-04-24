$.ajax({
  url: 'https://api.jikan.moe/v3/top/anime/1/favorite',
  type: 'get',
  dataType: 'json',
  success: function (result) {
    let anime = result.top;
    $.each(anime, function (i, data) {
      $('#favorite-anime').append(`
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
              </div>
          `);
    });
  },
});

$.ajax({
  url: 'https://api.jikan.moe/v3/top/anime/1/bypopularity',
  type: 'get',
  dataType: 'json',
  success: function (result) {
    let anime = result.top;
    $.each(anime, function (i, data) {
      $('#popular-anime').append(`
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
                </div>
            `);
    });
  },
});

$('#search-button').on('click', function () {
  $('#anime-search').empty();
  $.ajax({
    url: 'https://api.jikan.moe/v3/search/anime',
    type: 'get',
    dataType: 'json',
    data: {
      q: $('#search-input').val(),
    },
    success: function (result) {
      let anime = result.results;
      $.each(anime, function (i, data) {
        $('#anime-search').append(`
        <div class="col-md-3 p-3">
          <div class="card">
            <img src="${data.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.synopsis}</p>
                <a href="${data.url}" class="btn btn-primary" target="_blank" id="button-details">See Details</a>
            </div>
          </div>
        </div>
        `);
      });
    },
  });
  $('#search-input').val('');
});

// $('#button-details').on('click', function () {
//   $('#anime-details').empty();
//   $.ajax({
//     url: 'https://api.jikan.moe/v3/search/anime',
//     type: 'get',
//     dataType: 'json',
//     data: {
//       q: $('#search-input').val(),
//     },
//     success: function (result) {
//       let anime = result.results;
//       let animeID = anime.mal_id;
//       console.log(anime);
//       $.ajax({
//         url: `https://api.jikan.moe/v3/anime/${animeID}`,
//         type: 'get',
//         dataType: 'json',
//         success: function (out) {
//           $.each(out, function (i, detail) {
//             $('#anime-details'),
//               append(`
//               <div class="col-md-5">
//                 <img src="${detail.image_url}">
//               </div>
//               <div class="col-md-7 text-center">
//                 <h3>${detail.title}</h3>
//                 <p><b>Status : ${detail.status}</b></p>
//                 <p>Episodes : ${detail.episodes}</p>
//                 <p>Rank #${detail.rank}</p>
//                 <p>Rating : ${detail.rating}</p>
//                 <p><b>${detail.score}</b></p>
//                 <h5>Synopsis</h5>
//                 <p>${detail.synopsis}</p>
//               </div>
//               `);
//           });
//         },
//       });
//     },
//   });
// });
