/**
 * Talent Acceleration Group - Main JavaScript Functions
 */

// Document Ready Handler
document.addEventListener("DOMContentLoaded", function() {
  // Initialize navigation functionality
  initNavigation();
  
  // Initialize testimonial filtering if on testimonials page
  initTestimonialFilter();
  
  // Initialize testimonial expansion if on testimonials page
  initTestimonialExpansion();
  
  // Add smooth scrolling to navigation links
  initSmoothScrolling();
  
  // Change navbar background on scroll
  initNavbarScroll();
});

/**
 * Initialize navigation active state and hover effects
 */
function initNavigation() {
  // Get current page path
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('#mainNav .nav-link');
  
  // Set active class based on current page
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Remove active class first (to ensure only one active link)
    link.classList.remove('active');
    
    // Check if this link matches the current page
    if (href) {
      // For links to other pages (testimonials.html, about.html)
      if (href.includes('.html') && currentPage.includes(href)) {
        link.classList.add('active');
      }
      // For hash links on index page (#about, #services, etc.)
      else if (currentPage === 'index.html' && href.startsWith('#') && 
               window.location.hash === href) {
        link.classList.add('active');
      }
      // If no hash but on index page, activate the first nav item
      else if (currentPage === 'index.html' && href === '#about' && !window.location.hash) {
        link.classList.add('active');
      }
    }
  });
}

/**
 * Initialize testimonial filtering functionality
 */
function initTestimonialFilter() {
  const filter = document.getElementById("industryFilter");
  if (filter) {
    const testimonials = document.querySelectorAll(".testimonial-card");

    function applyFilter(selected) {
      testimonials.forEach(card => {
        const industry = card.getAttribute("data-industry");
        const shouldShow = selected === "all" || industry === selected;
        card.style.display = shouldShow ? "block" : "none";
      });
    }

    // Apply default filter on page load
    applyFilter(filter.value);

    // Listen for filter changes
    filter.addEventListener("change", function() {
      applyFilter(this.value);
    });
  }
}

/**
 * Initialize testimonial expansion functionality
 */
function initTestimonialExpansion() {
  // Get all testimonial paragraphs
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
  testimonialCards.forEach(card => {
    // Get the testimonial paragraph
    const paragraph = card.querySelector('p.fst-italic');
    if (!paragraph || paragraph.parentElement.classList.contains('testimonial-content')) {
      return; // Skip if already processed or not found
    }
    
    // Get the parent div
    const parentDiv = paragraph.parentElement;
    
    // Create the new structure
    const testimonialContent = document.createElement('div');
    testimonialContent.className = 'testimonial-content mt-3 position-relative';
    
    // Move the paragraph inside the new div
    parentDiv.insertBefore(testimonialContent, paragraph);
    testimonialContent.appendChild(paragraph);
    
    // Add the gradient overlay
    const gradient = document.createElement('div');
    gradient.className = 'testimonial-gradient';
    testimonialContent.appendChild(gradient);
    
    // Add the "Read more" indicator
    const readMore = document.createElement('div');
    readMore.className = 'read-more-indicator';
    readMore.textContent = 'Read more...';
    testimonialContent.appendChild(readMore);
  });
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScrolling() {
  document.querySelectorAll('a.nav-link, a.btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href && href.startsWith('#') && document.querySelector(href)) {
        e.preventDefault();
        
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
        
        // Update active state in navigation
        document.querySelectorAll('#mainNav .nav-link').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
}

/**
 * Initialize navbar background change on scroll
 */
function initNavbarScroll() {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.getElementById('mainNav').classList.add('navbar-scrolled');
    } else {
      document.getElementById('mainNav').classList.remove('navbar-scrolled');
    }
  });
}

/**
 * Form submission success message function
 */
function showSuccessMessage(event) {
  event.preventDefault();
  const form = event.target;
  const successMsg = document.getElementById('formSuccess');
  
  // In a real implementation, you'd submit the form data via AJAX here
  // and show the success message only after confirmation
  
  // For demo purposes, just show the success message
  successMsg.classList.remove('d-none');
  form.reset();
  
  // Scroll to success message
  successMsg.scrollIntoView({ behavior: 'smooth' });
  
  // Hide message after 5 seconds
  setTimeout(() => {
    successMsg.classList.add('d-none');
  }, 5000);
}

 document.addEventListener("DOMContentLoaded", function () {
    const filter = document.getElementById("industryFilter");
    const testimonials = document.querySelectorAll(".testimonial-card");

    function applyFilter(selected) {
      testimonials.forEach((card) => {
        const industry = card.getAttribute("data-industry");
              
        if (selected === "all") {
          card.style.display = "block";
        } else if (selected === industry) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    // Apply default filter on page load
    applyFilter(filter.value);

    // Listen for filter changes
    filter.addEventListener("change", function () {
      applyFilter(this.value);
    });                                             
  });                 