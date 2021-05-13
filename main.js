// tady je místo pro náš program

let paragraph = document.getElementById("js-paragraph");
let audio = document.getElementById("js-audio");

let turnRed = document.getElementById("turnRed");
let makeBigger = document.getElementById("makeBigger");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let mute = document.getElementById("mute");
let halfMute = document.getElementById("halfMute");
let loud = document.getElementById("loud");
let reset = document.getElementById("reset");

turnRed.addEventListener("click", prepniZcervenani);
makeBigger.addEventListener("click", zvetsitPismo);
play.addEventListener("click", prehraj);
pause.addEventListener("click", pauzni);
mute.addEventListener("click", functionName=function(){upravHlasitost(0)});
halfMute.addEventListener("click", functionName=function(){upravHlasitost(0.5)});
loud.addEventListener("click", functionName=function(){upravHlasitost(1)});
reset.addEventListener("click", resetuj);

/**
 * Funkce přidá nebo odebere na prvku třídu, která se stará o červenou barvu písma
 * 
 * @param {string} elementId 
 */
function prepniZcervenani() {
    paragraph.classList.toggle('cerveny-text');
};

/**
 * Funkce zvětší/změnší písmo v elementu o definovanou velikost
 * 
 * @param {string} elementSelector 
 * @param {int} fontSizeChange 
 */
function zvetsitPismo() {
    let fontSizeChange = 1;
    let currentFontSize = parseInt(paragraph.style.fontSize);
    paragraph.style.fontSize = (currentFontSize + fontSizeChange) + 'px';
};

/*--------------*/
/* AUDIO FUNKCE */
/*--------------*/

function prehraj() {
    audio.play();
}
function pauzni() {
    audio.pause();
}
function upravHlasitost(volumeValue) {
    audio.volume = volumeValue;
}
function resetuj() {
    audio.currentTime = 0;
}