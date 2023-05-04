const songs = [
  {
    songname: "Yarım kalanlar",
    singer: "Taladro",
    song: "yarim.mp3",
    id: 0,
    image: "third.jpeg",
  },

  {
    songname: "Yarım kalan sigara",
    singer: "NO1",
    song: "sigara.mp3",
    id: 1,
    image: "first.jpg",
  },

  {
    songname: "Ağustos sırılsıklam",
    singer: "Alper Ayyıldız",
    song: "agustos.mp3",
    id: 2,
    image: "second.jpg",
  },
];

const songImg = document.querySelector("#songimg");
const songName = document.querySelector("#songname");
const song = document.querySelector("#audio");
const btnPreSong = document.querySelector("#previous");
const btnNextSong = document.querySelector("#next");
const btnPlayPause = document.querySelector("#pause");

let currentSong = 0;
writeData(currentSong);

btnPlayPause.onclick = () => (song.paused ? playSong() : pauseSong());


btnNextSong.onclick = () => {
  if (currentSong >= songs.length - 1) {
    currentSong = 0;
  } else {
    currentSong++;
  }
  writeData(currentSong);
  playSong();
};
btnPreSong.onclick = () => {
  if (currentSong === 0) {
    currentSong = songs.length - 1;
  } else {
    currentSong--;
  }
  writeData(currentSong);
  playSong();
};
function writeData(c) {
  songImg.src = `./images/${songs[c].image}`;
  songName.textContent = ` ${songs[c].singer}-${songs[c].songname} `;
  song.src = `./songs/${songs[c].song}`;
}

function playSong() {
  song.play();
}
function pauseSong() {
  song.pause();
}

btnPlayPause.addEventListener("click", () =>{
  btnPlayPause.classList.toggle("played")
  if(btnPlayPause.classList.contains('played')){
    btnPlayPause.innerHTML='<i class="fa-solid fa-pause" style="color: #ffffff;"></i>'
    
  } else{
    btnPlayPause.innerHTML='<i class="fa-solid fa-play" style="color: #ffffff;"></i>'
  }

}
);

