document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    // Menu Mobile
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    // Dropdowns no mobile
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

    

    // Previne zoom indesejado em inputs em dispositivos iOS
    document.querySelectorAll('input, textarea').forEach(element => {
        element.addEventListener('focus', function() {
            element.setAttribute('readonly', 'readonly');
            element.removeAttribute('readonly');
        });
    });
});
