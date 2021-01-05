var menuButton = document.getElementById("open-close-menu");
var menu = document.getElementById("nav");


menuButton.addEventListener('click', function() {
    if(menu.style.visibility == "visible"){
        menu.style.visibility = "hidden";
        menuButton.textContent = "≡";
    } else {
        menu.style.visibility = "visible";
        menuButton.textContent = "☓";
    }
});

function globalOnResize() {
    if (window.innerWidth > 1156) {
        menu.style.visibility = "visible";
        menuButton.textContent = "≡";
    } else if (menuButton.textContent == "≡") {
        menu.style.visibility = "hidden";
    }
}

window.onresize = function () {
    globalOnResize();
    try {
        blogOnResize();
    } catch (e) {

    }
}