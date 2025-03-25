const footerTemplate = `
  <div class="container-fluid footer-body">
     <!-- div class="footer-title">A product of Chakraa Tech Labs</div --> 
    <div class="footer-title">Contact Us</div>
    <div class="container-fluid footer-content-box">
      <div class="footer-content footer-content1">
        <div class="country-name">INDIA</div>
        <div class="address-box">
          <div class="address-icon">
            <img src="icon/location.svg" alt="">
          </div>
          <div class="address">Chakraa Universal Tech Labs Private Limited, <br>
            35/31, Chitragupta Nagar, Urapakkam, <br>
            Chennai, Tamil Nadu - 603210.
          </div>
        </div>
        <div class="address-box">
          <div class="address-icon"></div>
          <div class="address address-bold">
            GST IN : 33AALCC2177J1ZJ
          </div>
        </div>
      </div>

      <div class="footer-content footer-content2">
        <div class="country-name">USA</div>
        <div class="address-box">
          <div class="address-icon">
            <img src="icon/location.svg" alt="">
          </div>
          <div class="address">
            Chakraa Tech Labs LLC,<br>
            701 Tillery Street Unit 12 - 1775,<br>
            Austin, Texas 78702.
          </div>
        </div>
      </div>

      <div class="footer-content footer-content3">
        <div class="country-name">Email</div>
        <div class="contact-box">
        </div>
        <div class="contact-box">
          <div class="contact-icon">
            <img src="icon/email.svg" alt="">
          </div>
          <div class="address">
            <a href="mailto:contact@chakraa.io">contact@chakraa.io</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid footer-content-box2">
      <div class="text copy-rights-text">© 2024 Chakraa Universal Tech Labs Private Limited | All rights reserved</div>
      <div class="text terms-text"><a href="terms.html">Terms & Conditions</a>  | <a href="privacy.html">Privacy Policy</a> </div>
    </div>
  </div>
`;

// Insert the footer template into the parent element
const footer = document.currentScript.parentElement;
if (footer) {
  footer.innerHTML = footerTemplate;
} else {
  console.error("Parent element not found for the footer.");
}

