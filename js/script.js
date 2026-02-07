document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe Timeline Items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Observe Project Cards (Staggered effect)
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
    });

    // 2. Glassmorphic Nav Enhancement - Perfect floating effect
    const glassNav = document.querySelector('.glass-nav');
    if (glassNav) {
        let lastScroll = 0;
        const scrollThreshold = 80;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add scrolled class for enhanced floating effect
            if (currentScroll > scrollThreshold) {
                glassNav.classList.add('scrolled');
            } else {
                glassNav.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    // 3. Contact Cards - Add subtle animation
    document.querySelectorAll('.contact-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // 4. New Project Timeline - Accordion System
    const timelineProjects = document.querySelectorAll('.timeline-project');

    timelineProjects.forEach(project => {
        const header = project.querySelector('.project-header');

        header.addEventListener('click', () => {
            const isActive = project.classList.contains('active');

            // Close all other projects
            timelineProjects.forEach(otherProject => {
                if (otherProject !== project) {
                    otherProject.classList.remove('active');
                    const details = otherProject.querySelector('.project-details');
                    details.style.maxHeight = null;
                }
            });

            // Toggle current project
            if (!isActive) {
                project.classList.add('active');
                const details = project.querySelector('.project-details');
                const content = project.querySelector('.details-content');

                // Set max-height for animation
                details.style.maxHeight = content.scrollHeight + "px";

                // Optional: Scroll to make sure it's visible
                setTimeout(() => {
                    project.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            } else {
                project.classList.remove('active');
                const details = project.querySelector('.project-details');
                details.style.maxHeight = null;
            }
        });
    });

    console.log("Portfolio Technique loaded ✨");
});
