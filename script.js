function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".slide-left, .slide-right, .fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Re-triggers animation when scrolling back
            }
        });
    }, { threshold: 0.2 });

    elementsToAnimate.forEach(element => observer.observe(element));
});
