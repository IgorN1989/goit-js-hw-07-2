import { galleryItems } from "./gallery-items.js";

const bodyRef = document.querySelector("body");
const galleryRef = document.querySelector(".gallery");
let instance = {};

galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
galleryRef.addEventListener("click", onImageClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" alt="${evt.target.alt}" width="800" height="600">`,
    {
      // closable: false,
      onShow: () => {
        bodyRef.style.overflow = "hidden";
        bodyRef.addEventListener("keydown", onEscapeClick);
      },
      onClose: () => {
        bodyRef.style.overflow = "";
        bodyRef.removeEventListener("keydown", onEscapeClick);
      },
    }
  );
  instance.show();
}

function onEscapeClick(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}
