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
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

const text = this.value.toLowerCase();

const cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

const name = card.querySelector("h3").innerText.toLowerCase();

if(name.includes(text)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});

function filterProducts(type){

alert(type + " filter will connect with Supabase soon.");

}