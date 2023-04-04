import { createCollection, informs, renderImages} from "./images";
import { PER_PAGE, getImages } from './apiClient';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loadBtnEl = document.querySelector('.load-more');
const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
});
export default function loadImages(search, page) {
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