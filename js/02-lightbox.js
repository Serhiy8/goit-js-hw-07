import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector("ul.gallery");

const createImg = () => {
  return (galleryRef.innerHTML = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}" onclick="return false";>
            <img 
              class="gallery__image"
              src = "${preview}"
              alt="${description}";>
        </a></li>`
    )
    .join(""));
};
createImg();

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

gallery.on("show.simplelightbox");
