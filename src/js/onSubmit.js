import loadImages from "./loadImages";
import { clearGallery } from "./images";

const loadBtnEl = document.querySelector('.load-more');

export default function onSubmit(e) {
    e.preventDefault();
    const { elements: { searchQuery } } = e.currentTarget;
    const search = searchQuery.value.trim();
    if (search !== '') {
        clearGallery();
        loadBtnEl.style.display = 'none';
        loadBtnEl.dataset.page = 1;
        loadBtnEl.dataset.search = search;
        loadImages(search, 1);
    }
}    