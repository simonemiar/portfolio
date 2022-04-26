"use strict";

console.log("hellow burger");

document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger_container');
    const nav = document.querySelector('.navbar');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

