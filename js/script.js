function playSound(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (!audio) return;

  if (key.classList.contains("bottom-piano-key")) {
    key.classList.add("bottom-piano-key_active");
  } else if (key.classList.contains("top-piano-key")) {
    key.classList.add("top-piano-key_active");
  }

  audio.currentTime = 0;
  audio.play();
}

window.addEventListener('keydown', playSound);



function removeTransition() {
  if (this.classList.contains("bottom-piano-key")) {
    this.classList.remove("bottom-piano-key_active");
  } else if (this.classList.contains("top-piano-key")) {
    this.classList.remove("top-piano-key_active");
  }
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener('transitionend', removeTransition));