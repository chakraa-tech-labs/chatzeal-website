// JavaScript code

var background = document.getElementById("background-div");
var successMessage = document.getElementById("successMessage");
var body = document.getElementById("body");

document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

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

  // Close Message
  setTimeout(function () {
    successMessage.style.transform = "scale(0)";

    setTimeout(function () {
      background.style.transform = "scaleX(0)";
      body.style.overflow = "auto";
    }, 500);
  }, 2500);
}

function smoothScrollTo(targetId) {
  document.getElementById(targetId).scrollIntoView({
    behavior: "auto",
  });
}
