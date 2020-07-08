window.onload = init;

function init() {
  document.getElementById("button").onclick = addMyClass;
  $(".splash").addClass("active");
}

function addMyClass() {
  if (this.classList.contains("open")) {
    this.className = "";
    document.getElementById("m").className = "mobile-menu";
  } else {
    this.className = "open";
    document.getElementById("m").className = "mobile-menu open";
  }
}
