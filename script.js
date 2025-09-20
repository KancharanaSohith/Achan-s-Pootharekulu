// Product Image Enhancement
class ProductImageEnhancement {
    constructor() {
        this.init();
    }

    init() {
        const productImage = document.querySelector('.product-image');
        if (productImage) {
            // Add loading animation
            productImage.addEventListener('load', () => {
                productImage.style.opacity = '1';
            });
            
            // Add hover effects
            productImage.addEventListener('mouseenter', () => {
                this.addZoomEffect();
            });
            
            productImage.addEventListener('mouseleave', () => {
                this.removeZoomEffect();
            });
        }
    }

    addZoomEffect() {
        const productImage = document.querySelector('.product-image');
        if (productImage) {
            productImage.style.transform = 'scale(1.05)';
            productImage.style.transition = 'transform 0.3s ease';
        }
    }

    removeZoomEffect() {
        const productImage = document.querySelector('.product-image');
        if (productImage) {
            productImage.style.transform = 'scale(1)';
        }
    }
}

// WhatsApp Integration
class WhatsAppIntegration {
    constructor() {
        this.phoneNumber = '+91 8971438985'; // ACHAN'S contact number
        this.init();
    }

    init() {
        const whatsappBtn = document.querySelector('.whatsapp-btn');
        if (whatsappBtn) {
            whatsappBtn.href = `https://wa.me/${this.phoneNumber.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in ordering Achan's Bellam Pootharekulu`;
        }
    }
}

// Delivery Platform Integration
class DeliveryPlatforms {
    constructor() {
        this.swiggyUrl = '#'; // Replace with actual Swiggy URL
        this.zomatoUrl = '#'; // Replace with actual Zomato URL
        this.init();
    }

    init() {
        // Header scroller links
        const swiggyLink = document.getElementById('swiggy-link');
        const zomatoLink = document.getElementById('zomato-link');
        
        if (swiggyLink) {
            swiggyLink.href = this.swiggyUrl;
        }
        if (zomatoLink) {
            zomatoLink.href = this.zomatoUrl;
        }

        // Platform icons links
        const swiggyIconLink = document.getElementById('swiggy-icon-link');
        const zomatoIconLink = document.getElementById('zomato-icon-link');
        
        if (swiggyIconLink) {
            swiggyIconLink.href = this.swiggyUrl;
        }
        if (zomatoIconLink) {
            zomatoIconLink.href = this.zomatoUrl;
        }

        // Order now button functionality
        const orderNowBtn = document.querySelector('.order-now-btn');
        if (orderNowBtn) {
            orderNowBtn.addEventListener('click', () => {
                this.showOrderOptions();
            });
        }
    }

    showOrderOptions() {
        // Create modal or dropdown for order options
        const modal = document.createElement('div');
        modal.className = 'order-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Choose Your Order Platform</h3>
                <div class="modal-buttons">
                    <a href="${this.swiggyUrl}" class="modal-btn swiggy-modal-btn" target="_blank">
                        <i class="fas fa-utensils"></i>
                        Order on Swiggy
                    </a>
                    <a href="${this.zomatoUrl}" class="modal-btn zomato-modal-btn" target="_blank">
                        <i class="fas fa-motorcycle"></i>
                        Order on Zomato
                    </a>
                </div>
            </div>
        `;

        // Add modal styles
        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            .order-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            .modal-content {
                background: white;
                padding: 40px;
                border-radius: 20px;
                text-align: center;
                max-width: 400px;
                width: 90%;
                position: relative;
                animation: slideUp 0.3s ease;
            }
            .close-modal {
                position: absolute;
                top: 15px;
                right: 20px;
                font-size: 2rem;
                cursor: pointer;
                color: #999;
            }
            .modal-content h3 {
                margin-bottom: 30px;
                color: #2c3e50;
            }
            .modal-buttons {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            .modal-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                padding: 15px 20px;
                border-radius: 10px;
                text-decoration: none;
                font-weight: 600;
                transition: transform 0.3s ease;
            }
            .modal-btn:hover {
                transform: translateY(-2px);
            }
            .swiggy-modal-btn {
                background: #FF6B35;
                color: white;
            }
            .zomato-modal-btn {
                background: #E23744;
                color: white;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;

        document.head.appendChild(modalStyles);
        document.body.appendChild(modal);

        // Close modal functionality
        const closeModal = modal.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
            document.body.removeChild(modal);
            document.head.removeChild(modalStyles);
        });

        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
                document.head.removeChild(modalStyles);
            }
        });
    }
}

// Smooth Scrolling for Navigation
class SmoothScrolling {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            observer.observe(section);
        });
    }
}

// Phone Number Display Enhancement
class PhoneDisplay {
    constructor() {
        this.phoneNumber = '+91 8971438985'; // ACHAN'S contact number
        this.init();
    }

    init() {
        // Update all phone number references
        const phoneLinks = document.querySelectorAll('.phone-link');
        phoneLinks.forEach(link => {
            link.href = `tel:${this.phoneNumber}`;
            link.textContent = this.phoneNumber;
        });

        // Add click-to-call functionality
        const phoneInfo = document.querySelector('.phone-info');
        if (phoneInfo) {
            phoneInfo.style.cursor = 'pointer';
            phoneInfo.addEventListener('click', () => {
                window.location.href = `tel:${this.phoneNumber}`;
            });
        }
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProductImageEnhancement();
    new WhatsAppIntegration();
    new DeliveryPlatforms();
    new SmoothScrolling();
    new ScrollAnimations();
    new PhoneDisplay();
});

// Add CSS for scroll animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyles);

