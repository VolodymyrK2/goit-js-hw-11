import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImages, PER_PAGE } from './modules/apiClient';
import { createCollection, renderImages, clearGallery, informs } from './modules/images';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const formEl = document.querySelector('#search-form');
const loadBtnEl = document.querySelector('.load-more');
let searchState = '';
let pageState = 1;

formEl.addEventListener('submit', onSubmit);
loadBtnEl.addEventListener('click', onLoad);
// formEl.addEventListener('submit', scrollPage);
// window.addEventListener('scroll', scrollPage);

function onSubmit(e) {
    e.preventDefault();
    
    const { elements: { searchQuery } } = e.currentTarget;
    const search = searchQuery.value.trim();
    if (search !== searchState) {
        clearGallery();
        loadBtnEl.style.display = 'none';
        searchState = search;
        pageState = 1;
        fetchImages(searchState, pageState);
    }
}    
function onLoad() {
    clearGallery();
    loadBtnEl.style.display = 'none';
    pageState += 1;
    fetchImages(searchState, pageState);
}
 function fetchImages(search, page) {
    getImages(search, page).then((response) => {
        const totalPages = Math.ceil(response.totalHits/PER_PAGE);
        informs(page, totalPages,response.totalHits);
        renderImages(createCollection(response.hits));
        lightbox.refresh();
        
        if (page === totalPages || totalPages===0) {
            loadBtnEl.style.display = 'none';
        } else {
            loadBtnEl.style.display = 'inline-block';
        }
    }).catch(e => {
        console.log(e);
    })
   
}
const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
});
// function scrollPage() {
//     console.log('scroll');
//     const cardHeight = 230;
//     if (document.querySelector(".gallery")
//         .firstElementChild !== null) {
//         const { height: cardHeight } = document
//             .querySelector(".gallery")
//         .firstElementChild.getBoundingClientRect();
//     console.log(cardHeight);
//          window.scrollBy({
//             top: cardHeight * 2,
//             behavior: "smooth",
//         })
//     }
//     console.log('scroll');
//         window.scrollBy({
//             top: cardHeight * 2,
//             behavior: "smooth",
//         })
    
// }