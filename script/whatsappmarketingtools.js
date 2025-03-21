function scrollActiveTabIntoView(activeLink) {
    if (activeLink) { // Remove mobile-only restriction
        const navbar = document.querySelector(".resources-page-header-body"); // Get navbar container
        if (navbar) {
            const linkOffset = activeLink.offsetLeft - (navbar.clientWidth / 2) + (activeLink.clientWidth / 2);
            navbar.scrollTo({
                left: linkOffset,
                behavior: "smooth"
            });
        }
    }
}

// Auto-Highlight Active Section in Navbar (All Screen Sizes)
function setActiveLink() {
    let scrollPosition = window.scrollY + 100;

    document.querySelectorAll(".all-content-body").forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const correspondingLink = document.querySelector(`.resources-page-header-a-tag[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll(".resources-page-header-a-tag").forEach(link => {
                link.classList.remove("active");
            });

            if (correspondingLink) {
                correspondingLink.classList.add("active");
                scrollActiveTabIntoView(correspondingLink); // Scroll navbar only
            }
        }
    });
}

// Run function on scroll
window.addEventListener("scroll", setActiveLink);
setActiveLink();

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
  
