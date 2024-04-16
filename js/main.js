let musicPlayer =document.querySelector(".music-player-container")
let togglePlayer =document.querySelector(".toggle-player")


let trackInfo =document.querySelector(".track-info")
let trackName =document.querySelector(".track-name")
let trackArtist =document.querySelector(".track-artist")
let trackNav =document.querySelector(".track-nav")

// Selecting the buttons
let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

// Adding event listeners to the buttons
playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);





let trackIndex = 0;
let isPlaying = false;
let isHidden =true;

let currentTrack =document.createElement("audio");
let soundBars =document.querySelector(".sound-bars")

togglePlayer.addEventListener("click" ,function () {
    isHidden =  !isHidden
    if (isHidden) {
        musicPlayer.classList.remove("hide");
        togglePlayer.innerHTML = '<ion-icon name="remove-outline"></ion-icon>' ;
        trackInfo.style.transitionDelay ="0.4s";
        trackNav.style.transitionDelay ="0.4s";


        
    } else {
        musicPlayer.classList.add("hide");
        togglePlayer.innerHTML = '<ion-icon name="add-outline"></ion-icon>' ;
        trackInfo.style.transitionDelay ="0s";
        trackNav.style.transitionDelay ="0s";
    }
});

//load the Animation 
let soundBarsLottie = bodymovin.loadAnimation({
    container:soundBars,
    renderer:"svg",
    loop:true,
    autoPlay:false,
    path:"https://lottie.host/073ee7b5-dc37-4387-b7dc-278e9b3c0581/FmF36ygnHk.json "
})

let trackList =[
    {
        name:"Serenity",
        artist:"michelle",
        path:"./songs/serene-view.mp3",
    },
    {
        name:"Relaxation",
        artist:"Ragnar",
        path:"./songs/relaxation.mp3",
    },
    {
        name:"play it",
        artist:"witch now",
        path:"./songs/island-beat.mp3",
    },
    
]

function loadTrack(trackIndex){
 currentTrack.src =trackList[ trackIndex].path;
 currentTrack.load();
 trackName.textContent = trackList[trackIndex].name;
 trackArtist.textContent = trackList[trackIndex].artist;
currentTrack.addEventListener("ended", nextTrack)

}

loadTrack(trackIndex);

function playPauseTrack () {
    if(!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    currentTrack.play();
    isPlaying =true;
    playPauseBtn.innerHTML = '<ion-icon name="pause-sharp"></ion-icon>' ;
    soundBarsLottie.playSegment( [0,120], true);
}

function pauseTrack() {
    currentTrack.pause();
    isPlaying =false;
    playPauseBtn.innerHTML = '<ion-icon name="play-sharp"></ion-icon>' ;
    soundBarsLottie.stop();
}

function nextTrack() {
    if (trackIndex < trackList.length - 1) {
        trackIndex += 1; // Increment track index
    } else {
        trackIndex = 0; // Reset to the first track if at the end of the list
    }
    loadTrack(trackIndex); // Load the next track
    playTrack(); // Start playing the next track automatically
}

function prevTrack() {
    if (trackIndex > 0) {
        trackIndex -= 1; // Decrement track index
    } else {
        trackIndex = trackList.length - 1; // Set to the last track if at the beginning of the list
    }
    loadTrack(trackIndex); // Load the previous track
    playTrack(); // Start playing the next track automatically
}


