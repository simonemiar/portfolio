"use strict";

// INTERSECTION CODE 

window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const options = {
        rootMargin: '0px 0px -120px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show'); // here we add the class
                observer.unobserve(entry.target); // adds unobserve 
            } else {
                return;
            }
        })
    }, options);

    const paras = document.querySelectorAll('section');
    paras.forEach(p => observer.observe(p));
}
