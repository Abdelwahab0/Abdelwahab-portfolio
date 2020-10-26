/*=== menu show ===*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    };

};
showMenu('nav-toggle', 'nav-menu');

/*=== Active and remove menu ===*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    //Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Hide mobile menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=== scroll reveal animation ===*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

//Home
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__social-icon', { interval: 200 })

//About
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 400 })

//Skills
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

//Work
sr.reveal('.work__img', { interval: 200 });

//Contact
sr.reveal('.contact__input', { interval: 200 }); 