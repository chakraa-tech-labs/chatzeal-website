// Smooth Scroll for a Tags
document.querySelectorAll(".resources-page-header-a-tag").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const offset = 90;
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

// Auto-Highlight Active Section in Navbar
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".all-content-body");
  let scrollPosition = window.scrollY + 100; // Offset to detect section properly


  sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      const correspondingLink = document.querySelector(`.resources-page-header-a-tag[href="#${sectionId}"]`);

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all links

          document.querySelectorAll(".resources-page-header-a-tag").forEach((link) => {
              link.classList.remove("active");
          });

          // Add active class only to the correct link
          if (correspondingLink) {
              correspondingLink.classList.add("active");
          }
      }
  });
});
