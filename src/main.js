const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.querySelector('.myBtnClose');

modal.style.display = 'none';

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

span.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
