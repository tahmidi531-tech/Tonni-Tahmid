/* Tahmid ♥ Tonni — main interactions */
const PROPOSE_DATE = new Date('2026-10-10T00:00:00+06:00');

const TIMELINE = [
  { date: 'First Crush & Message • তন্নির প্রথম "Hlw"', title: 'তন্নির গোপন ক্রাশ ও প্রথম বার্তা', text: 'গল্পের শুরুটা হয়েছিল তন্নির ক্রাশ খাওয়ার মাধ্যমে! সে আমার ওপর ক্রাশ খেয়ে ফেসবুকে ইনবক্সে পাঠিয়েছিল ছোট্ট একটা ‘Hlw’। কে জানতো, কুষ্টিয়া শহরের সেই তিন অক্ষরের মেসেজটাই আমাদের পুরো জীবন বদলে দেবে!', emoji: '💌' },
  { date: 'Sweet Conversations • মিষ্টি আড্ডা', title: 'ঘণ্টার পর ঘণ্টা গল্প আর কথা', text: 'এরপর শুরু হলো আমাদের নিয়মিত কথা বলা। তোমার সেই হাসিমুখ আর সুন্দর কথাগুলোর মাঝে কখন যে আমি নিজের অজান্তে তোমার প্রেমে পড়ে গেলাম, বুঝতেই পারিনি। আমরা দুজনেই একে অপরের সেরা বন্ধু ও ভরসা হয়ে গেলাম।', emoji: '💬' },
  { date: '10 October • প্রপোজাল ডে', title: '১০ অক্টোবর — ভালোবাসার অফিশিয়াল শুরু', text: 'অবশেষে এলো সেই কাঙ্ক্ষিত দিন — ১০ অক্টোবর, ২০২৬। সেদিন সব দ্বিধা কাটিয়ে আমি তন্নিকে আমার মনের কথাগুলো জানাই এবং প্রপোজ করি। তন্নির সেই মিষ্টি একটা ‘হ্যাঁ’ আমাদের জীবনকে রঙিন করে দিয়েছে।', emoji: '💍' },
  { date: 'Forever Together • একসাথে পথচলা', title: 'কুষ্টিয়া শহরে আমাদের আগামী দিনগুলো', text: 'পড়াশোনা আর ব্যস্ততার মাঝেও আমাদের এই ছোট্ট স্মৃতিগুলোই আমাদের সবচেয়ে বড় শক্তি। কুষ্টিয়া শহরের বুকে এভাবেই সারাজীবন একে অপরের হাত ধরে হেঁটে যেতে চাই।', emoji: '🌆' },
];

const LETTER_TEXT = `তুমি যখন এই লেখাটা পড়ছো, হয়তো এক চিলতে মিষ্টি হাসি নিয়ে আমার কথা ভাবছো। জানো, তোমার ওই একটা হাসির জন্য আমি আমার পুরো পৃথিবীটা থামিয়ে দিতে পারি।

ঝুম বৃষ্টির ফোঁটার মতো তুমি হঠাৎ করেই আমার জীবনে এসেছিলে, আর মুহূর্তেই আমার চেনা পৃথিবীটা আরও অনেক বেশি সুন্দর হয়ে গেছে। তোমার সাথে কাটানো প্রতিটা মুহূর্ত আমার কাছে কোনো জাদুকরি স্মৃতির মতো। তোমার অভিমানভরা মুখ, ছোটো ছোটো ব্যাপার নিয়ে তোমার বকা — সবকিছুর মাঝেই আমার শান্তি লুকিয়ে আছে। তোমাকে ছাড়া এখন একটা দিনও আমার কাছে অর্থহীন মনে হয়।

১০ অক্টোবর ২০২৬ — এই বিশেষ দিনটি আমার জীবনের সবচেয়ে সুন্দর অধ্যায় হয়ে থাকবে। সেদিন তোমাকে হৃদয়ের গভীর থেকে একটা কথাই বলতে চেয়েছিলাম, আর আজও সেটাই বলছি...

আমার এই ছোট্ট পৃথিবীতে তুমি কি চিরকালের জন্য আমার রোদ, আমার ছায়া আর আমার ভালোবাসার মানুষ হয়ে থাকবে?

শুধু তোমার জন্য... ♥`;

