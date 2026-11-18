const portrait = document.querySelector('.portrait');
const yesButton = document.querySelector('a');
function show(mood) {
  portrait.dataset.mood = mood;
}
for (const event of ['pointerenter', 'pointerdown', 'focus']) {
  yesButton.addEventListener(event, () => show('happy'));
}
for (const event of ['pointerleave', 'blur']) {
  yesButton.addEventListener(event, () => show('solo'));
}
const no = document.querySelector('#no');
function dodge() {
  no.parentElement.style.width = no.offsetWidth + "px";
  show("confused");
  const yes = document.querySelector('a').getBoundingClientRect();
  const maxTop = Math.max(0, window.innerHeight - no.offsetHeight);
  const top = Math.random() * maxTop;
  no.style.position = 'fixed';
  no.style.left = Math.random() * Math.max(0, window.innerWidth - no.offsetWidth) + 'px';
  no.style.top = (top + no.offsetHeight > yes.top && top < yes.bottom ? Math.max(0, yes.top - no.offsetHeight - 8) : top) + 'px';
}
no.addEventListener('pointerenter', event => {
  if (event.pointerType === 'mouse') dodge();
});
no.addEventListener('click', () => {
  document.querySelector('h1').textContent = "Hmmmph, there's no choice!";
  dodge();
});
