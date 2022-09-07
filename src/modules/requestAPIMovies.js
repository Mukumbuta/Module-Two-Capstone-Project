import renderMovies from './renderMovies.js';

const getAPIMovies = async () => {
  const apiURL = 'https://api.tvmaze.com/shows';
  const request = new Request(apiURL);
  const response = await fetch(request);
  const textMovieData = await response.text();
  const jsonMovieData = JSON.parse(textMovieData);

  renderMovies(jsonMovieData);
};

export default { getAPIMovies };