const GALLERY = [
  { src: 'tonni 1.jfif', caption: 'তোমার ওই মিষ্টি হাসি — আমার সারাদিনের শান্তি', date: 'My Sunshine ♥' },
  { src: 'tonni 2.jfif', caption: 'চোখে চোখে কত কথা, মুখে বলা হয় না', date: 'Sweet Eyes ✨' },
  { src: 'tonni 3.jfif', caption: 'চুলে ফুল, মুখে হাসি — আমার পরী', date: 'Flower Girl 🌸' },
  { src: 'tonni 4.jfif', caption: 'গোলাপি জামায় আমার গোলাপি তুমি', date: 'Pretty in Pink 💖' },
  { src: 'tonni 5.jfif', caption: 'এই দুষ্টু চাহনির প্রেমেই তো পড়েছি', date: 'My Mischief 😌' },
  { src: 'tonni 6.jfif', caption: 'শাড়িতে তোমাকে দেখে মনে হয় স্বপ্ন সত্যি হয়', date: 'Saree Elegance 🌙' },
];

// ---------- helpers ----------
const $ = (s) => document.querySelector(s);
function toast(msg) {
  const c = $('#toastContainer');
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  c.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = '.4s'; setTimeout(() => el.remove(), 400); }, 2800);
}

// ---------- particles + floating hearts ----------
function spawnParticles() {
  const box = $('#particles');
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    const size = 2 + Math.random() * 5;
    p.style.width = p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.bottom = '-20px';
    p.style.animationDuration = 7 + Math.random() * 10 + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    p.style.opacity = .3 + Math.random() * .6;
    box.appendChild(p);
  }
  const hearts = $('#floatingHearts');
  const symbols = ['♥', '💖', '💕', '✨'];
  for (let i = 0; i < 16; i++) {
    const h = document.createElement('span');
    h.className = 'mini-heart';
    h.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.bottom = '-30px';
    h.style.fontSize = 12 + Math.random() * 22 + 'px';
    h.style.animationDuration = 9 + Math.random() * 12 + 's';
    h.style.animationDelay = Math.random() * 12 + 's';
    hearts.appendChild(h);
  }
}

// ---------- countdown ----------
function pad(n) { return String(n).padStart(2, '0'); }
function getYesTime() { try { return parseInt(localStorage.getItem('tonniYesTime') || '0', 10) || 0; } catch (e) { return 0; } }
function setYesTime(t) { try { localStorage.setItem('tonniYesTime', String(t)); } catch (e) {} }
function clearYesTime() { try { localStorage.removeItem('tonniYesTime'); } catch (e) {} }
function renderTogetherTimer() {
  const yesTime = getYesTime();
  const box = $('#togetherTimer');
  if (!box) return false;
  if (!yesTime) { box.hidden = true; return false; }
  box.hidden = false;
  const diff = Date.now() - yesTime;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  const tt = $('#togetherTime');
  if (tt) tt.textContent = `${d} দিন : ${String(h).padStart(2,'0')} : ${String(m).padStart(2,'0')} : ${String(s).padStart(2,'0')}`;
  const badge = $('#badgeStatus');
  if (badge) badge.textContent = 'Together Since ♥';
  return true;
}
function updateCountdown() {
  const now = new Date();
  if (getYesTime()) {
    // 💍 Count-up mode: Tonni Yes বলার মুহূর্ত থেকে টাইমার চলছে
    const diff = now - getYesTime();
    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff / 3600000) % 24;
    const m = Math.floor(diff / 60000) % 60;
    const s = Math.floor(diff / 1000) % 60;
    $('#days').textContent = pad(d);
    $('#hours').textContent = pad(h);
    $('#minutes').textContent = pad(m);
    $('#seconds').textContent = pad(s);
    const mini = $('#miniCountdown');
    if (mini) mini.textContent = `Tonni হ্যাঁ বলেছে! ♥ একসাথে ${d} দিন`;
    renderTogetherTimer();
    checkProposalUnlock();
    return;
  }
  let diff = PROPOSE_DATE - now;
  if (diff < 0) diff = 0;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  $('#days').textContent = pad(d);
  $('#hours').textContent = pad(h);
  $('#minutes').textContent = pad(m);
  $('#seconds').textContent = pad(s);
  const mini = $('#miniCountdown');
  if (mini) {
    if (diff === 0) mini.textContent = 'আজই সেই দিন! ♥ proposal page খুলে গেছে!';
    else mini.textContent = `${d} দিন : ${pad(h)} ঘণ্টা : ${pad(m)} মিনিট : ${pad(s)} সেকেন্ড বাকি`;
  }
  checkProposalUnlock();
}

