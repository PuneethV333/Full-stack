gsap.to('#box',{
    x:1200,
    duration:1.5,
    delay:1,
    rotate:360,
    // repeat : -1,
    // yoyo:true,

})

gsap.to('#box1',{
    x:1200,
    backgroundColor :'yellow',
    duration:1.5,
    
    delay:2.5
})
gsap.to('#box2',{
    x:1200,
   // backgroundColor :'yellow',
    duration:1.5,
    borderRadius:'50%',
    scale:0.5,
    delay:4
})




gsap.from('#box2',{
    x:1000,
    duration:2,
    delay:1
})


var tl = gsap.timeline()

tl.to("#box",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})

tl.to("#box1",{
    x:1500,
    duration:1.5
})

tl.to("#box2",{
    x:1500,
    duration:1.5,
    scale:.5
})

 var tl = gsap.timeline()
 tl.from("h1",{
    y : -20,
    opacity:0,
    duration:1,
    delay:0.5
    
 })
 tl.from("li",{
    y : -20,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
    
 })