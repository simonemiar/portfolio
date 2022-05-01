"use strict";

// INTERSECTION CODE 
window.addEventListener('DOMContentLoaded', setup); 

const paras = document.querySelectorAll('section');

function setup() {
    const options = {
        rootMargin: '0px 0px -120px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show', entry.isIntersecting); // here we add the class
                observer.unobserve(entry.target); // adds unobserve 
            } else {
                return;
            }
        })
    }, options);


    paras.forEach(p => observer.observe(p));
}


// const paras = document.querySelectorAll('section');

// const observer = new IntersectionObserver(entries =>{
//     entries.forEach(entry => {
//         entry.target.classList.toggle("show", entry.isIntersecting)
//     } )
//     // console.log(entries)
// }, {
//     threshold: 1 // animation begins when element is some amount visible, default: 0 
// })

// paras.forEach( card =>{
//     observer.observe(john[0])
// })
