import { Notify } from 'notiflix/build/notiflix-notify-aio';
import onSubmit from './js/onSubmit';
import onLoad from './js/onLoad';

const formEl = document.querySelector('#search-form');
const loadBtnEl = document.querySelector('.load-more');

formEl.addEventListener('submit', onSubmit);
loadBtnEl.addEventListener('click', onLoad);




 
