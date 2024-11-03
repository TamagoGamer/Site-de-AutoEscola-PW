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

    // Adicionar classe 'visible' ao footer
    const footer = document.querySelector('footer');
    footer.classList.add('visible');
    // Fecha o menu móvel ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.getElementById('nav-links').classList.remove('show');
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