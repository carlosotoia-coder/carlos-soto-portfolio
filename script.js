// animación al hacer scroll

function reveal(){

let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;

let elementTop=reveals[i].getBoundingClientRect().top;

let elementVisible=150;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);


// modo oscuro automático según sistema

if(window.matchMedia('(prefers-color-scheme: light)').matches){

document.body.style.background="white";

document.body.style.color="black";

}


// animación inicial

window.addEventListener("load",()=>{

document.querySelectorAll(".fade-in").forEach(el=>{

el.style.opacity=0;

setTimeout(()=>{

el.style.transition="1.5s";

el.style.opacity=1;

},300);

});

});
