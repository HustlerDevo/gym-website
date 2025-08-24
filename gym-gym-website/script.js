let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')



menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


/* Typing text code */

/* const typed = new Typed('#element', {
    strings: ['<i>First</i> sentence', '&amp; second sentence.'],
    typeSpeed: 50
}); */

const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weight Lifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    BackDelay: 1000,
    loop: true
});

