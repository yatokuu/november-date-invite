const celebration = document.querySelector('.celebration');
function replay() {
  celebration.classList.remove('playing');
  void celebration.offsetWidth;
  celebration.classList.add('playing');
}
document.querySelector('.replay').addEventListener('click', replay);
document.querySelector('.photo img').decode().then(replay, replay);
