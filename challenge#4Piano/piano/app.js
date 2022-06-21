const keys = document.getElementsByTagName('a');
const playing = (i) => {
  const audio = new Audio(`audio/key- ${i + 1} .mp3`);
  audio.play();
};
for (let i = 0; i < keys.length; i += 1) {
  keys[i].addEventListener('click', () => {
    playing(i);
  });
}
