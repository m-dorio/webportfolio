let menuIcon = document.querySelector('#menu-icon');
let myNavbar = document.querySelector('.my-navbar');

menuIcon.onclick = () => {
       
    menuIcon.classList.toggle('bi bi-list');
    myNavbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        /* ACTIVE BUTTONS */
        if (top >= offset && top < offset + height){
            navLinks.forEach(links => { 
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });
        };
    });   

    let header = document.querySelector('header');
    header.classList.toggle('fixed', window.scrollY > 100);

    menuIcon.classList.remove('bi-list');
    myNavbar.classList.remove('active');

};

const typed = new Typed('.typewriting-text', {
    strings: [
    '“Believe you can and you\'re halfway there.” - Theodore Roosevelt',
    '“Be brave to stand for what you believe in, even if you stand alone.” - Roy T. Bennett, The Light in the Heart.',
],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1200,
    loop: true
});

$(function() {
    $('.luminaire:nth-child(2n)').addClass('on');
    $('.luminaire').on('click', function() {
      $(this).toggleClass('on');
    });
});

$(function() {
    $('.luminaire-flex:nth-child(2n)').addClass('on');
    $('.luminaire-flex').on('click', function() {
      $(this).toggleClass('on');
    });
});
