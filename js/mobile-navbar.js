const menu = document.getElementsByClassName('mobile-menu');

function toggleMenu(){
const nav = document.getElementsByClassName('navbar-content');
navigator.classList.toggle('active')

}

menu.addEventListener('click', toggleMenu)