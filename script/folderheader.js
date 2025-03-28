const headerTemplate = `
  <div>
    <nav class="container-fluid navbar navbar-light navbar-expand-lg">
    
      <a href="../index.html" class="navbar-brand">
         <div class = "header-logo-body">
          <img class = "header-logo-img"" src="../icon/logo.png" alt="" />
          <span class = "header-logo-text">
            Chatzeal 
          </span>
        </div>
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
            <a href="../features.html" class="nav-link">Features</a>
          </li>
          <li class="nav-item">
            <a href="../usecases.html" class="nav-link">Use Cases</a>
          </li>
          <li class="nav-item">
            <a href="../pricing.html" class="nav-link">Pricing</a>
          </li>
          <li class="nav-item">
            <a href="../blogs.html" class="nav-link">Blogs</a>
          </li>
        </ul>
        <div class="header-button-box">
          <a href="https://app.chatzeal.io/" target="_blank" class="nav-link">
            <button class="header-login-button">Login</button>
          </a>
          <a href="https://calendly.com/chatzeal/strategy-demo" target="_blank" class="nav-link">
            <button class="header-sign-button">Book a Demo</button>
          </a>
        </div>
      </div>
    </nav>
  </div>
`;

// Insert the header template into the parent element
const parent = document.currentScript.parentElement;
if (parent) {
  parent.innerHTML = headerTemplate;
} else {
  console.error("Parent element not found for the header.");
}


