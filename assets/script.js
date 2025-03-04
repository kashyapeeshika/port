

// Designer animation
var textWrapper = document.querySelector('.ml2');
let colors = ["#F4D35E", "#2274A5", "#97EAD2", "#F84AA7", "#FF3562", "#FA8334", "#EC4E20","#FF47DA","#FF9505","#016FB9","#FFFF00","#FF0000", "#00FF00","#1F51FF","#f9f940"];
        
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, (match) => {
let randomColor = colors[Math.floor(Math.random() * colors.length)];
  return `<span class='letter' style='color:${randomColor}'>${match}</span>`;
});
anime.timeline({ loop: false })  // Run once
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

// Anime.js timeline (runs once)
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
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo"
  }); 
