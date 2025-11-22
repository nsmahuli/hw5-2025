var video;

// Page load: Initialize the video element and turn off autoplay and turn off looping.

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

// Play Button: Play the video and update the volume information.

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").textContent = (video.volume * 100) + "%";
	video.play();
});

// Pause Button: Pause the video.

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


// Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("New speed: " + video.playbackRate);
});

// Speed Up: Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down.

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.9;
	console.log("New speed: " + video.playbackRate);
});

// Skip Ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current location: " + video.currentTime);
});

// Mute: Mute/unmute the video and update the text in the button.

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute Video");
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

// Volume Slider: Change the volume based on the slider and update the volume information.

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = (video.volume * 100) + "%";
	console.log("Current volume: " + video.volume);
});

// Styled: Utilize the existing oldSchool class on the video element

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Style");
	video.classList.add("oldSchool");
});

// Original: Remove the oldSchool class from the video.

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Old School Style");
	video.classList.remove("oldSchool");
});