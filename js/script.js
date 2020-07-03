const keys = document.querySelectorAll(".key");


function playSound(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode ||
    event.target.dataset.key ||
    event.target.parentElement.parentElement.dataset.key}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode ||
    event.target.dataset.key ||
    event.target.parentElement.parentElement.dataset.key}"]`);

  if (!audio) return;

  if (key.classList.contains("bottom-piano-key")) {
    key.classList.add("bottom-piano-key_active");
  } else if (key.classList.contains("top-piano-key")) {
    key.classList.add("top-piano-key_active");
  }

  audio.currentTime = 0;
  audio.play();
}


function removeTransition() {
  if (this.classList.contains("bottom-piano-key")) {
    this.classList.remove("bottom-piano-key_active");
  } else if (this.classList.contains("top-piano-key")) {
    this.classList.remove("top-piano-key_active");
  }
}


window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('click', playSound));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));