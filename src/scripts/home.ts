// @ts-nocheck
/* Movimento das páginas no visual novo (home, Para empresas e Portfólio). Cada parte só roda se o elemento existir na página.
   Home: grade de projetos em "líquido" (WebGL), carrossel e mural arrastáveis,
   prévia de capa que segue o mouse, menu lateral ativo e animações de entrada (GSAP). */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

export function initHome() {
  const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mouseFino = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const temG = true;
  gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin);

  // Coordenadas do mouse na moldura
  const coord = document.getElementById('coord');
  const pad = (n) => String(Math.round(n)).padStart(4, '0');
  if (coord) window.addEventListener('pointermove', (e) => { coord.textContent = `X:${pad(e.clientX)} Y:${pad(e.clientY + scrollY)} · Limeira/SP`; }, { passive: true });

  // O círculo do cursor do site some no fundo líquido do topo, onde aparece o "Arraste" e onde a prévia da capa segue o mouse.
  const heroiEl = document.getElementById('topo');
  window.addEventListener('pointermove', (e) => {
    const el = e.target;
    const c = (q) => !!(el && el.closest && el.closest(q));
    const fundo = c('.heroi') && !c('a, button, .selo, h1, .nota-mao, .retrato-mini');
    const arraste = (c('#trilho-area') || c('#contato')) && !c('.contato, .topo-btn');
    const sobre = fundo || arraste || c('[data-previa]');
    document.documentElement.classList.toggle('sem-cursor', sobre);
  }, { passive: true });
  heroiEl?.addEventListener('pointerleave', () => document.documentElement.classList.remove('sem-cursor'));

  // Textos que o script escreve, no idioma da página
  const en = document.documentElement.lang === 'en';
  const TX = en ? { copiado: 'Copied', copiar: 'Copy', tocar: 'Play', pausar: 'Pause' } : { copiado: 'Copiado', copiar: 'Copiar', tocar: 'Tocar', pausar: 'Pausar' };

  // Copiar e-mail
  document.querySelectorAll('[data-copiar]').forEach((b) => b.addEventListener('click', () => {
    const ok = () => { b.textContent = TX.copiado; setTimeout(() => (b.textContent = TX.copiar), 1800); };
    const falha = () => { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); getSelection().removeAllRanges(); getSelection().addRange(r); };
    if (navigator.clipboard) navigator.clipboard.writeText(b.dataset.copiar).then(ok, falha); else falha();
  }));

  // Showreel
  const rv = document.getElementById('reel-video'), rp = document.getElementById('reel-pausa');
  if (rv && rp && reduz) { rv.removeAttribute('autoplay'); rv.pause(); rp.textContent = TX.tocar; }
  if (rv && rp) rp.addEventListener('click', () => { if (rv.paused) { rv.play(); rp.textContent = TX.pausar; } else { rv.pause(); rp.textContent = TX.tocar; } });

  document.getElementById('topo-btn')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduz ? 'auto' : 'smooth' }));

  // Barra do celular e item ativo do menu lateral
  const bm = document.getElementById('barra-mob'), heroi = document.getElementById('topo');
  const links = [...document.querySelectorAll('#menu-lateral a')];
  const secoes = links.map((a) => document.querySelector(a.getAttribute('href')));
  const aoRolar = () => {
    if (bm && heroi) bm.classList.toggle('on', scrollY > heroi.offsetHeight - 80);
    let at = 0; secoes.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .45) at = i; });
    links.forEach((a, i) => a.classList.toggle('ativo', i === at));
  };
  window.addEventListener('scroll', aoRolar, { passive: true }); aoRolar();

  // ---------- Prévia que segue o cursor (só com mouse) ----------
  const previa = document.getElementById('previa'), pImg = document.getElementById('previa-img');
  if (previa && mouseFino) {
    gsap.set(previa, { xPercent: -50, yPercent: -50 });
    const px = gsap.quickTo(previa, 'x', { duration: .55, ease: 'power3' }), py = gsap.quickTo(previa, 'y', { duration: .55, ease: 'power3' });
    let atual = null;
    const mostra = (alvo) => {
      if (alvo === atual) return; atual = alvo;
      if (alvo) { pImg.src = alvo.dataset.previa; gsap.to(previa, { autoAlpha: 1, scale: 1, rotate: gsap.utils.random(-4, 4), duration: .45, ease: 'expo.out', overwrite: 'auto' }); }
      else gsap.to(previa, { autoAlpha: 0, scale: .7, duration: .3, ease: 'power2.out', overwrite: 'auto' });
    };
    let ux = -1, uy = -1;
    const confere = () => { const el = ux < 0 ? null : document.elementFromPoint(ux, uy); mostra(el ? el.closest('[data-previa]') : null); };
    window.addEventListener('pointermove', (e) => { ux = e.clientX; uy = e.clientY; px(ux); py(uy); confere(); }, { passive: true });
    window.addEventListener('scroll', confere, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => { ux = -1; mostra(null); });
    window.addEventListener('blur', () => mostra(null));
  }

  // ---------- Carrossel e mural com inércia ----------
  const cursor = document.getElementById('cursor');
  if (cursor && mouseFino) {
    const cx = gsap.quickTo(cursor, 'x', { duration: .35, ease: 'power3' }), cy = gsap.quickTo(cursor, 'y', { duration: .35, ease: 'power3' });
    window.addEventListener('pointermove', (e) => { cx(e.clientX); cy(e.clientY); }, { passive: true });
  }
  const area = document.getElementById('trilho-area'), trilho = document.getElementById('trilho'), barra = document.getElementById('barra');
  const atualizaBarra = () => {
    if (!area || !trilho || !barra) return;
    const max = Math.max(1, trilho.scrollWidth - area.clientWidth), vis = Math.min(1, area.clientWidth / trilho.scrollWidth);
    const x = -(temG ? gsap.getProperty(trilho, 'x') : area.scrollLeft);
    barra.style.transform = `scaleX(${Math.min(1, vis + (1 - vis) * (x / max))})`;
  };
  if (cursor && mouseFino) {
    let mx = -1, my = -1, ligado = false;
    const regiao = () => {
      const el = mx < 0 ? null : document.elementFromPoint(mx, my);
      const on = !!(el && el.closest('#trilho-area, #contato') && !el.closest('.contato, .topo-btn'));
      if (on !== ligado) { ligado = on; gsap.to(cursor, { scale: on ? 1 : 0, duration: on ? .4 : .25, ease: on ? 'back.out(2)' : 'power2.out', overwrite: 'auto' }); }
    };
    window.addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; regiao(); }, { passive: true });
    window.addEventListener('scroll', regiao, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => { mx = -1; regiao(); });
  }
  if (area && trilho) {
    let arrastou = false;
    const d = Draggable.create(trilho, {
      type: 'x', zIndexBoost: false, inertia: true, edgeResistance: .85, dragClickables: true, bounds: { minX: 0, maxX: 0 },
      minimumMovement: 6,
      onPress() { arrastou = false; },
      onDragStart() { arrastou = true; trilho.classList.add('arrastando'); },
      onDrag: atualizaBarra, onThrowUpdate: atualizaBarra,
      onRelease() { setTimeout(() => { trilho.classList.remove('arrastando'); arrastou = false; }, 80); },
    })[0];
    const limites = () => { d.applyBounds({ minX: Math.min(0, area.clientWidth - trilho.scrollWidth), maxX: 0 }); atualizaBarra(); };
    limites(); window.addEventListener('resize', limites);
    window.addEventListener('click', (e) => { if (arrastou && trilho.contains(e.target)) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);

  }
  const mural = document.getElementById('contato'), mt = document.getElementById('mural');
  if (mural && mt) {
    const centro = () => { gsap.set(mt, { x: (mural.clientWidth - mt.scrollWidth) / 2, y: (mural.clientHeight - mt.scrollHeight) / 2 }); };
    const dm = Draggable.create(mt, { type: 'x,y', trigger: mural, inertia: true, edgeResistance: .9, allowEventDefault: false,
      zIndexBoost: false, onPress(e) { if (e.target.closest('.contato, .topo-btn')) { this.endDrag(e); } } })[0];
    const limM = () => { dm.applyBounds({ minX: mural.clientWidth - mt.scrollWidth, maxX: 0, minY: mural.clientHeight - mt.scrollHeight, maxY: 0 }); };
    centro(); limM(); dm.update(); window.addEventListener('resize', () => { limM(); dm.update(); });
    mural.querySelectorAll('.contato, .topo-btn').forEach((el) => el.addEventListener('pointerdown', (e) => e.stopPropagation()));
  }
  atualizaBarra();

  // ---------- Movimento ----------
  const riscar = (path, opts = {}) => { const L = path.getTotalLength(); gsap.fromTo(path, { strokeDasharray: L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut', ...opts }); };
  if (temG && !reduz) {
    if (document.querySelector('.nome .l')) {
      const s = new SplitText('.nome .l', { type: 'chars' });
      gsap.from(s.chars, { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: .03, delay: .2 });
    }
    gsap.from('.nota-mao, .desce, .selo, .sob-nome .acoes, .retrato-mini', { y: 20, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: .08, delay: .8 });
    const rh = document.querySelector('#risco-heroi path'); if (rh) riscar(rh, { delay: 1 });
    {
      document.querySelectorAll('main .risco path, .contato .risco path').forEach((p) => riscar(p, { scrollTrigger: { trigger: p.closest('svg'), start: 'top 88%' } }));
      document.querySelectorAll('main h2.tt, .frentes h3, .contato h2').forEach((h) => {
        gsap.from(h, { filter: 'blur(14px)', opacity: .15, y: 30, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 90%' } });
      });
      if (document.querySelector('.numeros')) gsap.from('.frentes .tags, .numeros > *', { filter: 'blur(8px)', opacity: .2, duration: .9, stagger: .05, scrollTrigger: { trigger: '.numeros', start: 'top 90%' } });
      if (document.getElementById('reel')) gsap.fromTo('#reel', { scale: .9 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '#reel', start: 'top 95%', end: 'top 35%', scrub: true } });
      if (document.querySelector('.heroi .nome')) gsap.to('.nome', { yPercent: 25, opacity: .4, ease: 'none', scrollTrigger: { trigger: '.heroi', start: 'top top', end: 'bottom top', scrub: true } });
    }
  }

  // ---------- Cena WebGL: showreel revelado em líquido ----------
  const cv = document.getElementById('liquido');
  const gl = cv ? cv.getContext('webgl', { antialias: false }) : null;
  if (gl) {
    // Grade com as capas dos projetos, desenhada uma vez num canvas 2048x1024 que se repete sem emenda
    const G = document.createElement('canvas'); G.width = 2048; G.height = 1024; const gc = G.getContext('2d');
    gc.fillStyle = '#070609'; gc.fillRect(0, 0, 2048, 1024);
    let gradePronta = false, faltam = 0;
    const capas = {};
    const MURAL = JSON.parse(cv.dataset.capas || '[]');
    MURAL.forEach((m) => { const im = new Image(); faltam++; im.onload = im.onerror = () => { if (--faltam === 0) montaGrade(); }; im.src = m; capas[m] = im; });
    function montaGrade() {
      for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
        const im = capas[MURAL[(r * 3 + c * 5 + (r % 2)) % MURAL.length]];
        if (!im.naturalWidth) continue;
        const x = c * 256 + 10, y = r * 128 + 6, w = 236, h = 116;
        const ra = w / h, ri = im.naturalWidth / im.naturalHeight;
        let sw = im.naturalWidth, sh = im.naturalHeight, sx = 0, sy = 0;
        if (ri > ra) { sw = sh * ra; sx = (im.naturalWidth - sw) / 2; } else { sh = sw / ra; sy = (im.naturalHeight - sh) / 2; }
        gc.drawImage(im, sx, sy, sw, sh, x, y, w, h);
      }
      gradePronta = true; gradeEnviada = false;
      if (reduz) quadro();
    }
    let gradeEnviada = false;
    const m = document.createElement('canvas'); m.width = 256; m.height = 256; const mc = m.getContext('2d');
    mc.fillStyle = '#000'; mc.fillRect(0, 0, 256, 256);
    const vs = 'attribute vec2 p;varying vec2 v;void main(){v=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
    const fs = `precision mediump float;varying vec2 v;uniform sampler2D V,M;uniform float t,a,intro,esc;uniform vec2 res;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
      float fbm(vec2 p){float s=0.,w=.5;for(int k=0;k<5;k++){s+=w*n(p);p*=2.03;w*=.5;}return s;}
      void main(){
        vec2 uv=v; vec2 q=vec2(uv.x*a,uv.y);
        float f=fbm(q*2.4+vec2(t*.05,-t*.04));
        float mk=texture2D(M,vec2(uv.x,1.-uv.y)).r;
        vec2 c=vec2(.42*a,.66)+vec2(sin(t*.3)*.05*a,cos(t*.25)*.04);
        float blob=1.-smoothstep(.0,.26,length(q-c)+(f-.5)*.3);
        float wipe=1.-smoothstep(intro*1.4-.25,intro*1.4-.15,uv.y+(f-.5)*.4);
        float r=clamp(max(blob*.9,mk*1.6)+(f-.5)*.5,0.,1.);
        r=max(smoothstep(.45,.6,r),wipe);
        vec2 vu=vec2(uv.x*res.x,(1.-uv.y)*res.y)/(2048.*esc)*vec2(1.,2.)+vec2(t*.006,t*.004);
        vu+=(f-.5)*.015*r;
        vec3 vc=texture2D(V,vu).rgb;
        vc=mix(vc,vc*vec3(.8,.66,1.2),.3);
        vec3 base=mix(vec3(.043,.039,.051),vec3(.10,.07,.20),pow(f,2.)*.8);
        float edge=smoothstep(.0,.06,r)*(1.-smoothstep(.06,.25,r));
        vec3 col=mix(base,vc*.92,r)+vec3(.61,.48,1.)*edge*.3;
        float vg=smoothstep(1.3,.25,length((uv-vec2(.5,.5))*vec2(1.,.9)));
        gl_FragColor=vec4(col*mix(.5,1.,vg),1.);
      }`;
    const sh = (tp, src) => { const s = gl.createShader(tp); gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(pr); gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const tex = (u, i) => { const t = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + i); gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([20, 16, 30, 255])); gl.uniform1i(gl.getUniformLocation(pr, u), i); return t; };
    const tV = tex('V', 0), tM = tex('M', 1);
    const U = (n) => gl.getUniformLocation(pr, n); const uT = U('t'), uA = U('a'), uI = U('intro'), uE = U('esc'), uR = U('res');
    let alvo = null, ult = null, w = 0, h = 0, visivel = true;
    const tam = () => { const r = cv.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 1.5); w = cv.width = Math.round(r.width * dpr); h = cv.height = Math.round(r.height * dpr); gl.viewport(0, 0, w, h); };
    tam(); window.addEventListener('resize', tam);
    heroi.addEventListener('pointermove', (e) => { const r = cv.getBoundingClientRect(); alvo = [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height]; });
    heroi.addEventListener('pointerleave', () => { alvo = null; ult = null; });
    if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { visivel = e.isIntersecting; }).observe(cv);
    const t0 = performance.now();
    const quadro = () => {
      const t = (performance.now() - t0) / 1000;
      mc.fillStyle = 'rgba(0,0,0,0.045)'; mc.fillRect(0, 0, 256, 256);
      if (alvo) {
        const p = [alvo[0] * 256, alvo[1] * 256], de = ult || p, passos = Math.max(1, Math.hypot(p[0] - de[0], p[1] - de[1]) / 4);
        for (let i = 0; i <= passos; i++) { const x = de[0] + (p[0] - de[0]) * i / passos, y = de[1] + (p[1] - de[1]) * i / passos;
          const g = mc.createRadialGradient(x, y, 0, x, y, 30); g.addColorStop(0, 'rgba(255,255,255,.22)'); g.addColorStop(1, 'rgba(255,255,255,0)'); mc.fillStyle = g; mc.fillRect(x - 30, y - 30, 60, 60); }
        ult = p;
      }
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, tM); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, m);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tV);
      if (gradePronta && !gradeEnviada) { gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, G); gradeEnviada = true; }
      const pi = reduz ? 1 : Math.min(1, Math.max(0, (t - .2) / 2.4));
      gl.uniform1f(uT, reduz ? 4 : t); gl.uniform1f(uA, w / h); gl.uniform2f(uR, w, h); gl.uniform1f(uE, Math.max(1, w / 2048) * 1.15 * Math.min(devicePixelRatio || 1, 1.5) / Math.max(1, w / 2048)); gl.uniform1f(uI, Math.pow(Math.sin(pi * Math.PI), .7));
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    const loop = () => { if (visivel && !document.hidden) quadro(); if (!reduz) requestAnimationFrame(loop); };
    if (reduz) quadro(); else loop();
  }
}
