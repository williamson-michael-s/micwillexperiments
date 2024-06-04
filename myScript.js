document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#575757';
        });

        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
        });
    });

    const dropdownLinks = document.querySelectorAll('nav ul li .dropdown a');

    dropdownLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#575757';
        });

        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
        });
    });
});
