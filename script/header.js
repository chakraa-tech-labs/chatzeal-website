// Header scroll effect
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backdropFilter = "blur(3px)";
    header.style.webkitBackdropFilter = "blur(3px)";
    header.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    header.style.transition = "all 0.3s ease-in-out";
    header.style.borderRadius = "0px 0px 40px 40px";
    header.style.paddingBottom = "10px";
  } else {
    header.style.backdropFilter = "none";
    header.style.webkitBackdropFilter = "none";
    header.style.backgroundColor = "transparent";
    header.style.borderRadius = "0px";
    header.style.paddingBottom = "0px";
  }
});
