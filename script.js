// Project data
const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with React and Node.js. Features include user authentication, product management, and payment integration.',
        image: './assets/ecommerce.svg',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        github: 'https://github.com/muharremkoser/ecommerce-platform',
        demo: 'https://ecommerce-demo.muharremkoser.com'
    },
    {
        title: 'Task Management System',
        description: 'A collaborative task management application built with Vue.js and Django. Includes real-time updates and team collaboration features.',
        image: './assets/taskmanager.svg',
        technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebSocket'],
        github: 'https://github.com/muharremkoser/task-manager',
        demo: 'https://tasks.muharremkoser.com'
    },
    {
        title: 'Weather Dashboard',
        description: 'A weather dashboard that displays current weather and forecasts using OpenWeatherMap API. Built with vanilla JavaScript and CSS.',
        image: './assets/weather.svg',
        technologies: ['HTML', 'CSS', 'JavaScript', 'REST API'],
        github: 'https://github.com/muharremkoser/weather-dashboard',
        demo: 'https://weather.muharremkoser.com'
    }
];

// Load projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="btn secondary">GitHub</a>
                    <a href="${project.demo}" target="_blank" class="btn primary">Live Demo</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        try {
            // Here you would typically send the data to your backend
            console.log('Form submitted:', data);
            form.reset();
            alert('Thank you for your message! I will get back to you soon.');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again later.');
        }
    });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    handleContactForm();
    setupSmoothScroll();
});