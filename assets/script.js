// For Index dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  dropdownToggle.addEventListener("click", function (event) {
      event.preventDefault(); 
      dropdown.classList.toggle("opened"); 
  });


  document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
          dropdown.classList.remove("opened");
      }
  });
});



// Designer animation
var textWrapper = document.querySelector('.ml2');
let colors = ["#F4D35E", "#2274A5", "#97EAD2", "#F84AA7", "#FF3562", "#FA8334", "#EC4E20","#FF47DA","#FF9505","#016FB9","#FFFF00","#FF0000", "#00FF00","#1F51FF","#f9f940"];
        
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, (match) => {
let randomColor = colors[Math.floor(Math.random() * colors.length)];
  return `<span class='letter' style='color:${randomColor}'>${match}</span>`;
});
anime.timeline({ loop: false })  
.add({
      targets: '.ml2 .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i
    });

// Developer word animation 
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  })
  .add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  })
  .add({
    targets: '.ml11 .line',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo"
  }); 


  // Project desprtion animation 
  document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: '.ml12',
                    opacity: [0, 1],
                    translateY: [100, 0], 
                    easing: "easeOutExpo",
                    duration: 1000,
                });
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 }); 

    observer.observe(document.querySelector('.ml12'));
});

// Project animation
document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => { 
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateX: [-100, 0],
            easing: "easeOutExpo",
            duration: 1000,
            delay: 500
          });
        }, index * 500); 

        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.ml10').forEach(el => observer.observe(el));
});

// core container animation
document.addEventListener("DOMContentLoaded", function() {
  let observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              anime({
                  targets: '.ml13',
                  opacity: [0, 1],
                  translateY: [100, 0], 
                  easing: "easeOutExpo",
                  duration: 1000,
                  delay: 1000
              });
              observer.unobserve(entry.target); 
          }
      });
  }, { threshold: 0.5 }); 

  observer.observe(document.querySelector('.ml13'));
});

// Imange animation
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Splitting
  const results = Splitting({
      target: "[data-splitting]",
      by: "cells",
      image: true,
      rows: 8,
      columns: 8
  });

  // Create intersection observer for animation
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCells(entry.target);
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.2
  });

  // Observe the image element
  document.querySelectorAll('.image').forEach(img => observer.observe(img));
});

function animateCells(element) {
  const cells = element.querySelectorAll('.cell');
  
  gsap.to(cells, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: {
          amount: 1,
          grid: [8, 8],
          from: "random"
      }
  });
}
