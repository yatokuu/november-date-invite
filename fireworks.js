const sky = document.querySelector('.sky');
const positions = [[17,17],[80,74],[89,22],[11,67],[63,12],[40,86],[7,34],[91,57],[32,20],[73,88],[21,79],[82,15],[12,51],[55,84],[47,13],[86,78]];

async function celebrate() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  await document.querySelector('.photo img').decode().catch(() => {});
  const bursts = document.createDocumentFragment();
  positions.forEach(([left, top], index) => {
    const burst = document.createElement('span');
    burst.style.left = left + '%';
    burst.style.top = top + '%';
    burst.style.color = index % 2 ? '#ffc1d6' : '#ffe0ad';
    burst.style.setProperty('--delay', (index * 900) + 'ms');
    for (let angle = 0; angle < 360; angle += 45) {
      const ray = document.createElement('i');
      ray.style.setProperty('--angle', angle + 'deg');
      burst.append(ray);
    }
    bursts.append(burst);
  });
  sky.append(bursts);
}
celebrate();
