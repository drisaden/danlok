function toggleMenu() {
    let menu = document.querySelector(".mobile-menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

function myFunction(x) {
    x.classList.toggle("change");
}