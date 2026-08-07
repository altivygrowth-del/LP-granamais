// Inicializar Ícones Lucide
lucide.createIcons();

// Animação de Reveal ao Scroll
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('revealed');
            }, entry.target.dataset.delay * 100 || 0);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Accordion Logic
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        // Fechar outros
        document.querySelectorAll('.accordion-body').forEach(b => {
            if (b !== body) b.style.display = 'none';
        });

        // Alternar atual
        const isOpen = body.style.display === 'block';
        body.style.display = isOpen ? 'none' : 'block';
        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de Parallax suave no Hero Mockup
window.addEventListener('scroll', () => {
    const mockup = document.querySelector('.main-mockup');
    const scrolled = window.pageYOffset;
    mockup.style.transform = `translateY(${scrolled * 0.05}px)`;
});