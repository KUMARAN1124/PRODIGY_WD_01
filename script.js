document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('container');
    const navItems = nav.getElementsByTagName('a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(65, 105, 225, 0.9)'; 
        } else {
            nav.style.backgroundColor = '#333'; 
        }
    });

    
    Array.from(navItems).forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
            item.style.color = '#ffd700';
        });

        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
            item.style.color = 'white';
        });
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});