
const nav_button = document.querySelector(".nav_button")
const nav_menu = document.querySelector(".nav_slider_menu")
const sub_service_button = document.querySelector(".sub_service_toggle")
const sub_service_menu = document.querySelector(".sub_service_menu")

function toggle_nav_menu(){
    nav_menu.classList.toggle("nav_slider_menu_active")
}

nav_button.addEventListener("click", toggle_nav_menu)

function toggle_sub_service_menu(){
    sub_service_menu.classList.toggle("sub_service_menu_active")
}

sub_service_button.addEventListener("click", toggle_sub_service_menu)