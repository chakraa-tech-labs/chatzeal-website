const blogDataScript = document.currentScript;

if (blogDataScript) {
  const jsonString = blogDataScript.getAttribute("data-json");
  const blogData = JSON.parse(jsonString);

  console.log(blogData);

  const blogTemplate = blogData
    .map(
      (item) => `
    <a href="${item.href}">
      <div class="blog-details-table-content">
        <div class="blog-details-line-box">
          <div class="line-dot"></div>
          <div class="line"></div>
        </div>
        <div class="">${item.content}</div>
      </div>
    </a>
  `
    )
    .join("");

  const blogContainer = document.querySelector(
    ".blog-details-table-content-body"
  );
  if (blogContainer) {
    blogContainer.innerHTML = blogTemplate;
  } else {
    console.error("Parent element not found for the blog details.");
  }
} else {
  console.error("Blog data script not found.");
}
