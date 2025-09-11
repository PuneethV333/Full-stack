var path_val = `M 10 100 Q 250 100 490 100`;
var path_val_final = `M 10 100 Q 250 100 490 100`;

var string = document.querySelector('#string');

string.addEventListener("mousemove", (dets) => {
    path_val = `M 10 100 Q ${dets.clientX} ${dets.clientY} 490 100`;

    gsap.to("svg path", {
        attr: { d: path_val },
        duration: 0.2,         
        ease: "power3.out",    
    });
});


string.addEventListener("mouseleave",() => {
    gsap.to("svg path",{
        attr:{d: path_val_final},
        duration:1.5, 
        ease:"elastic.out(1,0.2)"
    })

})