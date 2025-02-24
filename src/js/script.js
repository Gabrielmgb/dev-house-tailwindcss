const menuMobile = document.getElementById("menu")
const btnClose = document.getElementById("btn-close")
const btnOpen = document.getElementById("btn-open")


function openMenu(){
   menuMobile.classList.remove("hidden")
   menuMobile.classList.add("flex")
}

function closeMenu(){
    menuMobile.classList.remove("flex")
    menuMobile.classList.add("hidden")
}