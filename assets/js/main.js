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

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    loop: true,
    backDelay: 900,
    backSpeed: 30,
    smartBackspace: true,
    typeSpeed: 40,
    startDelay: 2000,
  });

const flipped = document.querySelector(".arrow-right");
const matrix = new DOMMatrixReadOnly();
const flippedMatrix = matrix.flipX();
flipped.setAttribute("transform", flippedMatrix.toString());
