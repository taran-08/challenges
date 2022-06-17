const elem=document.getElementsByClassName("key");
console.log(elem);
const random= Math.floor(Math.random()*elem.length-1);
console.log(random);
elem[random].classList.add("jiggle");
function recheck({
    
});