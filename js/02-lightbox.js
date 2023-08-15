import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const optionsForLightBox = {
    captionsData: 'alt',
    captionDelay: 250,
}

new SimpleLightbox('.gallery a', optionsForLightBox);