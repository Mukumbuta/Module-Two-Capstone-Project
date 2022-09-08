import getAPIMovies from './modules/requestAPIMovies.js';
import './style.scss';

window.addEventListener('load', () => {
  getAPIMovies();
});