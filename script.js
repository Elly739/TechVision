const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

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
