const modal = document.querySelector('#myModal');
const btn = document.querySelector('.btn-order');
const heroBtn = document.querySelector('.hero-btn');
const headerButn = document.querySelector('.header-butn');
const headerBbtnmobile = document.querySelector('.menu-list-btn');
const btnClose = document.querySelector('.myBtnClose');
modal.style.display = 'none';

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

heroBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

headerButn.addEventListener('click', () => {
  modal.style.display = 'block';
});

headerBbtnmobile.addEventListener('click', () => {
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

const modalItems = document.querySelectorAll('li.modal-item');

modalItems.forEach(function (item) {
  item.addEventListener('click', function () {
    const firstSvgElement = this.querySelector('svg.modal-checkbox-icon1');
    const secondSvgElement = this.querySelector('svg.modal-checkbox-icon');

    if (secondSvgElement.style.display !== 'none') {
      secondSvgElement.style.display = 'none';
      firstSvgElement.style.display = 'inline-block';
    } else {
      secondSvgElement.style.display = 'inline-block';
      firstSvgElement.style.display = 'none';
    }
  });
});
