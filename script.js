/**
 * EXTREME MACHINE - FRONTEND CONTROLLER
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Drawer Navigation & Backdrop Logic (Instant Touch Ready)
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");

  function openDrawer() {
    if (navMenu && drawerBackdrop) {
      navMenu.classList.add("open");
      drawerBackdrop.classList.add("active");
      document.body.style.overflow = "hidden"; // Locks background scroll
    }
  }

  function closeDrawer() {
    if (navMenu && drawerBackdrop) {
      navMenu.classList.remove("open");
      drawerBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", openDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", closeDrawer);
    drawerBackdrop.addEventListener("touchstart", closeDrawer, { passive: true });
  }

  // Auto-close on selecting any navigation link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // 2. Hardware-Accelerated 100% Track Slider
  const track = document.getElementById("sliderTrack");
  const slides = document.querySelectorAll(".slide-item");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.getElementById("prevSlideBtn");
  const nextBtn = document.getElementById("nextSlideBtn");

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoPlayTimer = null;
  const autoPlayInterval = 5000;

  let startX = 0;
  let isSwiping = false;

  function updateSliderPosition() {
    if (!track) return;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    updateSliderPosition();
    resetAutoPlay();
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, autoPlayInterval);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetIndex = parseInt(dot.getAttribute("data-index"), 10);
      goToSlide(targetIndex);
    });
  });

  if (track) {
    track.addEventListener("touchstart", (e) => {
      stopAutoPlay();
      startX = e.touches[0].clientX;
      isSwiping = true;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
      if (!isSwiping) return;
      const diffX = startX - e.changedTouches[0].clientX;

      if (diffX > 45) {
        goToSlide(currentIndex + 1);
      } else if (diffX < -45) {
        goToSlide(currentIndex - 1);
      } else {
        startAutoPlay();
      }
      isSwiping = false;
    });

    track.addEventListener("mouseenter", stopAutoPlay);
    track.addEventListener("mouseleave", startAutoPlay);

    startAutoPlay();
  }

  // 3. Structured Pre-Filled WhatsApp Lead Engine
  const inquiryForm = document.getElementById("inquiryForm");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("custName").value.trim();
      const phone = document.getElementById("custPhone").value.trim();
      const city = document.getElementById("custCity").value.trim();
      const machine = document.getElementById("machineSelect").value;
      const notes = document.getElementById("custNotes").value.trim();

      if (!name || !phone || !city || !machine) {
        alert("Please fill in all required fields.");
        return;
      }

      const messageBody =
        `*FACTORY PRICE INQUIRY - EXTREME MACHINE*\n` +
        `----------------------------------------\n` +
        `*Full Name:* ${name}\n` +
        `*WhatsApp Number:* ${phone}\n` +
        `*City / State:* ${city}\n` +
        `*Selected Machine:* ${machine}\n` +
        (notes ? `*Custom Requirement:* ${notes}\n` : "") +
        `----------------------------------------\n` +
        `Hello Extreme Machine, please share the official commercial quotation and delivery lead time for this model.`;

      const whatsappURL = `https://wa.me/919905064364?text=${encodeURIComponent(messageBody)}`;
      window.open(whatsappURL, "_blank");
    });
  }
});

/**
 * Helper to smoothly scroll directly to form wrapper (Title and Form stay visible)
 * @param {string} productName
 */
function routeToInquiryForm(productName) {
  const formWrapper = document.getElementById("quoteFormWrapper");
  const selectElement = document.getElementById("machineSelect");
  const navMenu = document.getElementById("navMenu");
  const drawerBackdrop = document.getElementById("drawerBackdrop");

  // Dismiss drawer if open
  if (navMenu && drawerBackdrop) {
    navMenu.classList.remove("open");
    drawerBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (formWrapper) {
    formWrapper.scrollIntoView({ behavior: "smooth" });
  }

  if (selectElement && productName) {
    selectElement.value = productName;
  }
}