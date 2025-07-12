//
//
//
//
//

window.addEventListener('scroll', function() {
    const heroBackground = document.querySelector('.hero__background');
    const navbar = document.querySelector('.navbar');
    
    const scrollPosition = window.scrollY;
    
    // blur effect hero background
    if (scrollPosition > 50) {
        const blurAmount = Math.min(scrollPosition / 30, 20);
        heroBackground.style.filter = `blur(${blurAmount}px)`;
        
        navbar.classList.add('scrolled');
    } else {
        // blur effect top
        heroBackground.style.filter = 'blur(0)';
        
        navbar.classList.remove('scrolled');
    }
    
    //  paralax effect pra sa hero content
    const heroContent = document.querySelector('.hero__content');
    if (heroContent && scrollPosition < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        heroContent.style.opacity = 1 - scrollPosition / 600;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        const img = card.querySelector('.feature-icon__img');
        
        // if this image has an animated version
        if (img && img.dataset.animatedSrc) {
            const staticSrc = img.src;
            const animatedSrc = img.dataset.animatedSrc;
            
            card.addEventListener('mouseenter', function() {
                img.src = animatedSrc;
            });
            
            card.addEventListener('mouseleave', function() {
                img.src = staticSrc;
            });
        }
    });

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });
        
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
                menuToggle.classList.remove('active');
            });
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('show');
                menuToggle.classList.remove('active');
            }
        });
    }
});