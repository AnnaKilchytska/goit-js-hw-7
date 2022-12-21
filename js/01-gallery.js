import { galleryItems } from './gallery-items.js';
// Change code below this line




console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);
const galleryMarkup = galleryItems.map((item) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
}).join("");

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onGalleryClick)

function onGalleryClick(evt) {
    evt.preventDefault();
    console.dir(evt.target.dataset.source);

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `, { closable: true, onShow: (instance) => console.log(instance) })

    instance.show()
}
