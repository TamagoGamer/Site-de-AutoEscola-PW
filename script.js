document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const menuItems = document.querySelectorAll(".menu-item");
    const subMenuItems = document.querySelectorAll(".sub-menu-item");
    const contentSections = document.querySelectorAll(".content-section");
    const subContents = document.querySelectorAll(".sub-content");

    // Adiciona um evento de clique no botão de menu
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    // Adiciona um evento de clique em cada item do menu
    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Alterna a exibição do sub-menu
            const subMenu = item.nextElementSibling; // Pega o sub-menu correspondente
            if (subMenu) {
                // Alterna a exibição do sub-menu correspondente
                subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Adiciona um evento de clique em cada sub-item do menu
    subMenuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Oculta todas as seções de conteúdo
            contentSections.forEach(section => {
                section.style.display = "none";
            });

            // Mostra a sub-seção correspondente
            const targetId = item.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block"; // Exibe a sub-seção
            }
        });
    });
});
