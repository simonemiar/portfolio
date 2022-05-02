"use strict"

console.log("hellow animation");

// PRELOADER
let loader = document.querySelector("#preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
})



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


// let image = document.querySelector(".image_section");

//reverse not working
// document.querySelector("#cta").addEventListener('click',  () => {
//     h1.reversed() ? h1.play () : h1.reverse();
// })