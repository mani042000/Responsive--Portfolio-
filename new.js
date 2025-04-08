// // Menu icon toggle
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');

//     // Toggle visibility of the navbar
//     if (navbar.classList.contains('active')) {
//         navbar.style.display = 'block';
//     } else {
//         navbar.style.display = 'none';
//     }
// };

// Function to handle menu toggle
function handleMenuToggle() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    // Toggle navbar visibility and icon state
    menuIcon.onclick = () => {
        if (window.innerWidth <= 768) {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');

            // Toggle visibility of the navbar
            if (navbar.classList.contains('active')) {
                navbar.style.display = 'block';
            } else {
                navbar.style.display = 'none';
            }
        }
    };
}

// Function to handle screen size changes
function handleResize() {
    if (window.innerWidth <= 768) {
        handleMenuToggle();
        // Ensure the navbar is displayed correctly on resize
        let navbar = document.querySelector('.navbar');
        if (navbar.classList.contains('active')) {
            navbar.style.display = 'block';
        } else {
            navbar.style.display = 'none';
        }
    } else {
        // Reset navbar visibility if the screen is wider than 768px
        let navbar = document.querySelector('.navbar');
        navbar.style.display = 'block'; // Or adjust as needed for larger screens
    }
}

// Initial setup
handleResize();

// Run handleResize on window resize
window.addEventListener('resize', handleResize);

// Optionally, you might want to add a scroll event listener if needed
window.addEventListener('scroll', () => {
    // Handle sticky header logic if required
});
