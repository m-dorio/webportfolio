function swapImageWithVideo() {
    let videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';

    const carouselHtml = document.getElementById('carouselExampleCaptions').outerHTML;
    const innerContent = document.querySelector('.inner-content._right');
    innerContent.innerHTML = carouselHtml;

    // Change the class from d-none to d-block
    const carousel = document.getElementById('carouselExampleCaptions');
    carousel.classList.remove('d-none');
    carousel.classList.add('d-block');
}
document.getElementById('thumbnail').addEventListener('click', swapImageWithVideo);

setdate = () => {
    // Get the current date
    const currentDate = new Date();
    // Get the elements by their IDs
    const dateSpan = document.getElementById('dateToday');
    // Set the content of the span to the current date
    dateSpan.textContent = currentDate.getFullYear();
}
setdate();

replaceDate = () => {
    const updatedDates = document.querySelectorAll(".w-update");
    const currentDate = new Date();
    const lastModifiedDate = new Date(document.lastModified);

    const elapsedTime = currentDate - lastModifiedDate;
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const formattedElapsedTime = days > 0 ? `${days} day${days > 1 ? 's' : ''} and ${hours} hour${hours > 1 ? 's' : ''}` : `${hours} hour${hours > 1 ? 's' : ''}`;

    for (let i = 0; i < updatedDates.length; i++) {
        updatedDates[i].textContent = "Last update: " + formattedElapsedTime + " ago";
    }
}

replaceDate();


let menuIcon = document.querySelector('#menu-icon');
let myNavbar = document.querySelector('.my-navbar');

menuIcon.onclick = () => {
    myNavbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let coll = document.getElementsByClassName("collapsible");
let i;
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        /* ACTIVE BUTTONS */
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('fixed', window.scrollY > 100);
    menuIcon.classList.remove('bi-list');
    myNavbar.classList.remove('active');
};

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


window.addEventListener("scroll", function () {
    let buttony = document.getElementById("pageButton");
    if (window.pageYOffset > 300) {
        buttony.classList.add('d-block');
        buttony.classList.remove('d-none');
    } else {
        buttony.classList.add('d-none');
        buttony.classList.remove('d-block');
    }
});


toggleBtn = () => {
    const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
    const themeToggleBtn = document.querySelector("[data-theme-btn]");
    themeToggleBtn.addEventListener("click", function () {

        elemToggleFunc(themeToggleBtn);

        if (themeToggleBtn.classList.contains("active")) {
            document.body.classList.remove("dark_theme");
            document.body.classList.add("light_theme");

            localStorage.setItem("theme", "light_theme");
        } else {
            document.body.classList.add("dark_theme");
            document.body.classList.remove("light_theme");

            localStorage.setItem("theme", "dark_theme");
        }

    });

    /**
     * check & apply last time selected theme from localStorage
     */

    if (localStorage.getItem("theme") === "light_theme") {
        themeToggleBtn.classList.add("active");
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");
    } else {
        themeToggleBtn.classList.remove("active");
        document.body.classList.remove("light_theme");
        document.body.classList.add("dark_theme");
    }
}
toggleBtn();


// Hide the contents until the burger menu finishes sliding in from the left
let content = document.getElementById("main")[0];
content.style.visibility = "hidden";

let sidebar = document.getElementsByClassName("sidebar")[0];

let lowerLayerBurger = document.getElementsByClassName("menu-toggler__line")[2];
lowerLayerBurger.addEventListener("animationend", function (evt) {
    content.style.visibility = "visible";
});

menuToggle = () => {

    // Add click listeners to the menu on the sidebar
    document.getElementsByTagName("ul")[0].addEventListener("click", function (evt) {
        // when a menu item is clicked hide the sidebar by unchecking the input
        document.getElementById("menuToggler").checked = false;

        function handleTransitionEnd(transitionEvent) {

            // show the correct content based on the target of the menu item
            // first hide everything
            let contentDivs = document.querySelectorAll("#main-content div");
            for (let i = 0; i < contentDivs.length; i++) {
                contentDivs[i].style.display = "none";
            }

            // show the correct div
            let contentId = evt.srcElement.hash;
            let contentDiv = document.getElementById(contentId.substr(1));
            contentDiv.style.display = "inherit";

            // remove listener
            sidebar.removeEventListener("transitionend", handleTransitionEnd);
        }

        sidebar.addEventListener("transitionend", handleTransitionEnd);
    });
}
menuToggle();