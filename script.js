// Mobile Menu Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

// FAQ Accordion Toggle
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", (e) => {
                e.preventDefault();
                item.classList.toggle("open");
            });
        }
    });

    // Initialize Integrations Filters
    initializeIntegrationFilters();
});

// Integrations Filter and Search Functionality
function initializeIntegrationFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("toolSearch");
    const toolCards = document.querySelectorAll(".tool-card");

    if (!filterBtns.length) return; // Exit if not on integrations page

    // Filter by category
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-category");
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Filter cards
            filterCards(category, searchInput ? searchInput.value : "");
        });
    });

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const activeCategory = document.querySelector(".filter-btn.active")
                .getAttribute("data-category");
            
            filterCards(activeCategory, searchTerm);
        });
    }
}

function filterCards(category, searchTerm) {
    const toolCards = document.querySelectorAll(".tool-card");
    let visibleCount = 0;

    toolCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        const toolName = card.getAttribute("data-name").toLowerCase();

        // Check if card matches category and search term
        const matchCategory = category === "all" || cardCategory === category;
        const matchSearch = toolName.includes(searchTerm);

        if (matchCategory && matchSearch) {
            card.style.display = "block";
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 10);
            visibleCount++;
        } else {
            card.style.opacity = "0";
            card.style.transform = "translateY(10px)";
            setTimeout(() => {
                card.style.display = "none";
            }, 300);
        }
    });

    // Show "no results" message if needed
    const grid = document.getElementById("toolsGrid");
    if (visibleCount === 0 && grid) {
        if (!document.getElementById("noResults")) {
            const noResults = document.createElement("div");
            noResults.id = "noResults";
            noResults.style.cssText = `
                grid-column: 1 / -1;
                text-align: center;
                padding: 40px 20px;
                color: var(--muted);
                font-size: 1.1rem;
            `;
            noResults.textContent = "No tools found matching your search.";
            grid.appendChild(noResults);
        }
    } else if (document.getElementById("noResults")) {
        document.getElementById("noResults").remove();
    }
}

// Scroll Animation Observer - Ensure elements are visible
document.querySelectorAll(".animate-on-scroll").forEach(el => {
    el.style.opacity = "1";  // Ensure visible by default
    el.style.transform = "translateY(0)";
});

// Animate on scroll
const observerOptions = {
    threshold: 0.05,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Trigger animation
            entry.target.style.animation = `fadeInOnScroll 0.6s ease-out ${index * 0.05}s forwards`;
        }
    });
}, observerOptions);

document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
});

// Form Submission
const projectForm = document.querySelector("#projectForm");
const formMessage = document.querySelector("#formMessage");

if (projectForm && formMessage) {
    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!projectForm.checkValidity()) {
            projectForm.reportValidity();
            return;
        }

        const formData = new FormData(projectForm);
        const savedRequests = JSON.parse(localStorage.getItem("techvisionRequests") || "[]");
        const request = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            company: formData.get("company"),
            service: formData.get("service"),
            budget: formData.get("budget"),
            supportAreas: formData.getAll("supportAreas"),
            message: formData.get("message"),
            submittedAt: new Date().toISOString()
        };

        savedRequests.push(request);
        localStorage.setItem("techvisionRequests", JSON.stringify(savedRequests));

        projectForm.reset();
        formMessage.textContent = "Thank you. Your request has been saved locally and is ready for backend integration.";
    });
}

// Newsletter Form Submission
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = newsletterForm.querySelector(".newsletter-input");
        if (input && input.value.trim()) {
            alert("Thank you for subscribing! We'll be in touch soon.");
            input.value = "";
        }
    });
}
