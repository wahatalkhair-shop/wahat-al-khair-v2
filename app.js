console.log("Wahat Al Khair V2 Loaded");

const slides=document.querySelectorAll(".slide");

let current=0;

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){
current=0;
}

slides[current].classList.add("active");

},3000);
function toggleCart(){
    alert("Cart system will be added in Phase 3");
}
