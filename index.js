

  // Add to Favorites Functionality
  document.querySelectorAll(".favorite-btn").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("favorited");
      if (button.classList.contains("favorited")) {
        button.textContent = "❤️"; // Favorited icon
      } else {
        button.textContent = "♡"; // Default icon
      }
    });
  });

  // Quantity Selector Functionality
  document.querySelectorAll(".quantity-controls").forEach((controls) => {
    const input = controls.querySelector("input");
    const minusButton = controls.querySelector("button:first-child");
    const plusButton = controls.querySelector("button:last-child");

    minusButton.addEventListener("click", () => {
      const currentValue = parseInt(input.value, 10) || 0;
      if (currentValue > 1) {
        input.value = currentValue - 1;
      }
    });

    plusButton.addEventListener("click", () => {
      const currentValue = parseInt(input.value, 10) || 0;
      input.value = currentValue + 1;
    });
  });

  // Add to Cart Button Functionality
  document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", () => {
      alert("Product added to cart!");
    });
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Dynamic Services Highlight on Scroll
  window.addEventListener("scroll", () => {
    const servicesSection = document.querySelector(".services");
    const services = document.querySelectorAll(".service-card");
    const servicesTop = servicesSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (servicesTop < viewportHeight - 100) {
      services.forEach((service, index) => {
        setTimeout(() => {
          service.classList.add("highlight");
        }, index * 200); // Adds delay for animation
      });
    }
  });
