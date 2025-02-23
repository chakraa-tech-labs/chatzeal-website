const script = document.currentScript;

const data = JSON.parse(script.getAttribute('data-json'));

const tableTemplate = `
  <div class="blog-details-table-content-box">
    <div class="blog-details-table">
      <div class="blog-details-table-title">TABLE OF CONTENTS</div>
      <div class="blog-details-table-content-body">
        ${data.map(item => `
          <a href="${item.href}">
            <div class="blog-details-table-content">
              <div class="blog-details-line-box">
                <div class="line-dot"></div>
                <div class="line"></div>
              </div>
              <div class="blog-details-table-content-text">${item.content}</div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
    <div class="blog-details-table-footer">
      <div class="blog-details-table-footer-text">SHARE THIS ARTICLE</div>
      <div class="blog-details-table-footer-img-box">
        <a href=""><img src="icon/facebook2.svg" alt="Facebook"></a>
        <a href=""><img src="icon/twitter.svg" alt="Twitter"></a>
        <a href=""><img src="icon/linkedin.svg" alt="LinkedIn"></a>
        <a href=""><img src="icon/insta.svg" alt="Instagram"></a>
      </div>
    </div>
  </div>
`;

// Insert the header template into the parent element
const tableContent = script.parentElement;
if (tableContent) {
  tableContent.innerHTML = tableTemplate;
} else {
  console.error("Parent element not found for the Table of Contents.");
}
