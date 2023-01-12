'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

function closeModalFn() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function showModalFn() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
// console.log(closeModal);

for (let i = 0; i < showModal.length; i++) {
    // console.log(showModal[i]);

    showModal[i].addEventListener('click', showModalFn);
    // console.log(click);
}

closeModal.addEventListener('click', closeModalFn);

overlay.addEventListener('click', closeModalFn);

/**Key Events
 * Key Up- When you lift your finger off a button
 * 
 * Key Press- When a button is Pressed continuosly
 * 
 * KeyDown- Exactly When you Press a button.
 */

// document.addEventListener('keydown', (e) => {
//     console.log(e);
//     if (e.key === 'Escape') {
//         if (modal.classList.contains('hidden') === false) {
//             closeModalFn();
//         }
//     }
// })


/** TO SHORTEN IT */

document.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalFn();
    }
})

// showModal.addEventListener('Btn click', function);
// console.log(showModal);


