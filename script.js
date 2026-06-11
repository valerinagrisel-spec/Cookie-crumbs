// Smooth feedback button

const buttons = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .btn-nav"
);

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);

    });

});

// Navbar shadow saat scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.08)";
    } else {
        navbar.style.boxShadow =
            "0 3px 15px rgba(0,0,0,0.05)";
    }

});


// Hamburger Menu

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});