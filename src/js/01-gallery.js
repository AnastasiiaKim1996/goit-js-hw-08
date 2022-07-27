//  - import -  //
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// --- Gallery  ---//

console.log(galleryItems);

const documentGallery = document.querySelector('.gallery');

function createGalleryItems(galleryItems) {
  return galleryItems.reduce(
    (acc, item) =>
      acc +
      ` <div class="gallery__item">
             <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`,
    ''
  );
}

const createLi = createGalleryItems(galleryItems);
documentGallery.insertAdjacentHTML('beforeend', createLi);

// // --- Using the standalone variant SimpleLightbox gallery ---//

new SimpleLightbox('.gallery a');
