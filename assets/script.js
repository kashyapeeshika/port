

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

