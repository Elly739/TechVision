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
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
        question.addEventListener("click", () => {
            item.classList.toggle("open");
        });
    }
});

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
