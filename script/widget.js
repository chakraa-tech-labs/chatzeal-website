const form = document.querySelector(".widget-form");
const scriptBody = document.querySelector(".widget-script-body");
const phoneInput = document.querySelector("#widget-input-phone");
const ctaInput = document.querySelector("#widget-input-cta");
const msgInput = document.querySelector("#widget-input-message");
const widgetIdInput = document.querySelector("#widget-input-id");
const parentIdInput = document.querySelector("#widget-input-parent");
const includingScriptInput = document.querySelector("#including-script-input");
const phoneErrorText = document.querySelector(".error-text");
const whatsappText = document.querySelector(".widget-whatsapp-text");
const scriptCopyBtn = document.querySelector(".widget-script-copy-icon-box");
const scriptTextDiv = document.querySelector(".widget-script-text-body");
const copyTextpopup = document.querySelector(".copy-popup-text-sub-box");

// Reset red border & hide error message on focus/input
phoneInput.addEventListener("focus", () => {
  phoneInput.style.border = "1px solid #e2d8f9";
  phoneErrorText.style.display = "none";
});

phoneInput.addEventListener("input", () => {
  phoneInput.style.border = "1px solid #e2d8f9";
  phoneErrorText.style.display = "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Reset all borders
  [ctaInput, msgInput, widgetIdInput, parentIdInput].forEach((input) => {
    input.style.border = "1px solid #e2d8f9";
  });

  // Validate phone number
  if (phoneInput.value.trim() === "") {
    phoneInput.style.border = "1px solid red";
    phoneErrorText.style.display = "block";
    isValid = false;
  }

  if (!isValid) return;

  // Get values
  const phone = phoneInput.value.trim();
  const suggestion = msgInput.value.trim();
  const widgetId = widgetIdInput.value.trim();
  const parentId = parentIdInput.value.trim();
  const ctaText = ctaInput.value.trim();
  const tooglevalue = includingScriptInput.checked

  
  // Start building script tag
  let widgetScript = `<script 
  src="https://widgetlistener-10076939792.development.catalystappsail.com/widget"`;

  // Always include phone (since it's mandatory)
  widgetScript += `\n  data-phone="${phone}"`;

  // Conditionally add optional attributes
  if (suggestion) {
    widgetScript += `\n  data-suggestion-text="${suggestion}"`;
  }
  if (widgetId) {
    widgetScript += `\n  data-widget-id="${widgetId}"`;
  }
  if (parentId) {
    widgetScript += `\n  data-parent-id="${parentId}"`;
  }
  if (ctaText) {
    widgetScript += `\n  data-button-text="${ctaText}"`;
  }
  if(tooglevalue){
    widgetScript += `\n   defer`;
  }

  widgetScript += `\n></script>`;

  scriptTextDiv.innerText = widgetScript;
  scriptBody.style.display = "block";

  //  Copy to clipboard
  scriptCopyBtn.addEventListener("click", () => {
    navigator.clipboard
      .writeText(widgetScript)
      .then(() => {
        copyTextpopup.style.display = "block";

        setTimeout(() => {
          copyTextpopup.style.display = "none";
        }, 1000);
      })
      .catch(() => {
        console.log("Failed to copy ");
      });
  });
});

ctaInput.addEventListener("input", () => {
  if (ctaInput.value.trim !== "") {
    whatsappText.style.paddingRight = "5px";
  }
  whatsappText.innerHTML = ctaInput.value.trim();
});
