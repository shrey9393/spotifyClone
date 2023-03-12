console.log("hi")
songIndex = 0;
let audioElement = new Audio('assets/song.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById('masterSongName');

// let progress = 0;


let songs = [
    { songName: "Pink Venom", filePath: "assets/song.mp3", coverPath: "assets/cover image.jpg" },
    { songName: "Amanda Black", filePath: "assets/Amanda Black.mp3", coverPath: "assets/Amanda Black.jpeg" },
    { songName: "Believer", filePath: "assets/Beliver.mp3", coverPath: "assets/beliver.jpg" },
    { songName: "Danger", filePath: "assets/Danger.mp3", coverPath: "assets/danger.jpg" },
    { songName: "Soweto Gospel Choir", filePath: "assets/Soweto Gospel Choir.mp3", coverPath: "assets/Soweto Gospel Choir.jpg" },
    { songName: "DDU-DU DDU-DU", filePath: "assets/dudu.mp3", coverPath: "assets/dudu.jpeg" },
]
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause")
        masterPlay.classList.add("fa-play")
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    // console.log(progress)
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause')
        element.classList.add('fa-play')

    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays()
        index = parseInt(e.target.id)
        audioElement.src = songs[index].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            e.target.classList.remove("fa-play")
            e.target.classList.add("fa-pause")
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            e.target.classList.remove("fa-pause")
            e.target.classList.add("fa-play")
            gif.style.opacity = 0;
        }
        
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")
        masterSongName.innerText = songs[index].songName;
    })
})
document.getElementById("forward").addEventListener("click", () => {
    if (index > 5) {
        index = 0;
    } else {
        index += 1;
    } audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play")
    masterPlay.classList.add("fa-pause")
    masterSongName.innerText = songs[index].songName;
    gif.opacity = 1;

})
document.getElementById("back").addEventListener("click", () => {
    if (index < 1) {
        index = 9;
    } else {
        index -= 1;
    }
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play")
    masterPlay.classList.add("fa-pause")
    gif.opacity = 1;
    masterSongName.innerText = songs[index].songName;
    console.log(songs[index].songName);

})