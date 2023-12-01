// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const container = document.querySelector(".gallery")

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
// container.addEventListener("click", handleClick)

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `).join("")
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	
});