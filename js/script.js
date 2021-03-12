
// slide out nav menu
const nav_button = document.querySelector(".nav_button")
const nav_menu = document.querySelector(".nav_slider_menu")

function toggle_nav_menu(){
    nav_menu.classList.toggle("nav_slider_menu_active")
    sub_service_menu.classList.remove("sub_service_menu_active")
}

nav_button.addEventListener("click", toggle_nav_menu)

// slide out service menu
const sub_service_button = document.querySelector(".sub_service_toggle")
const sub_service_menu = document.querySelector(".sub_service_menu")

function toggle_sub_service_menu(){
    sub_service_menu.classList.toggle("sub_service_menu_active")
}
    
sub_service_button.addEventListener("click", toggle_sub_service_menu)

// close sub_service_menu when switching to desktop
var query = window.matchMedia("(max-width: 500px)")

query.addListener(()=>{
    if (query.matches){
        sub_service_menu.classList.remove("sub_service_menu_active")
    }
})