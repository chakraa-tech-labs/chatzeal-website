const headerTemplate = `
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
          <a href="usecase.html" class="nav-link">Use Cases</a>
        </li>
        <li class="nav-item">
          <a href="pricing.html" class="nav-link">Pricing</a>
        </li>
        <li class="nav-item">
          <a href="blogs.html" class="nav-link">Blogs</a>
        </li>
      </ul>
      <div class="header-button-box">
        <button class="header-login-button">Login</button>
        <button class="header-sign-button">Sign Up</button>
      </div>
    </div>
  </nav>
`;

// Insert the header template into the parent element
const parent = document.currentScript.parentElement;
if (parent) {
  parent.innerHTML = headerTemplate;
} else {
  console.error("Parent element not found for the header.");
}
