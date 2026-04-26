export function initDrawingTrail() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;pointer-events:none;z-index:1;';
  document.body.style.position = 'relative';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width = document.documentElement.scrollWidth;
    H = canvas.height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    canvas.style.height = H + 'px';
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('scroll', resize);

  const points = [];
  const MAX_PTS = 80;
  const FADE_TAIL = 40;
  const [cr, cg, cb] = [80, 75, 90];

  let lastPt = null;
  let mouseVX = null, mouseVY = null;

  window.addEventListener('mousemove', e => {
    mouseVX = e.clientX;
    mouseVY = e.clientY;
    addPoint(e.clientX + window.scrollX, e.clientY + window.scrollY);
  });

  window.addEventListener('scroll', () => {
    if (mouseVX === null) return;
    addPoint(mouseVX + window.scrollX, mouseVY + window.scrollY);
  }, { passive: true });

  function addPoint(x, y) {
    const now = Date.now();
    let speed = 0;
    if (lastPt) {
      const dist = Math.hypot(x - lastPt.x, y - lastPt.y);
      speed = dist / Math.max(1, now - lastPt.t);
    }
    points.push({ x, y, speed });
    if (points.length > MAX_PTS) points.shift();
    lastPt = { x, y, t: now };
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const len = points.length;
    for (let i = 1; i < len; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];

      let alpha = 0.72;
      if (i < FADE_TAIL) {
        const t = i / FADE_TAIL;
        alpha = 0.72 * (t * t);
      }

      const w = Math.max(1.2, Math.min(3.5, 3.5 - p1.speed * 0.35));

      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.lineWidth = w;
      ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`;
      ctx.stroke();
    }

    requestAnimationFrame(render);
  }

  render();
}
