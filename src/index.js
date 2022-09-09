import getAPIMovies from './modules/requestAPIMovies.js';
import { totalMovies, renderMovies } from './modules/renderMovies.js';
import displayLikes from './modules/showLikes.js';

import './style.scss';

window.addEventListener('load', async () => {
  const movies = await getAPIMovies();
  renderMovies(movies);
  totalMovies(movies);
});

document.body.addEventListener('click', (e) => {
  if (e.target && e.target.className === 'like-icon') {
    displayLikes(e);
  }
});

export default getAPIMovies;