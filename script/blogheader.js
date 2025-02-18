// Get the script tag that contains the JSON data
const blogHeaderScript = document.currentScript;

if (blogHeaderScript) {
  // Get the JSON string from the data-json attribute
  const jsonString = blogHeaderScript.getAttribute("data-json");

  // Parse the JSON data
  const blogHeaderData = JSON.parse(jsonString);

  // Generate the blog header content dynamically
  const blogHeaderTemplate = `
    <div class="container-fluid blog-details-header-box">
      <div class="blog-details-header-text">
        ${blogHeaderData.text}
      </div>

      <div class="blog-details-header-img-box">
        <img src="${blogHeaderData.image}" alt="Blog Header Image">
      </div>
    </div>

    <div class="log-details-header-info-box">
      <div class="log-details-header-info-box-1">  
         -By 
        <span class="blue">${blogHeaderData.author}</span> 
        <span class="dot"></span> 
        <span class="date">${blogHeaderData.readTime}</span>
      </div>
      <div class="">Last Updated on ${blogHeaderData.lastUpdated}</div>
    </div>
  `;

  // Insert the generated content into the parent container
  const blogHeader = blogHeaderScript.parentElement;
  if (blogHeader) {
    blogHeader.innerHTML = blogHeaderTemplate;
  } else {
    console.error("Parent element not found for the blog details header.");
  }
} else {
  console.error("Blog header script not found.");
}
