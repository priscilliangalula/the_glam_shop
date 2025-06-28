const menuhamburger = document.querySelector(".menu")
const navbarre = document.querySelector(".liste")

menuhamburger.addEventListener('click',()=>{
    navbarre.classList.toggle('mobile-menu')
})