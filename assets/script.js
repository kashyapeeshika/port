document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const toggle = document.querySelector(".dropdown-toggle");

    toggle.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        dropdown.classList.toggle("active"); // Toggle dropdown visibility
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});





















// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".dropdown > a").forEach(button => {
//         button.addEventListener("click", function (event) {
//             event.preventDefault();
//             let dropdown = this.parentElement;
            
//             document.querySelectorAll(".dropdown").forEach(item => {
//                 if (item !== dropdown) {
//                     item.classList.remove("active");
//                 }
//             });

//             dropdown.classList.toggle("active");
//         });
//     });

//     document.addEventListener("click", function (event) {
//         if (!event.target.closest(".dropdown")) {
//             document.querySelectorAll(".dropdown").forEach(dropdown => {
//                 dropdown.classList.remove("active");
//             });
//         }
//     });
// });

// Ensure GSAP is loaded before running animation
// document.addEventListener("DOMContentLoaded", function() {
//     gsap.from(".back-image", {
//         y: "-100vh",   // Starts off-screen (drops down from the top)
//         opacity: 0,    // Starts invisible
//         duration: 1.5, // Animation duration
//         ease: "power2.out" // Smooth ease-out effect
//     });
// });



// document.addEventListener("DOMContentLoaded", function() {
//     gsap.from([".container", ".intro"], { // Pass as an array
//         y: "-100vh",   // Starts off-screen (drops down from the top)
//         opacity: 0,    // Starts invisible
//         duration: 1.5, // Animation duration
//         delay: 1.5,    // 1.5s delay before animation starts
//         ease: "power2.out" // Smooth ease-out effect
//     });
// });


























// ------------------------------------------------------------------------------------------
// Introduction
gsap.registerPlugin(ScrollTrigger);

gsap.from(".intro a", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".svg-container",  // Animation starts when .intro enters the viewport
        start: "top top",   // Trigger when .intro reaches 80% of viewport height
        end: "bottom 80%",     // Optional: define an end point if needed
        toggleActions: "play none none none", // Play once, no reset
    }
});

// -------------------------------------------------------------------------------------------
// Projects
gsap.registerPlugin(ScrollTrigger);

gsap.from(".projects a", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".project a",  
        start: "top top",   
        end: "bottom 80%",    
        toggleActions: "play none none none", 
    }
});

// -------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Svg of echo, pal and dashboard

gsap.registerPlugin(ScrollTrigger);

[".echo-container", ".pal-container", ".dashboard-container"].forEach((selector) => {
    gsap.from(selector, {
        x: "100vw",   // Start off-screen right
        opacity: 0,   // Hide initially
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: selector,  // Each div triggers its own animation
            start: "top 80%",   // Start animation when 80% of the div is in view
            end: "top 50%",     // End animation when it reaches 50% of the viewport
            scrub: 1,           // Smooth scrolling effect
        }
    });
});
