const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".cards", {
    ...scrollRevealOption,
    interval: 500,
  });
  

  const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar-position");
  if (window.scrollY > 800) {
      navbar.classList.add("toSticky")
  } else{
      navbar.classList.remove("toSticky");
  }
});
