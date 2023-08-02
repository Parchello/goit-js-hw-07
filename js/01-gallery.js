import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const container = document.querySelector(".gallery");

function createGallery(arr) {
  return arr
    .map(
      ({ preview, description, original }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

container.insertAdjacentHTML("beforeend", createGallery(galleryItems));
container.addEventListener("click", handlerPictureClick);

function handlerPictureClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }

  const currentPicture = evt.target.dataset.source;
  //   console.log("target", evt.target.dataset);
  //   console.log("picture ID", currentPicture);

  const picture = galleryItems.find(
    ({ original }) => original === currentPicture
  );
  console.log("картинка", picture);

  const instance = basicLightbox.create(`
	<img
      class="gallery__image"
      src="${picture.original}"
     
      alt="${picture.description}"
    />
`);
  instance.show();
}
createGallery(galleryItems);
