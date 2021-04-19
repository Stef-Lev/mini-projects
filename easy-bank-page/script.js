
//Select DOM elements
const toggleButton = document.querySelector('.burger');
const buttonImage = document.querySelector('.button-image');
const toggleMenu = document.querySelector('.menu-bckg');
const menuBlock = document.querySelector('.nav-collapse');


//Animation function
function menuAnimation() {

    if (menuBlock.classList.contains('moved')) {
        buttonImage.src = "./images/icon-close.svg";
        menuBlock.classList.remove("moved");
        toggleMenu.classList.add('show');

    } else {
        buttonImage.src = "./images/icon-hamburger.svg";
        menuBlock.classList.add("moved");
        toggleMenu.classList.remove('show');
    }

}

//Event triggered when the hamburger button is pressed 
toggleButton.addEventListener("click", menuAnimation);

