var drumButtons = document.querySelectorAll(".drum");

var soundMap = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3"
};

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    var key = this.innerHTML;
    playSound(key);
    animateButton(key);
  });
}

document.addEventListener("keydown", function (event) {
  if (soundMap[key]) {
    playSound(key);
    animateButton(key);
  }
});

function playSound(key) {
  var soundPath = soundMap[key];
  if (soundPath) {
    var audio = new Audio(soundPath);
    audio.play();
  }
}

function animateButton(key) {
  var button = document.querySelector("." + key);
  if (button) {
    button.classList.add("pressed");
    setTimeout(
      function () {button.classList.remove("pressed");}, 100
    );
  }
}

