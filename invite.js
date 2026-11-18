const no = document.querySelector('#no');
function dodge() {
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
