// Navigation scroll effect
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe project cards
document.querySelectorAll('.project-card, .project-card-small').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    
    observer.observe(card);
    
    card.addEventListener('transitionend', () => {
        if (card.classList.contains('visible')) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Add visible class when intersecting
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .project-card-small, .patent-card, .cert-card, .achievement-card').forEach(card => {
    cardObserver.observe(card);
});

// Rotating expertise tags
const expertiseTags = document.querySelectorAll('.expertise-tag');
let currentTagIndex = 0;

function rotateExpertiseTags() {
    expertiseTags.forEach((tag, index) => {
        tag.classList.remove('active');
    });
    
    expertiseTags[currentTagIndex].classList.add('active');
    currentTagIndex = (currentTagIndex + 1) % expertiseTags.length;
}

// Start rotating tags every 1 seconds
setInterval(rotateExpertiseTags, 1000);

// Parallax effect for hero shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// Mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const moveX = (mouseX - 0.5) * (20 + index * 10);
        const moveY = (mouseY - 0.5) * (20 + index * 10);
        shape.style.transform += ` translate(${moveX}px, ${moveY}px)`;
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .project-card.visible,
    .project-card-small.visible,
    .patent-card.visible,
    .cert-card.visible,
    .achievement-card.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Lazy load images when they come into view
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add smooth reveal animation to sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
});

// Initialize on page load
window.addEventListener('load', () => {
    // Trigger initial animations
    document.body.style.opacity = '1';
    
    // Set initial active nav link
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});

// Add cursor effect for interactive elements
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Add cursor styles
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .custom-cursor {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--accent);
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    }
    
    .cursor-follower {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid var(--accent);
        position: fixed;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease;
        mix-blend-mode: difference;
    }
    
    a:hover ~ .cursor-follower,
    button:hover ~ .cursor-follower,
    .project-card:hover ~ .cursor-follower {
        width: 60px;
        height: 60px;
    }
`;
document.head.appendChild(cursorStyle);

// Hide cursor on mobile
if (window.matchMedia('(max-width: 768px)').matches) {
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
}

// Image Gallery Carousel for GAN Project
function initImageGallery() {
    const galleryContainer = document.querySelector('.image-gallery-container');
    if (!galleryContainer) return;
    
    const images = galleryContainer.querySelectorAll('.gallery-image');
    const indicatorsContainer = document.querySelector('.gallery-indicators');
    
    if (images.length === 0) return;
    
    // Create indicators
    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'gallery-indicator' + (index === 0 ? ' active' : '');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    let currentIndex = 0;
    let galleryInterval;
    const indicators = indicatorsContainer.querySelectorAll('.gallery-indicator');
    
    function goToSlide(index) {
        // Remove active class from current image and indicator
        images[currentIndex].classList.remove('active');
        if (indicators[currentIndex]) {
            indicators[currentIndex].classList.remove('active');
        }
        
        // Set new index
        currentIndex = index;
        
        // Add active class to new image and indicator
        images[currentIndex].classList.add('active');
        if (indicators[currentIndex]) {
            indicators[currentIndex].classList.add('active');
        }
    }
    
    // Auto-rotate images every 1 second (faster rotation)
    function startGallery() {
        galleryInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            goToSlide(nextIndex);
        }, 1000);
    }
    
    startGallery();
    
    // Pause on hover
    galleryContainer.addEventListener('mouseenter', () => {
        if (galleryInterval) {
            clearInterval(galleryInterval);
        }
    });
    
    galleryContainer.addEventListener('mouseleave', () => {
        startGallery();
    });
}

// Initialize gallery on page load
window.addEventListener('load', () => {
    initImageGallery();
});

console.log('Portfolio website loaded successfully! 🚀');

