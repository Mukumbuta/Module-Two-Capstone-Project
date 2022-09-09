import getAPIMovies from './modules/requestAPIMovies.js';
import renderMovies from './modules/renderMovies.js';
import './style.scss';

window.addEventListener('load', async () => {
  const movies = await getAPIMovies();
  renderMovies(movies);
  // getComments();
});
