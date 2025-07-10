# Brew & Bean Cafe Website

A modern, responsive cafe website built with HTML, CSS, and JavaScript. This project features a beautiful design with smooth animations, interactive menu system, and mobile-friendly layout.

## 🌟 Features

### Design & Layout
- **Modern & Responsive Design**: Beautiful cafe-themed design that works on all devices
- **Smooth Animations**: CSS animations and JavaScript-powered transitions
- **Interactive Navigation**: Fixed navbar with smooth scrolling and mobile hamburger menu
- **Hero Section**: Eye-catching landing section with animated coffee cup

### Menu System
- **Dynamic Menu Tabs**: Switch between Coffee, Food, and Desserts
- **Interactive Menu Items**: Hover effects and smooth transitions
- **Comprehensive Menu**: 18 menu items across 3 categories
- **Realistic Pricing**: Market-appropriate pricing for cafe items

### Interactive Features
- **Contact Form**: Functional contact form with validation
- **Notification System**: Success/error notifications for user feedback
- **Scroll Animations**: Elements animate as they come into view
- **Counter Animations**: Animated statistics in the About section
- **Parallax Effects**: Subtle parallax scrolling on hero section

### Technical Features
- **Mobile-First Design**: Fully responsive across all screen sizes
- **Performance Optimized**: Smooth animations and fast loading
- **Cross-Browser Compatible**: Works on all modern browsers
- **Accessibility**: Proper semantic HTML and keyboard navigation

## 📁 Project Structure

```
git_test/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. **Explore the website** - all functionality works without any server setup

## 🎨 Design Elements

### Color Scheme
- **Primary**: Coffee brown (#8B4513)
- **Secondary**: Light beige (#f5f5dc)
- **Accent**: Warm brown (#A0522D)
- **Text**: Dark gray (#333)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)
- **Icons**: Font Awesome 6.0

### Layout
- **Grid System**: CSS Grid for responsive layouts
- **Flexbox**: Used for component alignment
- **Container**: Max-width 1200px with responsive padding

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Font Awesome**: Icons for contact information and social links
- **Google Fonts**: Playfair Display and Poppins typography

## 🎯 Key JavaScript Features

### Menu System
```javascript
// Dynamic menu loading with smooth animations
function displayMenuItems(category) {
    // Loads menu items based on selected category
    // Animates items with staggered timing
}
```

### Form Validation
```javascript
// Contact form with email validation
function initializeContactForm() {
    // Validates all required fields
    // Checks email format
    // Shows success/error notifications
}
```

### Scroll Animations
```javascript
// Intersection Observer for scroll-triggered animations
function initializeScrollAnimations() {
    // Animates elements as they enter viewport
    // Smooth counter animations for statistics
}
```

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #f5f5dc;
    --accent-color: #A0522D;
}
```

### Adding Menu Items
Edit the `menuData` object in `script.js`:
```javascript
const menuData = {
    coffee: [
        {
            name: "Your Item",
            description: "Description here",
            price: "$X.XX"
        }
    ]
};
```

### Modifying Content
- **Text Content**: Edit directly in `index.html`
- **Images**: Replace placeholder elements with actual images
- **Contact Info**: Update contact details in the contact section

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📞 Contact Information

The website includes a functional contact form that:
- Validates all input fields
- Checks email format
- Shows success/error notifications
- Resets form after successful submission

## 🎭 Animations & Effects

### CSS Animations
- **Fade In Up**: Hero content and menu items
- **Float**: Coffee cup in hero section
- **Slide In**: Notifications
- **Hover Effects**: Buttons and menu items

### JavaScript Animations
- **Counter Animation**: Statistics counting up
- **Scroll Animations**: Elements animate on scroll
- **Parallax**: Coffee cup moves on scroll
- **Staggered Loading**: Menu items load with delays

## 🔧 Performance Features

- **Optimized Images**: CSS-based graphics where possible
- **Minimal Dependencies**: Only essential external resources
- **Efficient Animations**: Hardware-accelerated CSS transforms
- **Lazy Loading**: Elements animate only when needed

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share the project

---

**Enjoy your coffee! ☕** 