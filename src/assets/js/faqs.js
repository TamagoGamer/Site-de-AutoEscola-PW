document.addEventListener('DOMContentLoaded', function() {
    const categoryToggles = document.querySelectorAll('.category-toggle');
    const faqToggles = document.querySelectorAll('.faq-toggle');
    // Adiciona um evento  de clique para cada toggle dentro do  array categoryToggles

    categoryToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
    // Adiciona um evento  de clique para cada toggle dentro do  array faqToggles
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});