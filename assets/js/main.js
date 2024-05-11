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


  //Counter
  let progressBarList = document.querySelectorAll(".circular-progress");

let valueContainerList = document.querySelectorAll(".value-container");

let speed = 50;
let startAnimation = false;

window.addEventListener("scroll", () => {
  if (!startAnimation && isElementInViewport(progressBarList[0])) {
    startAnimation = true;
    progressBarList.forEach((progressBar, index) => {
      let progressValue = 0;
      let progressEndValue = parseInt(valueContainerList[index].getAttribute("dataset"));

      let progress = setInterval(() => {
        progressValue++;
        valueContainerList[index].textContent = `${progressValue}`;
        progressBar.style.background = `conic-gradient(
          #113247 ${progressValue * 3.6}deg,
          #cadcff ${progressValue * 3.6}deg
        )`;

        if (progressValue >= progressEndValue) {
          clearInterval(progress);
        }
      }, speed);
    });
  }
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
