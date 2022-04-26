"use strict"

console.log("hellow animation");
window.onload = function(){
    //hide the preloader
    document.querySelector(".preloader").style.display = "none";
}

// Loading page animation
gsap.to('.layer-1', {y: '-100vh', delay: .5});
gsap.to('.layer-2', {y: '-100vh', delay: .7});
gsap.to('.layer-3', {y: '-100vh', delay: .9});
gsap.to('.overlay', {y: '-100vh', delay: 1.5});



// BackToTop animated button


// let h1 = document.querySelector("h1");

// gsap.from("h1", {opacity: 0, stagger: 2, duration: 1, y: -50})

// document.querySelector("#cta").addEventListener('click',  () => {
//     h1.reversed() ? h1.play () : h1.reverse();
// })