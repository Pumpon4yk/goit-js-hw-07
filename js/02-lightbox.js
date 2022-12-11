import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRefs = document.querySelector(".gallery");
const gallery = createGallery(galleryItems);

galleryRefs.insertAdjacentHTML("beforeend", gallery)

function createGallery(arrey) {
    return arrey.map(({preview, original, description}) =>
    `
    <li>
    <a class="gallery__item" 
    href="${original}"
    onclick="return false;">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}"/>
    </a>
    </li>
    `).join("");
}

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});

lightbox.on('show.simplelightbox')


