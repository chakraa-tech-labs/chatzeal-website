// a Tag Smooth Scroll
document.querySelectorAll(".blog-details-table-content-body a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 130;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});



window.addEventListener("scroll", function () {
  const tableBox = document.querySelector(".blog-details-content-parent-box");
  const footer = document.querySelector("footer");
  const container = document.querySelector(".blog-details-content-box");

  const footerTop = footer.getBoundingClientRect().top;
  const tableHeight = tableBox.offsetHeight;

  
  // If footer comes close, then stop the sticky and let it scroll
  if (!footerTop < tableHeight+ -90 ) {
    tableBox.style.position = "sticky";
    tableBox.style.top = "60px";
    
  } 
});


