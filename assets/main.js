document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery-slide');
  const prev = document.querySelector('.gallery-arrow.left');
  const next = document.querySelector('.gallery-arrow.right');
  let index = 0;

  function updateGallery() {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');

    if (prev) prev.classList.toggle('hidden', index === 0);
    if (next) next.classList.toggle('hidden', index === slides.length - 1);
  }

  prev?.addEventListener('click', () => {
    if (index > 0) index--;
    updateGallery();
  });

  next?.addEventListener('click', () => {
    if (index < slides.length - 1) index++;
    updateGallery();
  });

  updateGallery();
});


// Neil's JavaScript
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