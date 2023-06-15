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
                src = "${preview}"
                class="gallery__image"
                data-source="${original}"
                alt="${description}";>
        </a></li>`
    )
    .join(""));
};

const optionsModalWindow = (evt) => {
  const isImageClick = evt.target.classList.contains("gallery__image");
  const imgInModalWindow = evt.target.dataset.source;
  if (!isImageClick) {
    return;
  }

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${imgInModalWindow}">`
  );

  function useEscape(evt) {
    console.log(evt.code);
    if (evt.code === "Escape") {
      instance.close();
      galleryRef.removeEventListener("keydown", useEscape);
    }
  }

  instance.show();
  galleryRef.addEventListener("keydown", useEscape);
};

createImg();
galleryRef.addEventListener("click", optionsModalWindow);
