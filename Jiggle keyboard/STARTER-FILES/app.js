let elem = document.getElementsByClassName("key");
let randomkey, random;
const jigglekey = () => {
    random = Math.floor(Math.random() * elem.length - 1);
    elem[random].classList.add("jiggle");
    randomkey = elem[random].getAttribute("data-key");
}
jigglekey();
document.addEventListener("keydown", (event) => {
    if (event.key.toUpperCase() === randomkey) {
        elem[random].classList.remove("jiggle");
        jigglekey();
    }
}, true);
