"use strict"

let h1 = document.querySelector("h1");

gsap.from("h1", {opacity: 0, stagger: 2, duration: 1, y: -50})

document.querySelector("#cta").addEventListener('click',  () => {
    h1.reversed() ? h1.play () : h1.reverse();
})