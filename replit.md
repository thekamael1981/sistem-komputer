# Sistema Komputer - Media Pembelajaran Informatika

## Overview

This is an interactive static web application for teaching Computer Systems (Sistem Komputer) to Indonesian high school students (grades X, XI, XII). The application provides comprehensive educational content with progressive learning levels (Dasar-Menengah-Lanjut), interactive quizzes, animated visualizations, and pedagogical components (Apersepsi, Pertanyaan Pemantik, Refleksi) following modern Indonesian educational methodology.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (July 26, 2025)

Enhanced the application with comprehensive educational structure:
- Added Apersepsi (pre-learning context) for each grade level
- Integrated Pertanyaan Pemantik (stimulating questions) to engage students
- Implemented three-tier learning levels (Dasar/Menengah/Lanjut) for each grade
- Added Refleksi sections for learning assessment and future planning
- Expanded content depth with real-world analogies and technical details
- Enhanced visual design with color-coded learning levels and improved responsiveness

## System Architecture

### Frontend Architecture
- **Pure Static Web Application**: Built entirely with HTML, CSS, and vanilla JavaScript
- **Single Page Application (SPA)**: All content loads on one page with JavaScript-based navigation
- **No Framework Dependencies**: Uses vanilla JavaScript for maximum compatibility and minimal overhead
- **Responsive Design**: Mobile-first approach supporting both smartphone and desktop layouts

### Technology Stack
- **HTML5**: Semantic markup with Indonesian language support
- **CSS3**: Modern styling with gradients, animations, and responsive grid
- **Vanilla JavaScript**: ES6+ features for interactivity and state management
- **Font Awesome**: Icon library for visual enhancement
- **No Backend**: Completely client-side application

## Key Components

### 1. Navigation System
- **Tab-based Navigation**: Three main sections for grades X, XI, and XII
- **Active State Management**: JavaScript-controlled tab switching
- **Responsive Menu**: Adapts to different screen sizes
- **Visual Hierarchy**: Clear distinction between learning phases and content levels

### 2. Educational Content Structure
Each grade level now includes comprehensive pedagogical components:

#### **Pedagogical Framework**
- **Apersepsi**: Real-world context to connect student experiences with lesson content
- **Pertanyaan Pemantik**: Stimulating questions to trigger curiosity and critical thinking
- **Progressive Learning Levels**: Three-tier structure for each grade
  - Level Dasar (Basic): Fundamental concepts with simple analogies
  - Level Menengah (Intermediate): Detailed explanations with technical depth
  - Level Lanjut (Advanced): Complex topics with practical applications
- **Refleksi**: Self-assessment questions and future learning plans

#### **Grade X Content Structure**
- **Level Dasar**: Basic computer system understanding with simple analogies
- **Level Menengah**: Detailed hardware/software/brainware categories and functions
- **Level Lanjut**: System interactions, brainware roles, and feedback cycles

#### **Grade XI Content Structure**
- **Level Dasar**: CPU components (ALU, Control Unit, Register) with simple explanations
- **Level Menengah**: Fetch-Decode-Execute cycle and memory hierarchy
- **Level Lanjut**: Performance optimization techniques and system factors

#### **Grade XII Content Structure**
- **Level Dasar**: Operating system concepts with everyday analogies
- **Level Menengah**: OS functions and detailed booting process
- **Level Lanjut**: Virtualization technologies and cloud computing models

### 3. Interactive Quiz System
- **Randomized Questions**: Questions shuffle on each page load
- **Instant Feedback**: Immediate response when answers are selected
- **Score Tracking**: Real-time score calculation and display
- **State Management**: Separate quiz state for each grade level
- **Progress Indicators**: Visual feedback for quiz completion

### 4. Animation System
- **Educational Visualizations**: Animated diagrams showing:
  - Data flow from input to CPU to output (Grade X)
  - CPU instruction cycle: Fetch-Decode-Execute-Store (Grade XI)
  - Computer booting process from power-on to OS ready (Grade XII)
- **CSS Animations**: Smooth transitions, hover effects, and level-based color coding
- **JavaScript Animations**: Interactive elements and state changes
- **Progressive Visual Complexity**: Simple animations for basic levels, detailed for advanced levels

### 5. Teacher Branding
- **Consistent Header**: Teacher information displayed prominently
- **Professional Styling**: Clean, educational appearance

## Data Flow

### Quiz Flow
1. **Initialization**: Quiz data loaded from `data.js` on page load
2. **Randomization**: Questions shuffled using Fisher-Yates algorithm
3. **User Interaction**: Answer selection triggers validation
4. **Feedback Loop**: Immediate visual feedback and score updates
5. **Completion**: Final score display and option to restart

### Navigation Flow
1. **Tab Selection**: User clicks navigation tab
2. **State Update**: JavaScript updates active states
3. **Content Switch**: Corresponding section becomes visible
4. **Animation Trigger**: Smooth transitions between sections

## External Dependencies

### CDN Resources
- **Font Awesome 6.0.0**: Icon library loaded from CloudFlare CDN
- **No JavaScript Libraries**: All functionality implemented in vanilla JavaScript

### Browser Requirements
- **Modern Browsers**: Supports ES6+ features
- **No Polyfills**: Assumes modern browser environment
- **Responsive Support**: CSS Grid and Flexbox compatibility

## Deployment Strategy

### Static Hosting
- **File Structure**: Simple HTML/CSS/JS files
- **No Build Process**: Direct deployment of source files
- **CDN Friendly**: All assets can be cached effectively

### Hosting Options
- **Replit**: Direct deployment from Replit environment
- **GitHub Pages**: Static site hosting
- **Netlify/Vercel**: JAMstack deployment platforms
- **Traditional Web Hosting**: Any web server with static file support

### Performance Considerations
- **Minimal Dependencies**: Only essential external resources
- **Optimized Images**: SVG icons and CSS animations preferred
- **Caching Strategy**: Static assets with appropriate cache headers
- **Mobile Optimization**: Responsive design with mobile-first approach

### File Organization
```
/
├── index.html          # Main application entry point
├── style.css           # All styling and responsive design
├── script.js           # Application logic and interactivity
├── data.js             # Quiz questions and educational content
└── attached_assets/    # Additional resources and requirements
```

The application is designed to be completely self-contained and can be deployed anywhere that supports static file hosting, making it highly portable and easy to maintain.