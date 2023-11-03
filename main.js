const show = document.querySelector('.content');
const bg = document.querySelector('.bg');
const closeIcon = document.querySelector('.close');

function modalHidden() {
    show.style.display = 'none';
}

setTimeout(() => {
    show.classList.add('is-show');
}, 800);

closeIcon.addEventListener('click', modalHidden);
bg.addEventListener('click', modalHidden);