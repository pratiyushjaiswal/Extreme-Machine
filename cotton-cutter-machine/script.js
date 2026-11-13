/**
 * PRODUCT DETAIL PAGE ENGINE: AUTOMATIC COTTON CUTTER MACHINE (DUAL VARIANTS)
 * Directory: /cotton-cutter-machine/script.js
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Multi-Angle Gallery Switcher
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

  // 2. Interactive Variant Switcher (Standard vs. Lot Production Model)
  const variantData = {
    lot: {
      fullTitle: "Automatic Cotton Cutter Machine (With Lot Production Facility)",
      badgeText: "Lot Production & Hold Timer",
      fastPower: "24W - 25W Low",
      fastFeature: "Batch Counter",
      fastWeight: "Approx. 6.5 kg",
      specModel: "EMCUTTER-LOT (Lot Production Variant)",
      specPurpose: "High-speed sliver cutting with automated batch counting, hold time tuning & alert buzzer",
      specPower: "24 Watt – 25 Watt (Single Phase AC, Inverter Compatible)",
      specWeight: "6.5 kg (Mild Steel + Precision 3D Printed Housing)",
      specLotFacility: "Included (Digital Batch Counter + Alert Buzzer on lot completion)",
      specHoldTime: "Adjustable Hold Time & Speed via Front LCD Control Panel",
      waText: "Hello Extreme Machine, please send me the factory price and details for the Automatic Cotton Cutter Machine (With Lot Production Facility)."
    },
    standard: {
      fullTitle: "Automatic Cotton Cutter Machine (Standard Model)",
      badgeText: "Semi-to-Full Auto Upgrade",
      fastPower: "25W - 36W Low",
      fastFeature: "Continuous Cut",
      fastWeight: "6 kg Ultra-Light",
      specModel: "EMCUTTER (Standard Model)",
      specPurpose: "Converts Semi-Automatic Long Cotton Wick Machine into a Fully Automatic setup",
      specPower: "25 Watt – 36 Watt (220V Single Phase AC)",
      specWeight: "6 kg (Compact Mild Steel + 3D Printed Body)",
      specLotFacility: "Standard Continuous Production (Flexible length & speed control)",
      specHoldTime: "Adjustable Cutting Length & Motor Speed Control",
      waText: "Hello Extreme Machine, please send me the factory price and details for the Automatic Cotton Cutter Machine (Standard Model)."
    }
  };

  const variantBtns = document.querySelectorAll(".variant-pill-btn");
  const topBadge = document.getElementById("variantTopBadge");
  const fastPower = document.getElementById("fastSpecPower");
  const fastFeature = document.getElementById("fastSpecFeature");
  const fastWeight = document.getElementById("fastSpecWeight");

  const specModel = document.getElementById("specValModel");
  const specPurpose = document.getElementById("specValPurpose");
  const specPower = document.getElementById("specValPower");
  const specWeight = document.getElementById("specValWeight");
  const specLot = document.getElementById("specValLot");
  const specHold = document.getElementById("specValHold");

  const lockedModelInput = document.getElementById("lockedMachineModel");
  const formVariantLabel = document.getElementById("formVariantLabel");
  const quickWaBtn = document.getElementById("quickWhatsAppBtn");
  const dockWaBtn = document.getElementById("dockWhatsAppBtn");

  variantBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      variantBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const key = btn.getAttribute("data-variant");
      const data = variantData[key];
      if (!data) return;

      if (topBadge) topBadge.textContent = data.badgeText;
      if (fastPower) fastPower.textContent = data.fastPower;
      if (fastFeature) fastFeature.textContent = data.fastFeature;
      if (fastWeight) fastWeight.textContent = data.fastWeight;

      if (specModel) specModel.textContent = data.specModel;
      if (specPurpose) specPurpose.textContent = data.specPurpose;
      if (specPower) specPower.textContent = data.specPower;
      if (specWeight) specWeight.textContent = data.specWeight;
      if (specLot) specLot.textContent = data.specLotFacility;
      if (specHold) specHold.textContent = data.specHoldTime;

      if (lockedModelInput) lockedModelInput.value = data.fullTitle;
      if (formVariantLabel) formVariantLabel.textContent = data.fullTitle;

      const encodedWa = `https://wa.me/919905064364?text=${encodeURIComponent(data.waText)}`;
      if (quickWaBtn) quickWaBtn.href = encodedWa;
      if (dockWaBtn) dockWaBtn.href = encodedWa;
    });
  });

  // 3. Pre-Locked WhatsApp Lead Generator (Reads Active Variant Dynamically)
  const pdpForm = document.getElementById("pdpInquiryForm");
  if (pdpForm) {
    pdpForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("custName").value.trim();
      const phone = document.getElementById("custPhone").value.trim();
      const city = document.getElementById("custCity").value.trim();
      const selectedVariant = lockedModelInput ? lockedModelInput.value : "Automatic Cotton Cutter Machine";
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
        `*Selected Machine:* ${selectedVariant}\n` +
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