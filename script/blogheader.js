const blogHeaderScript = document.currentScript;

if (blogHeaderScript) {
  const jsonString = blogHeaderScript.getAttribute("data-json");
  const blogHeaderData = JSON.parse(jsonString);

  const blogHeaderTemplate = `
    <div class="container-fluid blog-details-header-box">
      <div class="blog-details-header-sub-box">
        <div class="blog-details-header-text">
          ${blogHeaderData.text}
        </div>

        <div class="blog-details-header-img-box">
          <img src="${blogHeaderData.image}" alt="Blog Header Image">
        </div>
      </div>
    </div>
  `;

  const blogHeader = blogHeaderScript.parentElement;
  if (blogHeader) {
    blogHeader.innerHTML = blogHeaderTemplate;
  } else {
    console.error("Parent element not found for the blog details header.");
  }
} 

else {
  console.error("Blog header script not found.");
}

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".blog-details-table-content");
  items.forEach((item) => {
    const lineBox = item.querySelector(".blog-details-line-box .line");
    const contentHeight = item.clientHeight; 
    lineBox.style.height = `${contentHeight}px`;
  });
});




{/* <div class="log-details-header-info-box">
      <div class="log-details-header-info-box-1">  
         By 
        <span class="blue">${blogHeaderData.author}</span> 
        <span class="dot"></span> 
        <span class="date">${blogHeaderData.readTime}</span>
      </div>
      <div class="">Last Updated on ${blogHeaderData.lastUpdated}</div>
    </div> */}