let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
//timeline to create multiple animations

//ex:  timeline.to(".text",5,{x:500})
//makes the text slide to 500 at the end of 5 sec

timeline
  .to(".rock", 10, { y: -300 })
  .to(".girl", 10, { y: -200 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });


  // to hook this timeline animation to the scroll
let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "150%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

