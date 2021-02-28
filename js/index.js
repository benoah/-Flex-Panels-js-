// choosing all the panels
const panels = document.querySelectorAll(".panel");

//
function toggleOpen() {
  // console.log("Hello");
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

// we are taking each panel and looping over them and add event and run the toogle function when its
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
