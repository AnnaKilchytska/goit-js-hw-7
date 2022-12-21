import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);
const galleryMarkup = galleryItems.map((item) => {
    return `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`
}).join("");

galleryEl.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true, 
    captionSelector: "img", 
    captionType: "attr", 
    captionsData: "alt", 
    captionPosition: "bottom", 
    captionDelay: 250, 
});


