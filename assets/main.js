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

// Select all the dropdown parent items
const dropdownParents = document.querySelectorAll('.dropdown-parent');

dropdownParents.forEach(parent => {
    parent.addEventListener('click', function(event) {
        
        // Check if the screen is mobile-sized (you can adjust the 768px width)
        if (window.innerWidth <= 768) {
            
            // Stops the "MUSIC" or "SHOP" link from instantly jumping down the page
            event.preventDefault(); 
            
            // Toggles the menu open and closed when you tap it
            this.classList.toggle('mobile-open'); 
        }
    });
});

// Optional: Close the menu if the user taps anywhere else on the screen
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
        dropdownParents.forEach(parent => {
            // If the click was NOT inside the dropdown, close it
            if (!parent.contains(event.target)) {
                parent.classList.remove('mobile-open');
            }
        });
    }
});