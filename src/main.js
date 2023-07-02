const modal = document.querySelector('#myModal');
const btn = document.querySelector('.btn-order');
const btnClose = document.querySelector('.myBtnClose');
modal.style.display = 'none';

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

btnClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
