document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    // Toggle menu mobile
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    // Handling dropdowns on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.style.display = 
                    dropdownMenu.style.display === "block" ? "none" : "block";
            }
        });
    });
});