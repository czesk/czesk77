var btn = document.querySelector('#show-or-hide');
var tiltcard = document.querySelector ('.tiltcard');
var botao = document.querySelector ('.botao');


VanillaTilt.init(document.querySelector('.tiltcard'), {
    max: 25,
    speed: 400,
    maxglare: 1
});

 
btn.addEventListener('click', function() {
    if(botao.style.display === 'block') {
        tiltcard.style.display = 'none';
    } else (tiltcard.style.display === 'block') 
        botao.style.display = 'none'
    

});

btn.addEventListener('click', function() {
    if(botao.style.display === 'block') {
        tiltcard.style.display = 'none';
    } else (botao.style.display === 'none') 
        tiltcard.style.display = 'block';
    

});
    

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate ({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"});

});

let Lenght=document.querySelector('.lenght')
let playbtn=document.querySelector('.play')
let audio=document.querySelector('.musica')


audio.onloadedmetadata=function(){
    Lenght.max=audio.duration;
    Lenght.value=audio.currentTime;
}


playbtn.addEventListener('click', ()=>{
    if(playbtn.classList.contains("bx-pause")){
    audio.pause();
    playbtn.classList.remove("bx-pause")
    playbtn.classList.add("bx-play")
}
else {
    audio.play();
    playbtn.classList.add("bx-pause")
    playbtn.classList.remove("bx-play")
    }
})

setInterval(() => {
    Lenght.value=audio.currentTime;
}, 500);

Lenght.addEventListener('change', ()=>{
    audio.play();
    audio.currentTime=Lenght.value;
    playbtn.classList.add("bx-pause")
    playbtn.classList.remove("bx-play")
    })
