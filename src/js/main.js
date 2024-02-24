import thumb from '/hand-thumbs-up-fill.svg';
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const element = document.createElement('p');
    element.innerHTML = 'JavaScript працює';
    element.style.fontSize = '28px';
    document.body.appendChild(element);
    const image = document.createElement('img');
    image.src = thumb;
    image.style.width = '48px';
    document.body.appendChild(image);
  }, 2000);
});
