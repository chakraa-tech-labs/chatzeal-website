// JavaScript code

var background = document.getElementById("background-div");
var form_background = document.getElementById("from-close-div");
var successMessage = document.getElementById("successMessage");
var body = document.getElementById("body");
var nav_bar = document.getElementById("nav-links");
var nav_form = document.getElementById("nav-links-form");
// var form = document.getElementById("myForm");

document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function FormOpen() {
  // alert("hai");
  console.log(nav_bar);
  nav_bar.style.display = "none";
  form_background.style.display = "block";
  nav_form.style.transform = "scalex(1)";
  // body.style.overflow = "hidden";
}

function FormClose() {
  // alert("hai");
  setTimeout(function () {
    nav_bar.style.display = "block";
  }, 900);
  form_background.style.display = "none";
  nav_form.style.transform = "scalex(0)";

  // body.style.overflow = "auto";
  // background.style.display = "none";
  // form.style.transform = "scale(0)";
}

function showSuccessMessage(e) {
  e.preventDefault();

  console.log("clicked");

  var successMessage = document.getElementById("successMessage");

  // Clear input fields
  var inputs = document.querySelectorAll(
    "input[type='text'], input[type='email'], input[type='password'], textarea"
  );
  inputs.forEach(function (input) {
    input.value = "";
  });

  successMessage.style.transform = "scale(1)";
  background.style.transform = "scalex(1)";
  body.style.overflow = "hidden";

  // //Close Message
  setTimeout(function () {
    successMessage.style.transform = "scale(0)";
    background.style.transform = "scalex(0)";
    body.style.overflow = "auto";
  }, 2500);

  setTimeout(function () {
    nav_bar.style.display = "block";
  }, 900);
  form_background.style.display = "none";
  nav_form.style.transform = "scalex(0)";
}

function smoothScrollTo(targetId) {
  document.getElementById(targetId).scrollIntoView({
    behavior: "auto",
  });
}
