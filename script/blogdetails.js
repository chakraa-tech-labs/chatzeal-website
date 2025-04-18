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