// ---------- SPA nav ----------
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.toggle('active', sec.id === id));
  document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.section === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  $('#navLinks')?.classList?.remove('open');
}
function initNav() {
  // add id for mobile toggle compat
  document.querySelector('.nav-links').id = 'navLinks';
  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', (e) => { e.preventDefault(); showSection(a.dataset.section); closeMobile(); });
  });
  document.querySelectorAll('[data-scroll]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      showSection(id);
    });
  });
  document.querySelectorAll('.footer-link').forEach(a => {
    a.addEventListener('click', (e) => { e.preventDefault(); showSection(a.getAttribute('href').slice(1)); });
  });
  const btn = $('#mobileMenuBtn');
  btn.addEventListener('click', () => {
    const open = $('#navLinks').classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
}
function closeMobile() { $('#navLinks')?.classList.remove('open'); }

// ---------- timeline render ----------
function renderTimeline() {
  const track = $('#timelineTrack');
  TIMELINE.forEach(item => {
    const div = document.createElement('article');
    div.className = 'timeline-item';
    div.innerHTML = `<span class="timeline-dot"></span><span class="timeline-emoji">${item.emoji}</span>
      <div class="timeline-date">${item.date}</div>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-text">${item.text}</p>`;
    track.appendChild(div);
  });
}

// ---------- love letter typing ----------
let letterOpened = false;
function initLetter() {
  const env = $('#envelope');
  const body = $('#letterBody');
  const hint = $('#letterHint');
  function open() {
    if (letterOpened) return;
    letterOpened = true;
    env.classList.add('open');
    hint.textContent = 'তোমার জন্য লেখা... ♥';
    let i = 0;
    body.textContent = '';
    const timer = setInterval(() => {
      body.textContent += LETTER_TEXT[i];
      i++;
      if (i >= LETTER_TEXT.length) { clearInterval(timer); toast('Tonni এর জন্য ভালোবাসা ♥'); }
    }, 28);
  }
  env.addEventListener('click', open);
  env.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
}

// ---------- music player (visual) ----------
const SONGS = [
  { title: 'Jhol', artist: 'Maanu • Annural Khalid', file: 'Jhol.mp3', dedication: '"তোমার হাসির মতোই মিষ্টি সুর — Jhol 💧"' },
  { title: 'Royaa Main', artist: 'Tanveer Evan', file: 'royaa main.mp3', dedication: '"রাত জাগা গল্পগুলোর সুর — Royaa Main 🌙"' },
  { title: 'Ehsaas', artist: 'Faheem Abdullah', file: 'Ehsaas.mp3', dedication: '"নয়া নয়া এহসাস — শুধু তোমার জন্য ♥"' },
];
let currentSong = 0;
function musicFmt(s) { s = Math.max(0, Math.floor(s || 0)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }
function audioEl() { return document.getElementById('localAudio'); }
function setPlayingUI(playing) {
  const btn = $('#playBtn'), vinyl = $('#vinylRecord'), eq = $('#eqWrap');
  if (btn) { btn.classList.toggle('playing', playing); btn.setAttribute('aria-label', playing ? 'Pause music' : 'Play music'); }
  if (vinyl) vinyl.classList.toggle('spinning', playing);
  if (eq) eq.classList.toggle('live', playing);
}
function updateSongInfo(i) {
  const s = SONGS[i];
  $('#songTitle').textContent = s.title;
  $('#songArtist').textContent = s.artist;
  const ded = document.querySelector('.song-dedication');
  if (ded) ded.textContent = s.dedication;
  document.querySelectorAll('.song-tab').forEach((tab, idx) => {
    tab.classList.toggle('active', idx === i);
    tab.setAttribute('aria-selected', idx === i ? 'true' : 'false');
  });
}
function updateNowPlaying() {
  const s = SONGS[currentSong];
  const np = $('#nowPlaying');
  if (np) np.textContent = `♪ ${s.title} — ${s.artist}`;
}
function switchSong(i, silent) {
  currentSong = i;
  updateSongInfo(i);
  updateNowPlaying();
  const a = audioEl();
  if (a) {
    a.src = SONGS[i].file;
    a.load();
    if (!silent) a.play().catch(() => toast('Audio চালু করতে pink বাটনে ক্লিক করো ♥'));
  }
  if (!silent) toast(`♪ ${SONGS[i].title} — Tonni's favorite ♥`);
}
function syncProgressFromAudio() {
  const a = audioEl();
  if (!a) return;
  const dur = a.duration || 0, cur = a.currentTime || 0;
  const fill = $('#progressFill'), time = $('#timeDisplay');
  if (fill && dur) fill.style.width = (cur / dur * 100) + '%';
  if (time) time.textContent = `${musicFmt(cur)} / ${musicFmt(dur)}`;
}
function buildEq() {
  const wrap = $('#eqBars');
  if (!wrap || wrap.children.length) return;
  for (let i = 0; i < 28; i++) {
    const b = document.createElement('span');
    b.className = 'eq-bar';
    b.style.animationDelay = (Math.random() * 1.2) + 's';
    b.style.animationDuration = (0.7 + Math.random() * 0.9) + 's';
    wrap.appendChild(b);
  }
}
function initMusic() {
  buildEq();
  document.querySelectorAll('.song-tab').forEach(tab => {
    tab.addEventListener('click', () => switchSong(parseInt(tab.dataset.song, 10)));
  });
  updateSongInfo(0);
  updateNowPlaying();
  const a = audioEl();
  if (a) {
    a.src = SONGS[0].file;
    a.addEventListener('play', () => setPlayingUI(true));
    a.addEventListener('pause', () => setPlayingUI(false));
    a.addEventListener('timeupdate', syncProgressFromAudio);
    a.addEventListener('loadedmetadata', syncProgressFromAudio);
    a.addEventListener('ended', () => switchSong((currentSong + 1) % SONGS.length));
    a.addEventListener('error', () => toast('MP3 ফাইল পাওয়া যাচ্ছে না — ফোল্ডার চেক করো'));
  }
  const btn = $('#playBtn');
  btn.addEventListener('click', () => {
    if (!a || !a.src) { toast('Player লোড হচ্ছে... একটু অপেক্ষা করো ♥'); return; }
    if (a.paused) { a.play().catch(() => {}); toast(`♪ ${SONGS[currentSong].title} for Tonni ♥`); }
    else a.pause();
  });
  const bar = $('#progressBar');
  bar.addEventListener('click', (e) => {
    const dur = (a && a.duration) || 0;
    if (!dur) return;
    const r = bar.getBoundingClientRect();
    a.currentTime = (e.clientX - r.left) / r.width * dur;
  });
}

// ---------- gallery ----------
function renderGallery() {
  const grid = $('#galleryGrid');
  GALLERY.forEach((g, idx) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View: ' + g.caption);
    if (g.src) card.innerHTML = `<img src="${g.src}" alt="${g.caption}" loading="lazy"><div class="gallery-overlay"><div class="gallery-caption">${g.caption}</div><div class="gallery-date">${g.date}</div></div>`;
    else card.innerHTML = `<div class="gallery-art">${g.art}<br><span style="font-size:26px">${g.initial}</span></div><div class="gallery-overlay"><div class="gallery-caption">${g.caption}</div><div class="gallery-date">${g.date}</div></div>`;
    const openModal = () => openImageModal(g);
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openModal(); });
    grid.appendChild(card);
  });
}
function openImageModal(g) {
  const modal = $('#imageModal');
  const img = $('#modalImage');
  if (g.src) { img.src = g.src; img.alt = g.caption; img.style.display = 'block'; }
  else { img.removeAttribute('src'); img.style.display = 'none'; }
  $('#modalCaption').textContent = `${g.art || '♥'} ${g.caption} — ${g.date}`;
  modal.hidden = false;
}
function initModal() {
  const modal = $('#imageModal');
  $('#modalClose').addEventListener('click', () => modal.hidden = true);
  $('#modalBackdrop').addEventListener('click', () => modal.hidden = true);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.hidden = true; });
}

