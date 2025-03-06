function toggleMenu() {
    let navLinks = document.querySelector('.nav-links');
    let hamburger = document.querySelector('.hamburger');

    if (navLinks.classList.contains('active')) {
        navLinks.style.opacity = '0';
        setTimeout(() => {
            navLinks.classList.remove('active');
        }, 300); // Matches CSS transition time
        hamburger.innerHTML = "&#9776;"; // Change back to hamburger
    } else {
        navLinks.classList.add('active');
        setTimeout(() => {
            navLinks.style.opacity = '1';
        }, 10);
        hamburger.innerHTML = "&times;"; // Change to "X"
    }
}
