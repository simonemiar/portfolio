"use strict"

console.log("hellow animation");

// Loading page animation
gsap.to('.layer-1', {y: '-100vh', delay: .4});
// gsap.to('.layer-2', {y: '-100vh', delay: .3});
// gsap.to('.layer-3', {y: '-100vh', delay: .5});
gsap.to('.overlay', {y: '-100vh', delay: 1});

// font page animation - first section 
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}
// BackToTop animated button


let image = document.querySelector(".image_section");

gsap.from("main", {opacity: 0, stagger: 2, duration: 2, y: -50})

// document.querySelector("#cta").addEventListener('click',  () => {
//     h1.reversed() ? h1.play () : h1.reverse();
// })