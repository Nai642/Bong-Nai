// Menu Data
const menuData = {
    coffee: [
        {
            name: "Espresso",
            description: "Rich and bold single shot of pure coffee essence",
            price: "$3.50"
        },
        {
            name: "Cappuccino",
            description: "Perfectly balanced espresso with steamed milk and foam",
            price: "$4.50"
        },
        {
            name: "Latte",
            description: "Smooth espresso with velvety steamed milk",
            price: "$4.75"
        },
        {
            name: "Americano",
            description: "Espresso with hot water for a classic coffee experience",
            price: "$3.75"
        },
        {
            name: "Mocha",
            description: "Espresso with chocolate and steamed milk",
            price: "$5.25"
        },
        {
            name: "Flat White",
            description: "Espresso with microfoam for a silky texture",
            price: "$4.95"
        }
    ],
    food: [
        {
            name: "Avocado Toast",
            description: "Sourdough bread with smashed avocado, sea salt, and red pepper flakes",
            price: "$8.50"
        },
        {
            name: "Breakfast Burrito",
            description: "Scrambled eggs, cheese, and salsa wrapped in a warm tortilla",
            price: "$9.75"
        },
        {
            name: "Grilled Cheese",
            description: "Three-cheese blend on artisan bread, served with tomato soup",
            price: "$7.95"
        },
        {
            name: "Caesar Salad",
            description: "Fresh romaine lettuce with parmesan, croutons, and caesar dressing",
            price: "$10.50"
        },
        {
            name: "Chicken Panini",
            description: "Grilled chicken, pesto, and mozzarella on ciabatta bread",
            price: "$11.25"
        },
        {
            name: "Quinoa Bowl",
            description: "Quinoa with roasted vegetables, avocado, and tahini dressing",
            price: "$12.75"
        }
    ],
    desserts: [
        {
            name: "Tiramisu",
            description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
            price: "$6.50"
        },
        {
            name: "Chocolate Brownie",
            description: "Warm chocolate brownie served with vanilla ice cream",
            price: "$5.95"
        },
        {
            name: "Cheesecake",
            description: "New York style cheesecake with berry compote",
            price: "$6.75"
        },
        {
            name: "Apple Pie",
            description: "Homemade apple pie with cinnamon and caramel drizzle",
            price: "$5.50"
        },
        {
            name: "Chocolate Chip Cookies",
            description: "Freshly baked cookies with gooey chocolate chips",
            price: "$3.25"
        },
        {
            name: "Creme Brulee",
            description: "Classic French custard with caramelized sugar top",
            price: "$7.25"
        }
    ]
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuGrid = document.getElementById('menuGrid');
const tabButtons = document.querySelectorAll('.tab-btn');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling Function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Menu Tab Functionality
function initializeMenu() {
    // Set default active category
    const activeCategory = document.querySelector('.tab-btn.active').dataset.category;
    displayMenuItems(activeCategory);

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Display menu items for selected category
            const category = button.dataset.category;
            displayMenuItems(category);
        });
    });
}

// Display Menu Items
function displayMenuItems(category) {
    const items = menuData[category];
    menuGrid.innerHTML = '';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item loading';
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="price">${item.price}</div>
        `;
        menuGrid.appendChild(menuItem);
    });

    // Animate menu items
    setTimeout(() => {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('loaded');
            }, index * 100);
        });
    }, 100);
}

// Contact Form Handling
function initializeContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Navbar Scroll Effect
function initializeNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Intersection Observer for Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);
    
    // Observe elements with loading class
    document.querySelectorAll('.loading').forEach(el => {
        observer.observe(el);
    });
}

// Counter Animation for Stats
function initializeCounterAnimation() {
    const stats = document.querySelectorAll('.stat h3');
    
    const countUp = (element, target) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
        }, 30);
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                countUp(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Parallax Effect for Hero Section
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const coffeeCup = document.querySelector('.coffee-cup');
        
        if (hero && coffeeCup) {
            const rate = scrolled * -0.5;
            coffeeCup.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Add CSS for animations
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .menu-item {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .menu-item.loaded {
            opacity: 1;
            transform: translateY(0);
        }
        
        .stat h3 {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addAnimationStyles();
    initializeMenu();
    initializeContactForm();
    initializeNavbarScroll();
    initializeScrollAnimations();
    initializeCounterAnimation();
    initializeParallax();
    
    // Add loading animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('loading');
    });
    
    // Trigger initial animations
    setTimeout(() => {
        sections.forEach(section => {
            section.classList.add('loaded');
        });
    }, 100);
});

// Add global scroll to section function
window.scrollToSection = scrollToSection; 