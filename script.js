const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
  var t1 = gsap.timeline();
  t1.from("#nav",{
    y:'-10',
    opacity:0,
    duration:1.5,
    ease:Expo.easeInOUt
  })
}
function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
      document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
circleMouseFollower();
