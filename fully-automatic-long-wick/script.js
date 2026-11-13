/**
 * PRODUCT DETAIL PAGE ENGINE: FULLY AUTOMATIC LONG WICK MACHINE
 * Directory: /fully-automatic-long-wick/script.js
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Multi-Angle Gallery Switcher (Supports 1 or 2+ images automatically)
  const mainImage = document.getElementById("mainProductImage");
  const thumbCards = document.querySelectorAll(".thumb-card");

  thumbCards.forEach((card) => {
    card.addEventListener("click", () => {
      thumbCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      const targetSrc = card.getAttribute("data-full-src");
      if (mainImage && targetSrc) {
        mainImage.style.opacity = "0.2";
        mainImage.style.transform = "scale(0.96)";

        setTimeout(() => {
          mainImage.src = targetSrc;
          mainImage.style.opacity = "1";
          mainImage.style.transform = "scale(1)";
        }, 160);
      }
    });
  });

  // 2. Pre-Locked WhatsApp Lead Generator
  const pdpForm = document.getElementById("pdpInquiryForm");
  if (pdpForm) {
    pdpForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("custName").value.trim();
      const phone = document.getElementById("custPhone").value.trim();
      const city = document.getElementById("custCity").value.trim();
      const notes = document.getElementById("custNotes").value.trim();

      if (!name || !phone || !city) {
        alert("Please fill in your name, WhatsApp number, and city.");
        return;
      }

      const messageBody =
        `*FACTORY PRICE INQUIRY - EXTREME MACHINE*\n` +
        `----------------------------------------\n` +
        `*Full Name:* ${name}\n` +
        `*WhatsApp Number:* ${phone}\n` +
        `*City / State:* ${city}\n` +
        `*Selected Machine:* Fully Automatic Long Cotton Wick Machine (FALCWMP)\n` +
        (notes ? `*Custom Requirement:* ${notes}\n` : "") +
        `----------------------------------------\n` +
        `Hello Extreme Machine, please share the official commercial quotation and delivery lead time for this model.`;

      const whatsappURL = `https://wa.me/919905064364?text=${encodeURIComponent(messageBody)}`;
      window.open(whatsappURL, "_blank");
    });
  }
});

function scrollToForm() {
  const target = document.getElementById("quoteFormWrapper");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}