// ---------- proposal lock ----------
function checkProposalUnlock() {
  const now = new Date();
  const unlocked = now >= PROPOSE_DATE;
  const lock = $('#proposalLock'), content = $('#proposalContent');
  if (!lock || !content) return;
  if (unlocked) { lock.hidden = true; content.hidden = false; }
  else { lock.hidden = false; content.hidden = true; }
}
function heartBlast() {
  for (let i = 0; i < 60; i++) {
    const s = document.createElement('span');
    s.className = 'confetti-heart';
    s.textContent = ['♥', '💖', '💕', '💍', '✨'][Math.floor(Math.random() * 5)];
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = '-30px';
    s.style.fontSize = 14 + Math.random() * 26 + 'px';
    s.style.animationDuration = 2 + Math.random() * 3 + 's';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 5000);
  }
}
function initProposal() {
  $('#yesBtn').addEventListener('click', () => {
    if (!getYesTime()) {
      setYesTime(Date.now());
      toast('Tonni বলেছে YES! ♥ টাইমার চালু!');
    } else {
      toast('She said YES! ♥ Tahmid + Tonni forever!');
    }
    renderTogetherTimer();
    heartBlast();
    setTimeout(heartBlast, 800);
  });
  const no = $('#noBtn');
  let dodges = 0;
  function dodgeNo(silent) {
    if (!silent) {
      dodges++;
      if (dodges === 3) toast('আরে! No ধরা যাচ্ছে না 😄');
      if (dodges === 6) toast('Yes-ই চাপ দাও ♥ No পালিয়েছে!');
    }
    if ($('#proposalContent').hidden) return;
    no.style.position = 'fixed';
    no.style.zIndex = '999';
    no.style.margin = '0';
    no.style.transform = 'none';
    const pad = 16;
    const w = no.offsetWidth || 140, h = no.offsetHeight || 50;
    const x = pad + Math.random() * Math.max(60, window.innerWidth - w - pad * 2);
    const y = pad + Math.random() * Math.max(60, window.innerHeight - h - pad * 2);
    no.style.left = x + 'px';
    no.style.top = y + 'px';
  }
  no.addEventListener('mouseover', () => dodgeNo(false));
  no.addEventListener('touchstart', () => dodgeNo(false), { passive: true });
  no.addEventListener('click', (e) => { e.preventDefault(); dodgeNo(false); });
  setInterval(() => {
    if ($('#proposal').classList.contains('active') && !$('#proposalContent').hidden) dodgeNo(true);
  }, 1400);
  const box = $('#togetherTimer');
  if (box) box.addEventListener('dblclick', () => {
    if (confirm('টাইমার রিসেট করবে? (ভুলে Yes চাপলে এটা কাজে দেবে)')) {
      clearYesTime();
      renderTogetherTimer();
      const badge = $('#badgeStatus');
      if (badge) badge.textContent = 'The Proposal';
      toast('টাইমার রিসেট হয়ে গেছে');
    }
  });
  renderTogetherTimer();
}

