import * as flsFunctions from "./modules/functions.js"
// import { Modal } from '../js/libs/modal.js'
// import { Accordion } from '../js/libs/accordion.js'
// import * as noUiSlider from 'nouislider'
import fslightbox from "fslightbox"
import { classBodyMedia } from "./libs/classBodyWidth.js"
import { animOnScroll } from "./libs/animOnScroll.js"
import Swiper, { Navigation, Pagination } from "swiper"
Swiper.use([Navigation, Pagination])


flsFunctions.isWebP()
classBodyMedia()
animOnScroll()
// Accordion()

// const swiper = new Swiper('.swiper', {});

// const modal = new Modal({})


// Range slider
// const rangeSlider = document.getElementById('range-slider');

// if (rangeSlider) {
// 	noUiSlider.create(rangeSlider, {
//     start: [500, 999999],
// 		connect: true,
// 		step: 1,
//     range: {
// 			'min': [500],
// 			'max': [999999]
//     }
// 	});

// 	const input0 = document.getElementById('input-0');
// 	const input1 = document.getElementById('input-1');
// 	const inputs = [input0, input1];

// 	rangeSlider.noUiSlider.on('update', function(values, handle){
// 		inputs[handle].value = Math.round(values[handle]);
// 	});

// 	const setRangeSlider = (i, value) => {
// 		let arr = [null, null];
// 		arr[i] = value;

// 		console.log(arr);

// 		rangeSlider.noUiSlider.set(arr);
// 	};

// 	inputs.forEach((el, index) => {
// 		el.addEventListener('change', (e) => {
// 			console.log(index);
// 			setRangeSlider(index, e.currentTarget.value);
// 		});
// 	});
// }
// /Range slider

// =============================
// document.addEventListener('DOMContentLoaded', () => {

// 	let mySwiper = new Swiper('.slider-block', {
// 		slidesPerView: 1,
// 	})
// 	const sliderNavItems = document.querySelectorAll('.slider-nav__item');
// 	const sliderNav = document.querySelector('.slider-nav');

// 	sliderNavItems.forEach((el, index) => {
// 		el.setAttribute('data-index', index);

// 		el.addEventListener('click', (e) => {
// 			const index = parseInt(e.currentTarget.dataset.index);
// 			console.log(index)
// 			mySwiper.slideTo(index);
// 		});
// 	});
// })
// =============================



// Gallery



// Gallery

const toggle = document.querySelector('.toggle')
const menuList = document.querySelector('.menu-list')

toggle.addEventListener('click', function () {
    toggle.classList.toggle('--active')
    menuList.classList.toggle('--active')
})