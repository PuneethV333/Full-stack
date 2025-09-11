const breakText = () => {
    h1 = document.querySelector('h1')
    var Username = h1.textContent.split("");
    const mainDiv = document.getElementById("main");
    var clutter = ''
    const halfVal = Math.floor(Username.length / 2)
    Username.forEach((element, idx) => {
        if (idx < halfVal) {
            clutter += `<span class=a>${element}</span>`
        } else {
            clutter += `<span class=b>${element}</span>`
        }
    });
    h1.innerHTML = clutter
}
breakText()

gsap.from("h1 .a",{
    y:100,
    opacity:0,
    duration:2,
    delay:1,
    stagger:0.15
})

gsap.from("h1 .b",{
    y:100,
    opacity:0,
    duration:2,
    delay:1,
    stagger:-0.15
})
