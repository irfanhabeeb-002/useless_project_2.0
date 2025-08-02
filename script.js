// Digital Theme Park - Landing Page Engine
class DigitalThemePark {
    constructor() {
        this.currentTaglineIndex = 0;
        this.taglines = [
            "Productivity is a prison. Here's your key.",
            "You came for focus. You'll leave questioning reality.",
            "Enter the dopamine zone.",
            "Where time goes to get lost."
        ];
        this.init();
    }

    init() {
        this.setupCursorTrail();
        this.setupTaglineRotator();
        this.setupEventListeners();
        this.setupBoothInteractions();
        this.startAmbientEffects();
    }

    // Custom cursor trail effect
    setupCursorTrail() {
        const cursor = document.querySelector('.cursor-trail');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.1;
            cursorY += dy * 0.1;
            
            cursor.style.left = cursorX - 10 + 'px';
            cursor.style.top = cursorY - 10 + 'px';
            
            requestAnimationFrame(animateCursor);
        };
        animateCursor();
    }

    // Rotating taglines for psychological manipulation
    setupTaglineRotator() {
        const taglines = document.querySelectorAll('.tagline');
        
        setInterval(() => {
            taglines.forEach(tagline => tagline.classList.remove('active'));
            this.currentTaglineIndex = (this.currentTaglineIndex + 1) % taglines.length;
            taglines[this.currentTaglineIndex].classList.add('active');
        }, 4000);
    }

    // Main event listeners
    setupEventListeners() {
        // Portal button
        const portalBtn = document.getElementById('enterCarnival');
        portalBtn.addEventListener('click', () => {
            this.createConfetti();
            this.smoothScrollTo('#parkMap');
        });
    }

    // Smooth scroll with psychological manipulation
    smoothScrollTo(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Confetti explosion for dopamine hits
    createConfetti() {
        const container = document.getElementById('confettiContainer');
        const colors = ['#39FF14', '#FF00FF', '#00FFFF', '#FFD700'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }

    // Setup booth interactions for hover effects only
    setupBoothInteractions() {
        document.querySelectorAll('.booth').forEach(booth => {
            booth.addEventListener('mouseenter', () => {
                this.addHoverEffect(booth);
                this.createConfetti();
            });
            
            booth.addEventListener('mouseleave', () => {
                this.removeHoverEffect(booth);
            });
        });
    }

    // Add hover effects
    addHoverEffect(booth) {
        booth.style.transform = 'translateY(-10px) scale(1.02)';
        booth.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    }

    // Remove hover effects
    removeHoverEffect(booth) {
        booth.style.transform = 'translateY(0) scale(1)';
        booth.style.boxShadow = 'none';
    }

    // Start ambient effects for psychological manipulation
    startAmbientEffects() {
        // Subtle background animations
        setInterval(() => {
            const orbs = document.querySelectorAll('.floating-orb');
            orbs.forEach(orb => {
                orb.style.filter = `blur(${Math.random() * 3 + 1}px)`;
            });
        }, 3000);

        // Random glitch effects
        setInterval(() => {
            if (Math.random() < 0.1) {
                this.addGlitchEffect(document.body);
            }
        }, 5000);
    }

    // Add glitch effect for psychological manipulation
    addGlitchEffect(element) {
        element.style.animation = 'glitch 0.3s ease';
        setTimeout(() => {
            element.style.animation = '';
        }, 300);
    }
}

// Initialize the Digital Theme Park when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DigitalThemePark();
});

// Add CSS for glitch animation
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(style); 