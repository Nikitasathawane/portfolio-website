
// toggle icon navbar//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = ()=>{

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


}
//scroll section actice link//

let sections = document.getElementById('section');
let navLinks = document.getElementById('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classlist.remove('active');
            document.getElementById('header nav a [href*='+ id +']').classList.add('active');


        });
      };
    });

    // sticky Navbar //

    let header = document.getElementById('header');

    header.classList.toggle('sticky', window.scrollY > 100);
      
   //remove toggle icon and navbar when click link (scroll)//
   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');

};

    // scroll reveal //

    ScrollReveal ({
        reset:true,
        distance: '80px',
        duration: 2000,
        delay:200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});

    ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom'});

    ScrollReveal().reveal('.home-content h1, .about-img' ,{ origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'});

  // typed js//

  const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer'],
    typeSpeed : 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

  });


//navlinks//
const navlinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});













