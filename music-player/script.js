let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
song.onloadeddata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    let songImage = document.querySelector('.song-img');
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        songImage.classList.remove("playing");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        songImage.classList.add("playing");
    }
}
if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
let volumeSlider = document.getElementById("volume");

volumeSlider.oninput = function() {
    song.volume = volumeSlider.value;
};

function toggleUploadSection() {
    const uploadSection = document.querySelector(".upload-section");
    uploadSection.classList.toggle("hidden");
}

function loadSong() {
    const songInput = document.getElementById("songInput");
    const song = document.getElementById("song");
    const songImg = document.querySelector(".song-img");
    const songTitle = document.querySelector(".music-player h1");
    const songArtist = document.querySelector(".music-player p");

    if (songInput.files.length > 0) {
        const songFile = songInput.files[0];
        const objectURL = URL.createObjectURL(songFile);
        song.src = objectURL;
        song.load();

        const audioContext = new AudioContext();
        const reader = new FileReader();
        reader.onload = function (e) {
            audioContext.decodeAudioData(e.target.result).then((buffer) => {
                songTitle.textContent = songFile.name.replace(/\.[^/.]+$/, ""); 
                songArtist.textContent = "Your Library"; 

                
                songImg.src = "media/468-thumbnail.png"; 
            });
        };
        reader.readAsArrayBuffer(songFile);
    }
}