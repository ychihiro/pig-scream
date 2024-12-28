const audio = new Audio('pig_scream.mp3');

const pig = document.getElementById("pig");

pig.addEventListener("click", () => {
  audio.play();
});
