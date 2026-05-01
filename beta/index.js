// Select the header element
const header = document.querySelector('header');

// Listen for the scroll event on the window
window.addEventListener('scroll', () => {
    
    // Check if the page has scrolled more than 50 pixels
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Fades to black
    } else {
        header.classList.remove('scrolled'); // Fades back to clear
    }
    
});