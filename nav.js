const toogle_button = document.getElementsByClassName('dropdown-button')[0];
const toogle_menu =  document.getElementsByClassName('navbar-links')[0];

toogle_button.addEventListener('click', ()=>{
    toogle_menu.classList.add("active");
})