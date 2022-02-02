import fetchFavoritesMovies from '../api/fetchFavoritesMovies';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import refs from '../ollRefs/refs';

import arrayGenres from './arrayGenres';

import preloader from './preloader';

const container = document.querySelector('.tui-pagination');

let pagination = new Pagination(
  container, {
  totalItems: 0,
    page: '1',
  }
);
const page = pagination.getCurrentPage();

fetchFavoritesMovies(page).then(movies => {
  renderFavoritesMovies(movies)
  pagination.reset(movies.total_pages);
 
})

pagination.on('afterMove', eventFavoritePagination);
 
function eventFavoritePagination(event) {
    console.log(event.page);
    fetchFavoritesMovies(event.page).then(movies => {
      resetFavoritesMovies();
      renderFavoritesMovies(movies);
      console.log(movies.results);
    }
    )
  }

function getGenres(arrayId) {
  const arr = [];
  for (const value of arrayGenres) {
    if (arrayId.includes(value.id)) {
      arr.push(value.name);
    }
  }
  if (arrayId.length > 2) {
    arr.splice(2, arr.length - 2, 'Other');
  }

  return arr.join(', ');
}

export function renderGallery(movies) {
  return movies
    .map(({ id, poster_path, title, release_date, genre_ids }) => {
      const poster = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://db4films.com/assets/img/cover.jpg';
      const releaseYear = release_date ? release_date.split('-')[0] : 'Unknown';
      const checkGenres = genre_ids ? getGenres(genre_ids) : 'Unknown';
      return `
      <li class='list_film_item' id=${id}>
        <img class="list_film_image" style = "border-radius: 5px" src=${poster} alt='Обложка фильма' loading='lazy' />
        <div class='info'>
            <p class='info-title'>
              <b>${title}</b>
            </p>
            <p class='info-date'>
              <span>${checkGenres} | ${releaseYear}</span>
            </p>
        </div>
      </li>
      `;
    })
    .join('');
}

function renderFavoritesMovies(movies) {
  
  refs.gallery.insertAdjacentHTML('beforeend', renderGallery(movies.results));
  
};

// fetchFavoritesMovies().then(data => {
//   preloader();
//   refs.gallery.insertAdjacentHTML('beforeend', renderGallery(data.results));
  
// });
function resetFavoritesMovies() {
  refs.gallery.innerHTML = '';
}



function returnToHome(e) {
  e.preventDefault();

  if (refs.home.classList.contains('active')) {
    return;
  }

  refs.home.classList.add('active');
  refs.library.classList.remove('active');
 
  fetchFavoritesMovies(page).then(movies => {
    preloader();
    refs.gallery.innerHTML = '';
        refs.gallery.insertAdjacentHTML('beforeend', renderGallery(movies.results));
  });
}

refs.home.addEventListener('click', returnToHome);

