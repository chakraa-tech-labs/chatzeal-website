const headerTemplate = `
  <header>
    <nav class="container-fluid navbar navbar-light navbar-expand-lg">
      <a href="index.html" class="navbar-brand">
        <img src="icon/Group 67888.svg" alt="" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mynavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse header-ul-body" id="mynavbar">
        <div class="header-align-div"></div>
        <ul class="navbar-nav nav_list header-ul">
          <li class="nav-item">
            <a href="features.html" class="nav-link">Features</a>
          </li>
          <li class="nav-item">
            <a href="usecases.html" class="nav-link">Use Cases</a>
          </li>
          <li class="nav-item">
            <a href="pricing.html" class="nav-link">Pricing</a>
          </li>
          <li class="nav-item">
            <a href="blogs.html" class="nav-link">Blogs</a>
          </li>
        </ul>
        <div class="header-button-box">
          <a href="https://app.chatzeal.io/" target="_blank" class="nav-link">
            <button class="header-login-button">Login</button>
          </a>
          <a href="https://chakraa.zohobookings.com/#/4779028000000042052" target="_blank" class="nav-link">
            <button class="header-sign-button">Book a demo</button>
          </a>
        </div>
      </div>
    </nav>
  </header>
`;

// Insert the header template into the parent element
const parent = document.currentScript.parentElement;
if (parent) {
  parent.innerHTML = headerTemplate;
} else {
  console.error("Parent element not found for the header.");
}

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
