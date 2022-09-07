import likeIcon from '../images/red-heart-icon.png';

const renderMovies = (movies) => {
  movies.forEach((movie) => {
    const movieDetails = document.querySelector('.row');

    movieDetails.innerHTML += `<div class="movie-details">
                                        <div class="col">
                                            <img class="movie-poster" src="${movie.image.original}" alt="Movie Poster">
                                        </div>
                                        <div class="row">
                                            <div class="col movie-title">
                                                <p>${movie.name}</p>
                                            </div>
                                            <div class="col movies-likes">
                                                <img src="${likeIcon}" class="like-icon" alt="Red Heart Icon">
                                                <p class="likes-holder">${movie.rating.average}</p>
                                            </div> 
                                        </div>
                                    </div>`;
  });
};

export default { renderMovies };