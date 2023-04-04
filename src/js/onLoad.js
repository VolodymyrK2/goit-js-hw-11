import loadImages from "./loadImages";
const loadBtnEl = document.querySelector('.load-more');
export default function onLoad() {
    loadBtnEl.style.display = 'none';
    loadBtnEl.dataset.page = Number(loadBtnEl.dataset.page)+ 1;
    const page = Number(loadBtnEl.dataset.page);
    const search = loadBtnEl.dataset.search;
    loadImages(search, page);
}