/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    if (header) {  // Check if header exists
        if (window.scrollY >= 50) {
            header.classList.add('blur-header');
        } else {
            header.classList.remove('blur-header');
        }
    }
};
window.addEventListener('scroll', blurHeader);


/*=============== GSAP ANIMATION ===============*/
gsap.from('.home_img_1',5,{opacity:0, x:400})
gsap.from('.home_img_6', 1.5, {opacity: 0, y: 200, delay: .1, ease: 'back.out(1.5)'});
gsap.from('.home_img_3', 1.5, {opacity: 0, y: 400, delay: .3, ease: 'back.out(1.5)'});
gsap.from('.home_img_5', 1.5, {opacity: 0, y: 400, delay: .5, ease: 'back.out(1.5)'});
gsap.from('.home_img_2', 1.5, {opacity: 0, y: 400, delay: .8, ease: 'back.out(1.5)'});
gsap.from('.home_img_4', 1.5, {opacity: 0, y: 200, delay: 1.8, ease: 'back.out(1.5)'});
gsap.from('.home_data', 1.5, {opacity: 0, y: -100, delay: 2.5, ease: 'back.out(1.5)'});
gsap.from('.home_lant_1', 1.5, {opacity: 0, x: 70, delay: 3, ease: 'back.out(1.5)'});
gsap.from('.home_lant_2', 1.5, {opacity: 0, x: -70, delay: 3.5, ease: 'back.out(1.5)'});


/*=============== SAKURA ANIMATION ===============*/

const sakura = new Sakura(".sakura-petals")