// ---------- click anywhere = tiny hearts ----------
function initClickHearts() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.envelope')) return;
    const h = document.createElement('span');
    h.textContent = '♥';
    h.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;color:#ff2a7f;text-shadow:0 0 12px rgba(255,42,127,.9);pointer-events:none;z-index:300;font-size:20px;transition:.9s;`;
    document.body.appendChild(h);
    requestAnimationFrame(() => { h.style.transform = 'translateY(-60px) scale(1.5)'; h.style.opacity = '0'; });
    setTimeout(() => h.remove(), 900);
  });
}

// ---------- I Love You Tonni splash ----------
function initLoveSplash() {
  const sp = document.getElementById('loveSplash');
  if (!sp) return;
  const words = document.getElementById('loveWords');
  let n = 0;
  'I Love You Tonni'.split(' ').forEach((w, wi, arr) => {
    [...w].forEach(ch => {
      const s = document.createElement('span');
      s.className = 'lw';
      s.style.setProperty('--i', n++);
      s.textContent = ch;
      words.appendChild(s);
    });
    if (wi < arr.length - 1) { const gap = document.createElement('span'); gap.className = 'sp'; words.appendChild(gap); }
  });
  document.body.style.overflow = 'hidden';
  let done = false;
  function dismiss() {
    if (done) return;
    done = true;
    sp.classList.add('hide');
    setTimeout(() => { sp.classList.add('gone'); document.body.style.overflow = ''; }, 650);
  }
  sp.addEventListener('click', dismiss);
  setTimeout(dismiss, 3400);
}

// ---------- init ----------
document.addEventListener('DOMContentLoaded', () => {
  initLoveSplash();
  spawnParticles();
  initNav();
  renderTimeline();
  initLetter();
  initMusic();
  renderGallery();
  initModal();
  initProposal();
  initClickHearts();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  showSection('home');
});
