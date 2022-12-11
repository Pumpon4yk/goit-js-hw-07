import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryRefs = document.querySelector(".gallery");
const gallery = createGallery(galleryItems);

galleryRefs.insertAdjacentHTML("beforeend", gallery)
galleryRefs.addEventListener("click", onModalImg);

function createGallery(arrey) {
    return arrey.map(({ preview, original, description}) =>
        `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    onclick="return false;"
    />
    </a>
    </div>
    `).join("");
}

function onModalImg(evt) {

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" 
    width="800" 
    height="600">
    `);

    instance.show();

    document.addEventListener("keydown", closeModal)

    function closeModal(evt){
    
    if (evt.code !== "Escape") {
        return;
    }
        instance.close();
    
        return document.removeEventListener("keydown", closeModal)
    };
}