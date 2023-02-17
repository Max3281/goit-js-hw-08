// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const imgContainer = document.querySelector('.gallery'); //Выбираю селектор галереи
const imgMarkup = createImgCardMarkup(galleryItems); //Переменная вызова функции создания шаблонов

imgContainer.insertAdjacentHTML('beforeend', imgMarkup); //Созадание разметки

function createImgCardMarkup(galleryItems) {
  const imgCardUnit = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
    .join('');
  return imgCardUnit;
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
