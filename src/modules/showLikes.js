const displayLikes = (event) => {
    const iconID = (event.target.id).split('like-movie').slice(1);
    const targetIcon = document.getElementById(`likes-holder${iconID}`);
    targetIcon.innerHTML.split(' ');
    document.getElementById(`likes-holder${iconID}`).innerHTML = `${(parseInt(targetIcon.innerText[0], 10)) + 1} Likes`;
}

export default displayLikes;