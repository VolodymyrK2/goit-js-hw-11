import { Notify } from 'notiflix/build/notiflix-notify-aio';
export { createCollection, renderImages, clearGallery, informs };
class Image {
    constructor(webformatURL, largeImageURL, tags, likes, views, comments, downloads) {
        this.webformatURL = webformatURL,
        this.largeImageURL = largeImageURL,
        this.tags = tags,
        this.likes = likes,
        this.views = views,
        this.comments = comments,
        this.downloads = downloads    
    };
};
const galleryEl = document.querySelector('.gallery');
const createCollection = (images) => {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    {
     return   new Image(webformatURL, largeImageURL, tags, likes, views, comments, downloads);
    });
}
const renderImages = (collection) => {
        const markup = collection.map((image) => {
        return `<a href="${image.largeImageURL}"><div class="photo-card">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
        <p class="info-item">
        <b>Likes</b><br />${image.likes}
        </p>
        <p class="info-item">
        <b>Views</b><br />${image.views}
        </p>
        <p class="info-item">
        <b>Comments</b><br />${image.comments}
        </p>
        <p class="info-item">
        <b>Downloads</b><br />${image.downloads}
        </p>
        </div>
        </div></a>`
    }).join("");
    galleryEl.insertAdjacentHTML('beforeend', markup);
}
const clearGallery = () => {
    galleryEl.innerHTML = '';
 }
function informs(pageState, totalPages,totalHits) {
    if (totalPages === 0) {
        Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    }
    if (pageState === totalPages&&pageState>1) {
        Notify.failure("We're sorry, but you've reached the end of search results.");
    }
    if (pageState === 1 && totalPages !== 0) {
        Notify.success(`Hooray! We found ${totalHits} images.`);
    }
}