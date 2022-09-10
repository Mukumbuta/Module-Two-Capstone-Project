import getAPIMovies from './modules/requestAPIMovies.js';
import { totalMovies, renderMovies } from './modules/renderMovies.js';
import {
  postLikes, getLikes, displayLikes, showLikes,
} from './modules/showLikes.js';
import './style.scss';

window.addEventListener('load', async () => {
  const movies = await getAPIMovies();
  renderMovies(movies);
  totalMovies(movies);

  const movieContainer = document.querySelectorAll('.movie-details');
  movieContainer.forEach((movie) => {
    showLikes(movie);
  });
});

document.body.addEventListener('click', (e) => {
  if (e.target && e.target.className === 'like-icon') {
    postLikes('MyuCA54Yzgvtk8JjzlyR', e.target);
    getLikes('MyuCA54Yzgvtk8JjzlyR');
    displayLikes(e);
  }
});

export default getAPIMovies;