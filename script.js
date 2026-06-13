document.addEventListener('DOMContentLoaded', () => {
    // Typing Animation
    const texts = [
        "Create a stunning landing page",
        "Add a dark mode theme",
        "Make it fully responsive",
        "Deploy to production!"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    
    const typingElement = document.getElementById('typing-text');
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.innerHTML = `<span style="color: #c678dd;">// Vibe:</span> ${currentText.substring(0, charIndex - 1)}`;
            charIndex--;
        } else {
            typingElement.innerHTML = `<span style="color: #c678dd;">// Vibe:</span> <span style="color: #98c379;">${currentText.substring(0, charIndex + 1)}</span>`;
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? erasingDelay : typingDelay;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = newTextDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex++;
            if (textIndex >= texts.length) {
                textIndex = 0;
            }
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing animation
    if(typingElement) {
        setTimeout(type, 1000);
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
