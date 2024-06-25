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
  var warring_text = document.getElementById("warring-text");
  var emailInput = document.querySelector("#section1_input");
  var email = emailInput.value;

  function isValidEmail(email) {
    var pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }

  if (!isValidEmail(email)) {
    emailInput.style.border = "2px solid #ff6e57";
    warring_text.style.display = "block";
    return;
  }

  emailInput.style.border = "1px solid #9b9eae";
  warring_text.style.display = "none";

  // Clear input field
  emailInput.value = "";

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

  // Call smoothScrollTo only if the email is valid
  smoothScrollTo("background-div");
}

// Add event listener
document
  .querySelector("#section1_input")
  .addEventListener("input", function () {
    var emailInput = document.querySelector("#section1_input");
    var warring_text = document.getElementById("warring-text");
    emailInput.style.border = "1px solid #9b9eae";
    warring_text.style.display = "none";
  });

// Form function 2
function showSuccessMessage2(e) {
  e.preventDefault();

  console.log("submit");

  var warring_text = document.getElementById("warring-text2");
  var emailInput = document.querySelector("#section5_input");
  var email = emailInput.value;

  function isValidEmail(email) {
    var pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }

  if (!isValidEmail(email)) {
    emailInput.style.border = "2px solid #ff6e57";
    warring_text.style.display = "block";
    return;
  }

  emailInput.style.border = "1px solid #9b9eae";
  warring_text.style.display = "none";

  // Clear input field
  emailInput.value = "";

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

  smoothScrollTo("background-div");
}

// Add event listener to reset
document
  .querySelector("#section5_input")
  .addEventListener("input", function () {
    var emailInput = document.querySelector("#section5_input");
    var warring_text = document.getElementById("warring-text2");
    emailInput.style.border = "1px solid #9b9eae";
    warring_text.style.display = "none";
  });

// Form function 3
function showSuccessMessage3(e) {
  e.preventDefault();

  console.log("submit");

  var warring_text = document.getElementById("warring-text3");
  var emailInput = document.querySelector("#footer_input");
  var email = emailInput.value;

  function isValidEmail(email) {
    var pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }

  if (!isValidEmail(email)) {
    emailInput.style.border = "2px solid #ff6e57";
    warring_text.style.display = "block";
    return;
  }

  emailInput.style.border = "1px solid #9b9eae";
  warring_text.style.display = "none";

  // Clear input field
  emailInput.value = "";

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

  smoothScrollTo("background-div");
}

// Add event listener to reset
document.querySelector("#footer_input").addEventListener("input", function () {
  var emailInput = document.querySelector("#footer_input");
  var warring_text = document.getElementById("warring-text3");
  emailInput.style.border = "1px solid #9b9eae";
  warring_text.style.display = "none";
});

function smoothScrollTo(targetId) {
  document.getElementById(targetId).scrollIntoView({
    behavior: "auto",
  });
}
