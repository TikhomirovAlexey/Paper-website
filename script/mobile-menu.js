'use strict';
            
const openMenuButton = document.querySelector('.open-mobaile-menu');
const closeButton = document.querySelector('.close-button');
const mobileMenu = document.querySelector('.mobile-menu');
const bodyEl = document.querySelector('body');

function close() {
    mobileMenu.classList.add('is-hidden');
    bodyEl.classList.remove('overflow-hidden');
}

window.onresize = function() {
    let widthWindow = window.innerWidth;
    if(widthWindow > 510) {
        close();
    }
};

openMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('is-hidden');
    bodyEl.classList.add('overflow-hidden');
});

closeButton.addEventListener('click', () => {
    close();
});