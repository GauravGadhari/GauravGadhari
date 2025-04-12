// DOM Elements
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links li");
const sections = document.querySelectorAll("section");
const contactForm = document.getElementById("contactForm");

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.padding = "15px 50px";
    navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.padding = "20px 50px";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }

  // Active link based on scroll position
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinksItems.forEach((li) => {
    li.querySelector("a").classList.remove("active");
    if (li.querySelector("a").getAttribute("href") === `#${current}`) {
      li.querySelector("a").classList.add("active");
    }
  });
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Animation on scroll
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Elements to animate
const animatedElements = [
  ...document.querySelectorAll(".project-card"),
  ...document.querySelectorAll(".skill-category"),
  ...document.querySelectorAll(".stat-item"),
  ...document.querySelectorAll(".pricing-card"),
  document.querySelector(".about-text"),
  document.querySelector(".contact-form"),
  document.querySelector(".contact-info"),
];

animatedElements.forEach((el) => {
  if (el) {
    el.classList.add("fade-in");
    observer.observe(el);
  }
});

// Typed text effect for hero section subtitle
let currentText = 0;
const texts = [
  "Developer since 7th standard",
  "Web & Mobile App Developer",
  "Full-Stack Systems Developer",
  "Founder of LightXDigital",
];
const subtitle = document.querySelector(".subtitle");

function typeText() {
  const text = texts[currentText];
  let charIndex = 0;
  let typingInterval;

  // Clear the subtitle first
  subtitle.textContent = "";

  // Type out the text character by character
  typingInterval = setInterval(() => {
    if (charIndex < text.length) {
      subtitle.textContent += text[charIndex];
      charIndex++;
    } else {
      clearInterval(typingInterval);

      // Wait and then start erasing
      setTimeout(eraseText, 2000);
    }
  }, 100);
}

function eraseText() {
  const text = subtitle.textContent;
  let charIndex = text.length;
  let erasingInterval;

  erasingInterval = setInterval(() => {
    if (charIndex > 0) {
      subtitle.textContent = text.substring(0, charIndex - 1);
      charIndex--;
    } else {
      clearInterval(erasingInterval);

      // Move to next text and start typing again
      currentText = (currentText + 1) % texts.length;
      setTimeout(typeText, 500);
    }
  }, 50);
}

// Start the typing effect after page load
window.addEventListener("load", () => {
  setTimeout(typeText, 1000);
});

