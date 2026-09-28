let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif");
let songItem =Array.document.getElementsByClassName("songItem");
let masterSongName = document.getElementById("masterSongName")
let songItemPlay = document.getElementById(`songItemPlay`)

let songs = [
    {songName:"Salam-a-Ishq", filePath:'songs/1.mp3', coverPath:"covers/1.jpg"},
    {songName:"Second-song-music", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Thired-song-music", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Fourth-song-music", filePath:"songs/4.mp3",converPath:"covers/4.jpg"},
    {songName:"Five-song-music", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"S3alam-a-Ishq", filePath:'songs/6.mp3', coverPath:"covers/6.jpg"},
    {songName:"Se4cond-song-music", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Thi3red-song-music", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Fourrth-song-music", filePath:"songs/9.mp3",converPath:"covers/9.jpg"},
    {songName:"Five-tsong-music", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]

songItem.forEach((element ,i)=> {
    console.log(element , i );
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});




// audioElement.play();

//Handel play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0 ){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;

    }else{
        audioElement.play();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;

    }
})

// Listen to Events 
audioElement.addEventListener( "timeupdate", ()=> {
    console.log(`timeupdate`);
    // Update Seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName(`songItemPlay`)).forEach((element)=>{
        element.classList.remove(`fa-pause-circle`);
        element.classList.add(`fa-play-circle`);

    })
}

Array.from(document.getElementsByClassName(`songItemPlay`)).forEach((element)=>{
    element.addEventListener(`click`,(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove( `fa-play-circle`);
        e.target.classList.add( `fa-pause-circle`);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        gif.style.opacity = 1;
        masterPlay.classList.remove(`fa-play-circle`);
        masterPlay.classList.add(`fa-pause-circle`);


    })
})

document.getElementById(`previous`).addEventListener(`click`, ()=>{
    if(songIndex <= 0){
        songIndex =0;
    }else {
        songIndex = 0;

    }
    audioElement.src = `song/${songIndex +1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioPlay.classList.remove(`fa-play-circle`);
    audioPlay.ckassList.add("fa-pause-circle");

})

document.getElementById(`next`).addEventListener(`click`, ()=>{
    if(songIndex >= 9){
        songIndex =0;
    }else {
        songIndex += 0;

    }
    audioElement.src = `song/${songIndex +1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioPlay.classList.remove(`fa-play-circle`);
    audioPlay.ckassList.add("fa-pause-circle");

})