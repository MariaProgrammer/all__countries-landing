// Burger
const burger = document.getElementById('burger');
// const nav = document.getElementById('nav');
const nav = document.querySelector('.nav-burger');

burger.addEventListener("click", () => {
    nav.classList.toggle('nav--active');
    burger.classList.toggle('burger--active');
    document.body.classList.toggle("stop-scroll");    
});

//Modal window

// const btns = document.querySelectorAll('.btn');
// const modalOverlay = document.querySelector('.modal-overlay ');
// const modals = document.querySelectorAll('.modal');
// const close1 = document.querySelector('.button__icon1');
// const close2 = document.querySelector('.button__icon2');

// btns.forEach((el) => {
// 	el.addEventListener('click', (e) => {
// 		let path = e.currentTarget.getAttribute('data-path');

// 		modals.forEach((el) => {
// 			el.classList.remove('modal--visible');
			
// 		});

// 		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
// 		modalOverlay.classList.add('modal-overlay--visible');
// 	});
// });

// modalOverlay.addEventListener('click', (e) => {
// 	console.log(e.target);

// 	if (e.target == modalOverlay) {
// 		modalOverlay.classList.remove('modal-overlay--visible');
// 		  modals.forEach((el) => {
// 			el.classList.remove('modal--visible');
// 		});
// 	} else if (e.target == close1 || e.target == close2) {
// 		modalOverlay.classList.remove('modal-overlay--visible');
// 		  modals.forEach((el) => {
// 			el.classList.remove('modal--visible');

// 	});
// }

	
// 	});
	

// const modal = document.querySelector('.modal-parent');
// // const btn = document.querySelector('.header__btn');
// const btns = document.querySelectorAll('.button');

// // Modal opened

// btns.forEach(btn.addEventListener("click", () => {
//     modal.classList.add('modal-parent--open');
// }))

// // Modal closed
// modal.querySelector(".modal").addEventListener("click", (e) => {
//     e._isClick = true;

// });

// modal.addEventListener("click", (e) => {
//     if(e._isClick === true) return;
//     modal.classList.remove('modal-parent--open');

// });

// // Modal closed by ESC

// window.addEventListener('keydown', (e) => {
//     if(e.key === 'Escape') {
//         modal.classList.remove('modal-parent--open');
//     }
// });