// ============================
// SMOOTH SCROLLING
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================
// HEADER SCROLL EFFECT
// ============================
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 14, 39, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 243, 255, 0.1)';
    } else {
        header.style.background = 'rgba(10, 14, 39, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// ============================
// ENTRY CARDS ANIMATION
// ============================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.entry-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ============================
// CIPHER ANIMATION EFFECT
// ============================
const keyIcon = document.querySelector('.key-icon');
if (keyIcon) {
    setInterval(() => {
        keyIcon.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    }, 3000);
}

// ============================
// CONSOLE EASTER EGG
// ============================
console.log('%c🔐 CryptoCore S3', 'font-size: 20px; font-weight: bold; color: #00f3ff;');
console.log('%cBienvenido al código fuente. La seguridad empieza aquí.', 'color: #8b92b3;');
