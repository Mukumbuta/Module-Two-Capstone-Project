import getAPIMovies from './requestAPIMovies.js';
import likeIcon from '../images/red-heart-icon.png';

const popComment = async (event) => {
  const movies = await getAPIMovies();
  const container = document.querySelector('.popup');
  const overlay = document.createElement('div');
  const span = document.createElement('span');
  span.innerHTML = '<span class="close-icon">&times;</span>';
  const popContent = document.createElement('div');
  movies.forEach((movie) => {
    if (parseInt(event, 10) === movie.id) {
      popContent.innerHTML = `<div class="popContent">
            <div class="col">
                <img class="movie-image" src="${movie.image.original}" alt="Movie Poster">
            </div>
            <div class="wrapper">
                <div class="col movie-summary">
                    <p><b>${movie.name}</b> : ${movie.summary}</p>
                </div>
                    <ul class ="genres">
                        <li class "genre1">${movie.genres[0]}</li>
                        <li class "genre2">${movie.genres[1]}</li>
                        <li class "genre3">${movie.genres[2]}</li>
                    </ul>
                <div class="col movies-likes">
                    <div><img src="${likeIcon}" class="like-icon" alt="Red Heart Icon">
                    <p class="likes-holder">${movie.rating.average}</p></div>
                    <div class ="comments"><p>Comments (${movie.rating.average})</p></div>
                </div>
                <form action="https://formspree.io/f/mzboldye" method="post" id="form">
                <p>Add a comment</p>
                <ul>
                    <li><input type = "text" id="name"  name="user_name" maxlength = "30" placeholder="Enter Your name"  required></li>
                    <li><input type="email" id="email" name="user_email" placeholder="Enter your email" required></li>
                    <li><textarea name="message" id="msg" cols="30" rows="10" maxlength = "500" placeholder="Write your comment here" required></textarea></li>
                    <button type="button" class="btn btn-secondary comment-btn send"> Send</button>
                </ul>
            </form>
            </div>
        </div>


            `;
    }
  });

  overlay.classList.add('pop');
  overlay.style.display = 'block';
  overlay.appendChild(popContent);
  overlay.appendChild(span);
  container.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  document.querySelector('.movie-section').style.filter = 'blur(3px)';
  document.querySelector('.close-icon').addEventListener('click', () => {
    container.removeChild(overlay);
    document.body.style.overflow = 'auto';
    document.querySelector('.movie-section').style.filter = 'blur(0px)';
  });
};

export default popComment;
