window.addEventListener("wheel", (dets) => {
    // console.log(dets.deltaY)
    if (dets.deltaY > 0) {
        gsap.to("#mark", {
            transform: 'translateX(-100%)',
            duartion: 4,
            repeat: -1,
            ease: "none"
        })
    }else{
        gsap.to("#mark", {
            transform: 'translateX(100%)',
            duartion: 4,
            repeat: -1,
            ease: "none"
        })
    }
})


