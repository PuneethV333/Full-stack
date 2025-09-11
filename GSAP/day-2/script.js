gsap.registerPlugin(ScrollTrigger);
gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360
});

gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: '#page2 #box',
    scroller: 'body',
    markers: true,
    start: 'top 60%' ,
    scrub:2,
    pin:true
  }
});


gsap.registerPlugin(ScrollTrigger)
gsap.from("#page2 h1",{
  opacity:0,
  x:500,
  duration : 2,
  scrollTrigger:{
    trigger:"#page2 h1",
    scoller:"body",
    markers:true,
    scrub:true
  }
})
gsap.registerPlugin(ScrollTrigger)
gsap.from("#page2 h2",{
  opacity:-1,
  x:1500,
  duration : 2,
  scrollTrigger:{
    trigger:"#page2 h1",
    scoller:"body",
    markers:true,
    scrub:true

  }
})