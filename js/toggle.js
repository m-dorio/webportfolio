// Hide the contents until the burger menu finishes sliding in from the left
let content = document.getElementById("main")[0];
content.style.visibility = "hidden";

let sidebar = document.getElementsByClassName("sidebar")[0];

let lowerLayerBurger = document.getElementsByClassName("menu-toggler__line")[2];
lowerLayerBurger.addEventListener("animationend", function(evt) {
  content.style.visibility = "visible";
});

// Add click listeners to the menu on the sidebar
document.getElementsByTagName("ul")[0].addEventListener("click", function(evt) {
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