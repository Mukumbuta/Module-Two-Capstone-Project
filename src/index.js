import './style.scss';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Welcome to our Capstone API Project';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());