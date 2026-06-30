const SUPABASE_URL = "https://gvtquivrqcjfjfhmmbgn.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dHF1aXZycWNqZmpmaG1tYmduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMjY5MzMsImV4cCI6MjA5NzkwMjkzM30.jDFA09L24SzTlPm9JlDFhuIIBOso_61QpjTSPkt-0vY";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
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
async function testConnection(){

const { data, error } = await supabaseClient
.from("products")
.select("*");

if(error){
console.log(error);
}else{
console.log(data);
}

}

testConnection();
