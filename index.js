// navbar toggling
const navbarShowBtn = document.querySelector(".navbar-show-btn");
const navbarCollapseDiv = document.querySelector(".navbar-collapse");
const navbarHideBtn = document.querySelector(".navbar-hide-btn");

// const btnCotainer = document.querySelector("navbar-nav");
// const btns = document.querySelector("btn");

// //NAVBAR Item

// for (let i = 0; i < btns.lenght; i++) {
//   btns[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("active");
//     current[0].classList = current[0].className.replace("active");
//     this.className += "active";
//   });
// }
navbarShowBtn.addEventListener("click", function () {
  navbarCollapseDiv.classList.add("navbar-show");
});
navbarHideBtn.addEventListener("click", function () {
  navbarCollapseDiv.classList.remove("navbar-show");
});

// changing search icon image on window resize
window.addEventListener("resize", changeSearchIcon);
function changeSearchIcon() {
  let winSize = window.matchMedia("(min-width: 1200px)");
  if (winSize.matches) {
    document.querySelector(".search-icon img").src =
      "./assets/images/search-icon.png";
  } else {
    document.querySelector(".search-icon img").src =
      "./assets/images/search-icon-dark.png";
  }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
