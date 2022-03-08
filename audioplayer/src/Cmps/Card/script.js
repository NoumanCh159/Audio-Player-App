var count = 1;
// Audio Play & Pause Manipulation 
function player() {            
    var play = document.getElementById('player');
    var x = document.getElementById('btnPlay');
    if (count % 2 == 1) {
        play.play(); 
        if (!play.paused) {
            var tile = document.getElementById('AudioTile');
            tile.style.boxShadow = "0 0 15px 5px wheat";
            tile.style.transform = "scale(1.03)";
            document.getElementById('logo').classList.add('logo1');
            x.src = "pause.png";
        }
        else {
            console.log("Music not played yet!");
        }
    }
    else {
        play.pause();
        var tile = document.getElementById('AudioTile');
        tile.style.boxShadow = "0px 2px 10px brown";
        tile.style.transform = "scale(1)";
        document.getElementById('logo').classList.remove('logo1');
        x.src = "play.png";
    }
    count++;
}
// This code prefetches Audio's total duration
var forduration = document.getElementById("player");
// without loading metadata of audio, it wont prefetch
forduration.onloadedmetadata = function () {    
    var duration = document.getElementById("player").duration;
    var sec, min = new Number();
    sec = Math.floor(duration);
    min = Math.floor(sec / 60);
    min = min >= 10 ? min : '' + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : '0' + sec;
    document.getElementById('duration').innerHTML = " " + (min + ":" + sec);
}
// Progress bar of Audio
var audioseek = document.getElementById("player");        
audioseek.ontimeupdate = function audio() {
    document.getElementById('seek').value = document.getElementById("player").currentTime / document.getElementById("player").duration;

// This code prefetches Auido's current time    
    var currentTime = document.getElementById("player").currentTime;
    var sec = new Number();
    var min = new Number();
    sec = Math.floor(currentTime);
    min = Math.floor(sec / 60);
    min = min >= 10 ? min : '' + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : '0' + sec;
    document.getElementById('showtime').innerHTML = " &nbsp" + (min + ":" + sec + " ");
}
// Volume Click manipulation
function volume() {             
    var volumeset = document.getElementById('player');
    var x = document.getElementById('btnVol');
    if (count % 2 == 1) {
        volumeset.volume = 1;
        x.src = "volumedn.png";
    }
    else {    
        volumeset.volume = 0;
        x.src = "volumup.png";
    }
    count++;
}
// Volume Seek Manipulation
var volumeseek = document.getElementById("volseek");      
var play = document.getElementById('player');
volumeseek.onchange = function seekvolume() {
    play.volume = volumeseek.value / 100;
}