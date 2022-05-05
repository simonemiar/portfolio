"use strict";

const paras = document.querySelectorAll('section');

window.addEventListener("DOMContentLoaded", animation);

function animation(){
    setup()
    document.querySelector("#loading_container").classList.remove("hidden");
    document.querySelector("body").style.position = "fixed";
    document.querySelector("body").style.overflowY = "scroll";
    setTimeout(removeAnimation, 500);
    setup()
}

function removeAnimation() {
    document.querySelector("#loading_container").style.display = "none";
    document.querySelector("body").style.position = "static";
    document.querySelector("body").style.overflowY = "auto";
  }


// INTERSECTION CODE 
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


// trying to work with history.pushState

// function loadProject(){
//     history.pushState({}, "", "/project");
//     document.querySelector("contact").innerHTML;
// }

// function loadContact(){
//     history.pushState({}, "", "/contact");
//     document.querySelector("contact").innerHTML;
// }


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


// so it do not reloader the whole page

// function process (response, urlPath){
//     document.querySelector("http:").innerHTML = project.html;
//     document.title = response.pageTitle;
//     window.history.pushState({"html": response.html,"pageTitle":response.pageTitle},"",urlPath);
// }

// window.onpopstate = function(e){
//     if(e.state){
//         document.querySelector("http:").innerHTML = e.state.html;
//         document.title = e.state.pageTitle;
//     }
// }