// Form submission handling
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validate form
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Format message for WhatsApp
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    // Open WhatsApp with the form data
    const whatsappURL = `https://wa.me/917721042911?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");

    // Reset the form
    contactForm.reset();
  });
}

// Add CSS class for animations
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  // Add animation classes to skill items with delay
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("animated");
    }, 100 * index);
  });

  // Parallax effect for hero shapes
  const shapes = document.querySelectorAll(".shape-1, .shape-2, .shape-3");

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape) => {
      const speed = shape.classList.contains("shape-1")
        ? 20
        : shape.classList.contains("shape-2")
        ? 40
        : 30;

      shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });

  // Create particles
  createParticles();

  // Setup theme toggle
  setupThemeToggle();

  // Setup project filters
  setupProjectFilters();

  // Setup dashboard icons
  animateProjectDashboards();

  // Add scroll progress indicator
  const scrollProgress = document.createElement("div");
  scrollProgress.className = "scroll-progress";
  document.body.appendChild(scrollProgress);

  // Update scroll progress on scroll
  window.addEventListener("scroll", () => {
    const scrollTotal =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollAmount = window.scrollY;
    scrollProgress.style.width = `${(scrollAmount / scrollTotal) * 100}%`;

    // Show/hide scroll-to-top button
    toggleScrollTopButton();
  });

  // Create scroll-to-top button
  const scrollTopBtn = document.createElement("div");
  scrollTopBtn.className = "scroll-top";
  scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollTopBtn);

  // Add click event to scroll to top
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Toggle scroll button visibility based on scroll position
  function toggleScrollTopButton() {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  }

  // Initialize scroll animations
  initScrollAnimations();
});

// Add particle background
function createParticles() {
  const hero = document.querySelector(".hero");
  const particles = document.createElement("div");
  particles.classList.add("particles");

  // Add particles to the hero section
  hero.appendChild(particles);

  // Create particles
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random size
    const size = Math.random() * 15 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;

    // Random opacity
    particle.style.opacity = Math.random() * 0.6 + 0.2;

    // Random animation duration
    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = `${duration}s`;

    // Random delay
    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;

    particles.appendChild(particle);
  }
}

// Theme toggle functionality
function setupThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = themeToggle.querySelector("i");

  // Check if user has previously set a theme preference
  const currentTheme = localStorage.getItem("theme");

  // Apply saved theme or default to light
  if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", () => {
    // Toggle dark-theme class on body
    document.body.classList.toggle("dark-theme");

    // Update the icon
    if (document.body.classList.contains("dark-theme")) {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
      localStorage.setItem("theme", "light");
    }
  });
}

// Project filtering functionality
function setupProjectFilters() {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const showMoreBtn = document.querySelector(".show-more-btn");

  // Initially show only 6 projects
  const initialVisibleCount = 6;
  let isShowingAll = false;

  // Hide projects beyond the initial count
  projectCards.forEach((card, index) => {
    if (index >= initialVisibleCount) {
      card.classList.add("hidden");
    }
  });

  // Show more/less button click handler
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();

      isShowingAll = !isShowingAll;

      projectCards.forEach((card, index) => {
        // Only toggle visibility beyond the initial visible count
        if (index >= initialVisibleCount) {
          if (isShowingAll) {
            // Consider the current active filter
            const activeFilter = document
              .querySelector(".category-btn.active")
              .getAttribute("data-filter");
            if (
              activeFilter === "all" ||
              card.getAttribute("data-category").includes(activeFilter)
            ) {
              card.classList.remove("hidden");
            }
          } else {
            card.classList.add("hidden");
          }
        }
      });

      // Change button text
      showMoreBtn.textContent = isShowingAll ? "Show Less" : "Show More";
    });
  }

  // Category filter click handlers
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get the filter value
      const filterValue = button.getAttribute("data-filter");

      // Filter the project cards
      projectCards.forEach((card, index) => {
        const cardCategory = card.getAttribute("data-category");

        // Reset hidden class first based on show more/less state
        if (index >= initialVisibleCount && !isShowingAll) {
          card.classList.add("hidden");
        } else {
          card.classList.remove("hidden");
        }

        // Then apply category filter
        if (filterValue !== "all") {
          if (!cardCategory.includes(filterValue)) {
            card.classList.add("hidden");
          }
        }

        // Apply animation to visible cards
        if (!card.classList.contains("hidden")) {
          // Remove and reapply animation
          card.style.animation = "none";
          // Trigger reflow
          void card.offsetWidth;
          card.style.animation = "cardAppear 0.4s ease-out";
          // Add delay for staggered effect
          card.style.animationDelay = `${index * 0.05}s`;
        }
      });

      // Update show more button text
      if (showMoreBtn) {
        let visibleCount = 0;
        let hiddenCount = 0;

        projectCards.forEach((card, index) => {
          const cardCategory = card.getAttribute("data-category");
          if (filterValue === "all" || cardCategory.includes(filterValue)) {
            if (index >= initialVisibleCount) {
              hiddenCount++;
            } else {
              visibleCount++;
            }
          }
        });

        // Only show the button if there are more items to show
        if (hiddenCount > 0) {
          showMoreBtn.style.display = "inline-block";
          showMoreBtn.textContent = "Show More";
          isShowingAll = false;
        } else {
          showMoreBtn.style.display = "none";
        }
      }
    });
  });
}

// Animate project dashboards
function animateProjectDashboards() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const dashboardIcons = card.querySelectorAll(".dashboard-icon");

    // Reset animations when entering viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dashboardIcons.forEach((icon, i) => {
              icon.style.animationDelay = `${(i + 1) * 0.1}s`;
              icon.style.animationName = "none";

              // Trigger reflow
              void icon.offsetWidth;

              icon.style.animationName = "iconFloat";
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(card);

    // Add hover effect with sequential animation
    card.addEventListener("mouseenter", () => {
      dashboardIcons.forEach((icon, i) => {
        icon.style.transitionDelay = `${i * 0.05}s`;
      });
    });

    card.addEventListener("mouseleave", () => {
      dashboardIcons.forEach((icon) => {
        icon.style.transitionDelay = "0s";
      });
    });
  });
}

// Initialize scroll animations
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(
    ".section-header, .project-card, .skill-category, .pricing-card, .stat-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add delay based on index for staggered animation
          setTimeout(() => {
            entry.target.classList.add("fade-in");
            entry.target.classList.add("animate");
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((el, index) => {
    el.classList.add("fade-in");
    el.style.setProperty("--delay", index);
    observer.observe(el);
  });
}
