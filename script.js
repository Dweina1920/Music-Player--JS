const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

//titulo de las canciones

const songs = ["hey", "summer", "ukulele"];

//hacer un seguimiento de las canciones

let songIndex = 2;

//Detos iniciales al cargar Dom
loadSong(songs[songIndex]);

//Actualizar datos de canción

function loadSong(song) {
  title.innerHTML = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `img/${song}.jpg`;
}

//Event listeners


