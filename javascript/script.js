const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky",window.scrollY > 150);
})

// Event listener for dropdown menu

const menu = document.querySelector("#menu-icon");
const navlinks = document.querySelector(".navlinks");

menu.onclick = ()=>{
    menu.classList.toggle("bx-x");
    navlinks.classList.toggle("open");
}

window.onscroll = ()=>{
    menu.classList.remove("bx-x");
    navlinks.classList.remove("open");
}