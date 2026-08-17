// ==========================================================================
// Meraksandık — Modern Araştırma Uygulaması
// ==========================================================================

const TOPICS = [
  { tr: "Zeigarnik Etkisi", en: "The Zeigarnik Effect" },
  { tr: "Parkinson Yasası", en: "Parkinson's Law" },
  { tr: "Beş Neden", en: "The Five Whys" },
  { tr: "Feynman Tekniği", en: "The Feynman Technique" },
  { tr: "Mavi Okyanus Stratejisi", en: "Blue Ocean Strategy" },
  { tr: "İki Pizza Kuralı", en: "The Two-Pizza Rule" },
  { tr: "Kaldıraç", en: "Leverage" },
  { tr: "1.000 Gerçek Hayran", en: "1,000 True Fans" },
  { tr: "Yenilikçinin İkilemi", en: "The Innovator's Dilemma" },
  { tr: "İlk Prensiplerle Düşünme", en: "First Principles Thinking" },
  { tr: "Ağ Etkisi", en: "The Network Effect" },
  { tr: "Minimum Uygulanabilir Ürün", en: "Minimum Viable Product" },
  { tr: "Kurucu-Pazar Uyumu", en: "Founder-Market Fit" },
  { tr: "Chesterton'ın Çiti", en: "Chesterton's Fence" },
  { tr: "Hanlon Usturası", en: "Hanlon's Razor" },
  { tr: "Dunbar Sayısı", en: "Dunbar's Number" },
  { tr: "Hayatta Kalan Yanlılığı", en: "Survivorship Bias" },
  { tr: "Batık Maliyet Yanılgısı", en: "The Sunk Cost Fallacy" },
  { tr: "Bilişsel Yük", en: "Cognitive Load" },
  { tr: "Konfor Alanı", en: "The Comfort Zone" },
  { tr: "Halo Etkisi", en: "The Halo Effect" },
  { tr: "Retorik", en: "Rhetoric" },
  { tr: "Empati", en: "Empathy" },
  { tr: "Katarsis", en: "Catharsis" },
  { tr: "Doğal Karar Verme", en: "Naturalistic Decision Making" },
  { tr: "Matbaanın İcadı", en: "Gutenberg's Printing Press" },
  { tr: "Sanayi Devrimi", en: "The Industrial Revolution" },
  { tr: "İpek Yolu", en: "The Silk Road" },
  { tr: "Rönesans", en: "The Renaissance" },
  { tr: "Aydınlanma Çağı", en: "The Age of Enlightenment" },
  { tr: "Roma Yol Ağı", en: "The Roman Road Network" },
  { tr: "Coğrafi Keşifler", en: "The Age of Discovery" },
  { tr: "Model Yanlılığı", en: "Algorithmic Bias" },
  { tr: "Açıklanabilir Yapay Zeka", en: "Explainable AI" },
  { tr: "Aşırı Öğrenme", en: "Overfitting" },
  { tr: "AI Halüsinasyonu", en: "AI Hallucination" },
  { tr: "Federe Öğrenme", en: "Federated Learning" },
  { tr: "Dijital Ayak İzi", en: "Digital Footprint" },
  { tr: "Derin Çalışma", en: "Deep Work" },
  { tr: "Zaman Bloklama", en: "Time Blocking" },
  { tr: "Seinfeld Stratejisi", en: "The Seinfeld Strategy" },
  { tr: "Pomodoro Tekniği", en: "The Pomodoro Technique" },
  { tr: "Planlama Yanılgısı", en: "The Planning Fallacy" },
  { tr: "Zirve-Son Kuralı", en: "The Peak-End Rule" },
  { tr: "Hedonik Koşu Bandı", en: "The Hedonic Treadmill" },
  { tr: "IKEA Etkisi", en: "The IKEA Effect" },
  { tr: "Sahiplik Etkisi", en: "The Endowment Effect" },
  { tr: "Çapa Etkisi", en: "The Anchoring Effect" },
  { tr: "Onaylama Yanlılığı", en: "Confirmation Bias" },
  { tr: "Dunning-Kruger Etkisi", en: "The Dunning-Kruger Effect" },
  { tr: "Kırık Camlar Teorisi", en: "Broken Windows Theory" },
  { tr: "Ortak Malların Trajedisi", en: "The Tragedy of the Commons" },
  { tr: "Goodhart Yasası", en: "Goodhart's Law" },
  { tr: "Streisand Etkisi", en: "The Streisand Effect" },
  { tr: "Pareto İlkesi", en: "The Pareto Principle" },
  { tr: "Metcalfe Yasası", en: "Metcalfe's Law" },
  { tr: "Güç Yasası", en: "The Power Law" },
  { tr: "Ortalamaya Dönüş", en: "Regression to the Mean" },
  { tr: "Simpson Paradoksu", en: "Simpson's Paradox" },
  { tr: "Overton Penceresi", en: "The Overton Window" },
  { tr: "Peter Prensibi", en: "The Peter Principle" },
  { tr: "Otobüs Faktörü", en: "The Bus Factor" },
  { tr: "Kobra Etkisi", en: "The Cobra Effect" },
  { tr: "Hawthorne Etkisi", en: "The Hawthorne Effect" },
  { tr: "Plasebo Etkisi", en: "The Placebo Effect" },
  { tr: "Antikırılganlık", en: "Antifragility" },
  { tr: "Oyunda Derisi Olmak", en: "Skin in the Game" },
  { tr: "Tersine Düşünme", en: "Inversion" },
  { tr: "İkinci Derece Düşünme", en: "Second-Order Thinking" },
  { tr: "Fermi Tahmini", en: "Fermi Estimation" },
  { tr: "Occam'ın Usturası", en: "Occam's Razor" },
  { tr: "Yetkinlik Çemberi", en: "Circle of Competence" },
  { tr: "Karar Yorgunluğu", en: "Decision Fatigue" },
  { tr: "Seçim Paradoksu", en: "The Paradox of Choice" },
  { tr: "Kayıptan Kaçınma", en: "Loss Aversion" },
  { tr: "Çerçeveleme Etkisi", en: "The Framing Effect" },
  { tr: "Sosyal Kanıt", en: "Social Proof" },
  { tr: "Karşılıklılık İlkesi", en: "The Reciprocity Principle" },
  { tr: "Kıtlık İlkesi", en: "The Scarcity Principle" },
  { tr: "Grup Düşüncesi", en: "Groupthink" },
  { tr: "Seyirci Etkisi", en: "The Bystander Effect" },
  { tr: "Milgram Deneyi", en: "The Milgram Experiment" },
  { tr: "Stanford Hapishane Deneyi", en: "The Stanford Prison Experiment" },
  { tr: "Asch Uyum Deneyleri", en: "The Asch Conformity Experiments" },
  { tr: "Maslow İhtiyaçlar Hiyerarşisi", en: "Maslow's Hierarchy of Needs" },
  { tr: "Akış Hali", en: "Flow State" },
  { tr: "Büyüme Zihniyeti", en: "Growth Mindset" },
  { tr: "Sahtekarlık Sendromu", en: "Impostor Syndrome" },
  { tr: "Uygulama Niyetleri", en: "Implementation Intentions" },
  { tr: "Alışkanlık Döngüsü", en: "The Habit Loop" },
  { tr: "Kızıl Kraliçe Etkisi", en: "The Red Queen Effect" },
  { tr: "Patika Bağımlılığı", en: "Path Dependence" },
  { tr: "Ergodiklik", en: "Ergodicity" },
  { tr: "Lindy Etkisi", en: "The Lindy Effect" },
  { tr: "Opsiyonellik", en: "Optionality" },
  { tr: "Vekalet Problemi", en: "The Principal-Agent Problem" },
  { tr: "Bilgi Laneti", en: "The Curse of Knowledge" },
  { tr: "Yanıltıcı Doğruluk Etkisi", en: "The Illusory Truth Effect" },
  { tr: "Diş Fırçası Testi", en: "The Toothbrush Test" },
  { tr: "Yak Tıraşı", en: "Yak Shaving" },
  { tr: "Hindi Problemi", en: "The Turkey Problem" },
  { tr: "İkarus Paradoksu", en: "The Icarus Paradox" },
  { tr: "Zihinsel Muhasebe", en: "Mental Accounting" }
];

const CATEGORIES = [
  {
    id: "general",
    tr: "Genel",
    en: "General",
    icon: '<circle cx="12" cy="12" r="8"/><path d="M15.2 8.8l-2.3 5.1-5.1 2.3 2.3-5.1 5.1-2.3z"/><circle cx="12" cy="12" r="0.7" fill="currentColor" stroke="none"/>'
  },
  {
    id: "technology",
    tr: "Teknoloji",
    en: "Technology",
    icon: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 7V4M15 7V4M9 20v-3M15 20v-3M7 9H4M7 15H4M20 9h-3M20 15h-3"/>'
  },
  {
    id: "science",
    tr: "Bilim",
    en: "Science",
    icon: '<path d="M10 3h4M10 3v5.2L5.6 16c-.9 1.6.3 3.5 2.1 3.5h8.6c1.8 0 3-1.9 2.1-3.5L14 8.2V3"/><path d="M8.3 14h7.4"/>'
  },
  {
    id: "philosophy",
    tr: "Felsefe",
    en: "Philosophy",
    icon: '<path d="M20 4c-6.2.9-11.3 6-13.3 13.2L4.6 20l2.9-2c6.9-.9 11.7-5.9 12.6-12.9 0-.4-.5-1.1-1.1-1.1z"/><path d="M9.2 14.8L5 19"/>'
  },
  {
    id: "psychology",
    tr: "Psikoloji",
    en: "Psychology",
    icon: '<path d="M9.3 4.2c-2.4 0-3.9 2-3.6 4.1C4.1 8.9 3.4 10.4 4.1 11.5c-.7 1.2 0 2.7 1.2 3.2-.2 1.3.7 2.6 2.2 2.8.2 1.4 1.7 2.4 3.1 1.9.6.4 1.5.4 2.1 0 1.4.5 2.9-.5 3.1-1.9 1.5-.2 2.4-1.5 2.2-2.8 1.2-.5 1.9-2 1.2-3.2.7-1.1 0-2.6-1.2-3.2.3-2.1-1.4-4-3.7-3.9-.9 0-1.6.4-2.1 1-.7-.6-1.6-1-2.6-1z"/><path d="M12 4.2v13"/>'
  },
  {
    id: "history",
    tr: "Tarih",
    en: "History",
    icon: '<path d="M6 3h12M6 21h12M7 3c0 5 4 6 5 9-1 3-5 4-5 9M17 3c0 5-4 6-5 9 1 3 5 4 5 9"/>'
  },
  {
    id: "economy",
    tr: "Ekonomi",
    en: "Economy",
    icon: '<path d="M5 20V14M10.5 20V10M16 20V13M21 20V6"/>'
  },
  {
    id: "advertising",
    tr: "Pazarlama & Reklam",
    en: "Advertising",
    icon: '<path d="M3 10.2v3.6h3l6.2 4V6.2l-6.2 4H3z"/><path d="M13.5 8.3c1.7.9 1.7 6.5 0 7.4M17.3 5.8c2.9 1.8 2.9 10.6 0 12.4"/>'
  },
  {
    id: "art",
    tr: "Sanat",
    en: "Art",
    icon: '<path d="M12 3C6.5 3 3 6.8 3 11c0 3 2 5 5 5h1.2c.7 0 1.3.6 1.3 1.3 0 .5-.2.9-.5 1.2-.4.4-.6.9-.6 1.5 0 1.1 1 2 2.6 2 5 0 9-4.5 9-10C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="1" fill="currentColor" stroke="none"/>'
  },
  {
    id: "law",
    tr: "Hukuk",
    en: "Law",
    icon: '<path d="M14 3l4 4-2.4 2.4-4-4L14 3z"/><path d="M12.4 7.6L3.8 16.2"/><path d="M3 21h7.5"/><path d="M6.3 17.5l3.2 3.2"/>'
  },
  {
    id: "astronomy",
    tr: "Astronomi",
    en: "Astronomy",
    icon: '<circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="9.5" ry="3" transform="rotate(-20 12 12)"/>'
  },
  {
    id: "mathematics",
    tr: "Matematik",
    en: "Mathematics",
    icon: '<path d="M12 3v3"/><path d="M12 6L6 20"/><path d="M12 6l6 14"/><path d="M9 14h6"/>'
  },
  {
    id: "health",
    tr: "Sağlık & Biyoloji",
    en: "Health",
    icon: '<path d="M3 12h3.5l1.8-6 3 12 2.2-9 1.5 3H21"/>'
  }
];

const SETTINGS_KEY = "offscript-settings-v1";
const HISTORY_KEY = "offscript-history-v1";
const SESSION_KEY = "offscript-session-v1";
const REVIEW_AFTER_MS = 7 * 24 * 60 * 60 * 1000; // 7 gün sonra tekrar hatırlatıcısı

// ---------- İlham & Merak Alıntıları (Günün Parşömeni) ----------
const CURIOSITY_QUOTES = [
  { text: "Öğrenmeyi bıraktığın gün yaşlanmaya başlarsın; merak, ruhun gençlik pınarıdır.", author: "Albert Einstein" },
  { text: "Dünyayı anlamaya duyulan tutku, insanın en asil macerasıdır.", author: "Carl Sagan" },
  { text: "Hiçbir şey yapmadan durmaktansa, bilmediğim bir denize yelken açmayı yeğlerim.", author: "Leonardo da Vinci" },
  { text: "İlim ve sanat takdir edilmediği yerden göç eder; merakını daima diri tut.", author: "İbn-i Sina" },
  { text: "Kitaplar, zamanın derinliklerinden gelen sessiz ama en sadık dostlardır.", author: "Montaigne" },
  { text: "Merak etmek, karanlık bir odaya kibrit çakmak gibidir; her kıvılcım yeni bir dünya aydınlatır.", author: "Ursula K. Le Guin" },
  { text: "Bir insanın zekası, verdiği cevaplardan çok sorduğu sorularda gizlidir.", author: "Voltaire" },
  { text: "Her gün yeni bir şey öğrenmeyen zihin, paslanan bir kılıca benzer.", author: "Seneca" },
  { text: "Bilim, bilmediğimiz şeylerin büyüsünü keşfetme sanatıdır.", author: "Richard Feynman" },
  { text: "Evren, onu anlamak isteyen meraklı zihinler için yazılmış muazzam bir kitaptır.", author: "Galileo Galilei" },
  { text: "Bizi insan kılan şey, yıldızlara bakıp 'Acaba?' diye sorma cesaretimizdir.", author: "Marcus Aurelius" }
];

let currentQuoteIndex = Math.floor(Math.random() * CURIOSITY_QUOTES.length);
let sessionPetCount = 0;

// ---------- Audio Synthesizer (Zero Dependency Web Audio API) ----------
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.ambienceSource = null;
    this.ambienceGain = null;
    this.ambienceTimer = null;
    this.currentAmbienceType = "none";
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playTick() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440 + Math.random() * 120, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch { /* sessiz kal */ }
  }

  playLand() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.15); // E5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.35);
    } catch { /* sessiz kal */ }
  }

  playChime() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C - E - G - C
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + i * 0.12;
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.8);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.8);
      });
    } catch { /* sessiz kal */ }
  }

  playPurr() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const duration = 1.1;

      // 26Hz titreşim modülasyonlu derin mırıltı
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const mod = this.ctx.createOscillator();
      const modGain = this.ctx.createGain();

      mod.type = "sine";
      mod.frequency.setValueAtTime(26, now);
      modGain.gain.setValueAtTime(24, now);
      mod.connect(osc.frequency);

      osc.type = "triangle";
      osc.frequency.setValueAtTime(88, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.24, now + 0.15);
      gain.gain.setValueAtTime(0.24, now + 0.85);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      mod.start(now);
      osc.start(now);
      mod.stop(now + duration);
      osc.stop(now + duration);
    } catch { /* sessiz kal */ }
  }

  playMeow() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const duration = 0.58;

      // İki harmonik osilatör: üçgen (sıcak gövde) + testere dişi (ses teli tınısı)
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc1.type = "triangle";
      osc2.type = "sawtooth";

      // Kedi ses tonu kayması (M-E-O-W: 460Hz -> 780Hz -> 360Hz)
      osc1.frequency.setValueAtTime(460, now);
      osc1.frequency.linearRampToValueAtTime(520, now + 0.07);
      osc1.frequency.exponentialRampToValueAtTime(780, now + 0.28);
      osc1.frequency.exponentialRampToValueAtTime(360, now + duration);

      osc2.frequency.setValueAtTime(460, now);
      osc2.frequency.linearRampToValueAtTime(520, now + 0.07);
      osc2.frequency.exponentialRampToValueAtTime(780, now + 0.28);
      osc2.frequency.exponentialRampToValueAtTime(360, now + duration);

      // Tatlı kedi ses bükülmesi (vibrato)
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();
      vibrato.frequency.setValueAtTime(5.8, now);
      vibratoGain.gain.setValueAtTime(14, now);
      vibrato.connect(osc1.frequency);
      vibrato.connect(osc2.frequency);
      vibrato.start(now);
      vibrato.stop(now + duration);

      // Ses yolu rezonansı (vowel formant filter: M-EE-AA-WW)
      const formant = this.ctx.createBiquadFilter();
      formant.type = "bandpass";
      formant.Q.setValueAtTime(3.4, now);
      formant.frequency.setValueAtTime(820, now);
      formant.frequency.linearRampToValueAtTime(1680, now + 0.26);
      formant.frequency.exponentialRampToValueAtTime(680, now + duration);

      // Genlik zarfı (doğal yumuşak kedi miyavlaması)
      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.22, now + 0.08);
      oscGain.gain.setValueAtTime(0.22, now + 0.28);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc1.connect(formant);
      osc2.connect(formant);
      formant.connect(oscGain);
      oscGain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration + 0.02);
      osc2.stop(now + duration + 0.02);
    } catch { /* sessiz kal */ }
  }

  playCatInteraction() {
    if (Math.random() < 0.6) {
      this.playMeow();
    } else {
      this.playPurr();
    }
  }

  playCoffee() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // High ceramic mug clink
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(1760, now);
      gain1.gain.setValueAtTime(0.08, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.25);

      // Warm low body note
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(440, now + 0.02);
      gain2.gain.setValueAtTime(0.05, now + 0.02);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.02);
      osc2.stop(now + 0.3);
    } catch { /* sessiz kal */ }
  }

  playRustle() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.15);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1200, now);
      filter.Q.setValueAtTime(1.5, now);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch { /* sessiz kal */ }
  }

  playWaxStamp() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(120, now);
      osc1.frequency.exponentialRampToValueAtTime(40, now + 0.12);
      gain1.gain.setValueAtTime(0.18, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.15);
    } catch { /* sessiz kal */ }
  }

  playChainClick() {
    if (!settings.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(1450, now);
      osc1.frequency.exponentialRampToValueAtTime(680, now + 0.05);
      gain1.gain.setValueAtTime(0.24, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.08);

      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(2600, now + 0.03);
      osc2.frequency.exponentialRampToValueAtTime(1100, now + 0.14);
      gain2.gain.setValueAtTime(0.12, now + 0.03);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.03);
      osc2.stop(now + 0.18);
    } catch { /* sessiz kal */ }
  }

  createPinkNoiseBuffer(seconds = 3) {
    const length = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.38;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  createBrownNoiseBuffer(seconds = 3) {
    const length = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 8.5;
    }
    return buffer;
  }

  setAmbience(type) {
    this.currentAmbienceType = type;
    this.stopAmbience();
    if (!settings.sound || type === "none") return;
    this.init();
    if (!this.ctx) return;

    if (type === "rain") {
      this.startRain();
    } else if (type === "fire") {
      this.startFire();
    }
  }

  startRain() {
    try {
      // 1. Derin Uzak Yağmur Uğultusu (Warm Brown Noise Bed)
      const brownBuf = this.createBrownNoiseBuffer(3);
      const brownSrc = this.ctx.createBufferSource();
      brownSrc.buffer = brownBuf;
      brownSrc.loop = true;

      const lowFilter = this.ctx.createBiquadFilter();
      lowFilter.type = "lowpass";
      lowFilter.frequency.setValueAtTime(380, this.ctx.currentTime);

      const rainBedGain = this.ctx.createGain();
      rainBedGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      rainBedGain.gain.linearRampToValueAtTime(0.24, this.ctx.currentTime + 0.8);

      brownSrc.connect(lowFilter);
      lowFilter.connect(rainBedGain);
      rainBedGain.connect(this.ctx.destination);
      brownSrc.start();

      // 2. Yumuşak Yağmur Çiselemesi & Rüzgar Dalgası (Pink Noise Mid-Drizzle with gentle LFO)
      const pinkBuf = this.createPinkNoiseBuffer(3);
      const pinkSrc = this.ctx.createBufferSource();
      pinkSrc.buffer = pinkBuf;
      pinkSrc.loop = true;

      const bandFilter = this.ctx.createBiquadFilter();
      bandFilter.type = "bandpass";
      bandFilter.frequency.setValueAtTime(950, this.ctx.currentTime);
      bandFilter.Q.setValueAtTime(1.1, this.ctx.currentTime);

      const drizzleGain = this.ctx.createGain();
      drizzleGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      drizzleGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 0.8);

      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.15, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(drizzleGain.gain);
      lfo.start();

      pinkSrc.connect(bandFilter);
      bandFilter.connect(drizzleGain);
      drizzleGain.connect(this.ctx.destination);
      pinkSrc.start();

      this.ambienceSources = [brownSrc, pinkSrc, lfo];
      this.ambienceGains = [rainBedGain, drizzleGain];

      // 3. Cama Vuran Doğal Tekil Damlalar (Organic ASMR Window Droplets)
      const scheduleNextDrop = () => {
        if (!this.ctx || this.currentAmbienceType !== "rain" || !settings.sound) return;
        try {
          const now = this.ctx.currentTime;
          const dropBuffer = this.createPinkNoiseBuffer(0.06);
          const dropSrc = this.ctx.createBufferSource();
          dropSrc.buffer = dropBuffer;

          const dropFilter = this.ctx.createBiquadFilter();
          dropFilter.type = "bandpass";
          dropFilter.frequency.setValueAtTime(1600 + Math.random() * 1400, now);
          dropFilter.Q.setValueAtTime(3.5, now);

          const dropGain = this.ctx.createGain();
          const vol = 0.06 + Math.random() * 0.12;
          dropGain.gain.setValueAtTime(vol, now);
          dropGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

          dropSrc.connect(dropFilter);
          dropFilter.connect(dropGain);
          dropGain.connect(this.ctx.destination);

          dropSrc.start(now);
          dropSrc.stop(now + 0.045);
        } catch { /* ignore */ }

        const nextDelay = 40 + Math.random() * 85;
        this.ambienceTimer = setTimeout(scheduleNextDrop, nextDelay);
      };

      this.ambienceTimer = setTimeout(scheduleNextDrop, 150);

    } catch { /* sessiz kal */ }
  }

  startFire() {
    try {
      // 1. Taş Ocak / Şömine Hava Uğultusu (Warm Low Hearth Draft)
      const brownBuf = this.createBrownNoiseBuffer(3);
      const brownSrc = this.ctx.createBufferSource();
      brownSrc.buffer = brownBuf;
      brownSrc.loop = true;

      const hearthFilter = this.ctx.createBiquadFilter();
      hearthFilter.type = "lowpass";
      hearthFilter.frequency.setValueAtTime(220, this.ctx.currentTime);

      const hearthGain = this.ctx.createGain();
      hearthGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      hearthGain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + 0.8);

      brownSrc.connect(hearthFilter);
      hearthFilter.connect(hearthGain);
      hearthGain.connect(this.ctx.destination);
      brownSrc.start();

      // 2. Köz Fısıltısı (Gentle Mid Ember Shimmer)
      const pinkBuf = this.createPinkNoiseBuffer(3);
      const pinkSrc = this.ctx.createBufferSource();
      pinkSrc.buffer = pinkBuf;
      pinkSrc.loop = true;

      const emberFilter = this.ctx.createBiquadFilter();
      emberFilter.type = "bandpass";
      emberFilter.frequency.setValueAtTime(700, this.ctx.currentTime);
      emberFilter.Q.setValueAtTime(1.2, this.ctx.currentTime);

      const emberGain = this.ctx.createGain();
      emberGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      emberGain.gain.linearRampToValueAtTime(0.14, this.ctx.currentTime + 0.8);

      pinkSrc.connect(emberFilter);
      emberFilter.connect(emberGain);
      emberGain.connect(this.ctx.destination);
      pinkSrc.start();

      this.ambienceSources = [brownSrc, pinkSrc];
      this.ambienceGains = [hearthGain, emberGain];

      // 3. Gerçekçi Odun Çıtırtıları & Kıvılcımlar (Organic Wood Pops & Spark Snaps)
      const scheduleNextPop = () => {
        if (!this.ctx || this.currentAmbienceType !== "fire" || !settings.sound) return;
        try {
          const now = this.ctx.currentTime;
          const isDeepPop = Math.random() < 0.22;

          if (isDeepPop) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(45, now + 0.05);
            gain.gain.setValueAtTime(0.20, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.065);
          } else {
            const popBuf = this.createPinkNoiseBuffer(0.03);
            const popSrc = this.ctx.createBufferSource();
            popSrc.buffer = popBuf;

            const popFilter = this.ctx.createBiquadFilter();
            popFilter.type = "highpass";
            popFilter.frequency.setValueAtTime(2200 + Math.random() * 2600, now);

            const popGain = this.ctx.createGain();
            const vol = 0.12 + Math.random() * 0.16;
            popGain.gain.setValueAtTime(vol, now);
            popGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

            popSrc.connect(popFilter);
            popFilter.connect(popGain);
            popGain.connect(this.ctx.destination);

            popSrc.start(now);
            popSrc.stop(now + 0.03);
          }
        } catch { /* ignore */ }

        const nextDelay = 70 + Math.random() * 260;
        this.ambienceTimer = setTimeout(scheduleNextPop, nextDelay);
      };

      this.ambienceTimer = setTimeout(scheduleNextPop, 120);

    } catch { /* sessiz kal */ }
  }

  stopAmbience() {
    if (this.ambienceTimer) {
      clearTimeout(this.ambienceTimer);
      clearInterval(this.ambienceTimer);
      this.ambienceTimer = null;
    }
    if (this.ambienceGains && this.ctx) {
      const now = this.ctx.currentTime;
      this.ambienceGains.forEach((g) => {
        try { g.gain.linearRampToValueAtTime(0.0001, now + 0.4); } catch { /* ignore */ }
      });
    }
    if (this.ambienceSources) {
      const sources = this.ambienceSources;
      setTimeout(() => {
        sources.forEach((s) => {
          try { s.stop(); s.disconnect(); } catch { /* ignore */ }
        });
      }, 450);
      this.ambienceSources = null;
    }
    this.ambienceGains = null;
  }
}

const sfx = new SoundEffects();

// ---------- State ----------
let settings = loadSettings();
let state = {
  phase: "idle", // idle -> landed -> researching -> done
  topic: null,
  spinning: false,
  timerId: null,
  remaining: 0,
  totalForPhase: 0,
  paused: false,
  notes: ""
};

let dismissedReview = null;
let historySearchQuery = "";
let historyActiveCategory = "all";
let tabDragMoved = false; // sekme şeridi sürüklendi mi (yanlışlıkla seçimi engeller)

// ---------- DOM Cache ----------
const stage = document.querySelector("#stage");
const toast = document.querySelector("#toast");
const settingsBtn = document.querySelector("#settingsBtn");
const settingsModal = document.querySelector("#settingsModal");
const closeSettings = document.querySelector("#closeSettings");
const profileBtn = document.querySelector("#profileBtn");
const profileModal = document.querySelector("#profileModal");
const closeProfile = document.querySelector("#closeProfile");
const soundQuickToggle = document.querySelector("#soundQuickToggle");
const soundIconOn = document.querySelector("#soundIconOn");
const soundIconOff = document.querySelector("#soundIconOff");
const ambientSoundBtn = document.querySelector("#ambientSoundBtn");
const ambientIcon = document.querySelector("#ambientIcon");
const lampPullChain = document.querySelector("#lampPullChain");

const researchRange = document.querySelector("#researchRange");
const researchLabel = document.querySelector("#researchLabel");
const soundToggle = document.querySelector("#soundToggle");

const statsContainer = document.querySelector("#statsContainer");
const historyListContainer = document.querySelector("#historyListContainer");
const historyFilterRow = document.querySelector("#historyFilterRow");
const historySearchInput = document.querySelector("#historySearchInput");
const exportHistoryBtn = document.querySelector("#exportHistoryBtn");
const clearHistoryBtn = document.querySelector("#clearHistoryBtn");

// ---------- Helpers ----------

// Şablon dizgilerine giren her kullanıcı/AI metni bundan geçmeli.
const ESCAPE_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ESCAPE_MAP[ch]);
}

function loadSettings() {
  const fallback = {
    researchMinutes: 15,
    sound: true,
    theme: "dark",
    palette: "coffee",
    category: "general",
    ambience: "none",
    lampFocus: false
  };
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    const loaded = { ...fallback, ...parsed };

    const hadLegacyFields = "provider" in loaded || "apiKeys" in loaded || "models" in loaded || "waxColor" in loaded;
    delete loaded.provider;
    delete loaded.apiKeys;
    delete loaded.models;
    delete loaded.waxColor;
    if (hadLegacyFields) {
      try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(loaded)); } catch { /* ignore */ }
    }

    return loaded;
  } catch {
    return fallback;
  }
}

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch { /* ignore */ }
  syncSoundIcons();
  syncAmbientButton();
  applyTheme(settings.theme);
  applyPalette(settings.palette);
  applyLampFocus(settings.lampFocus);
}

function applyTheme(theme = settings.theme || "dark") {
  settings.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);

  const themeIconDark = document.querySelector("#themeIconDark");
  const themeIconLight = document.querySelector("#themeIconLight");
  const themeBtnDark = document.querySelector("#themeBtnDark");
  const themeBtnLight = document.querySelector("#themeBtnLight");

  if (theme === "light") {
    if (themeIconDark) themeIconDark.classList.add("is-hidden");
    if (themeIconLight) themeIconLight.classList.remove("is-hidden");
    if (themeBtnDark) themeBtnDark.classList.remove("is-active");
    if (themeBtnLight) themeBtnLight.classList.add("is-active");
  } else {
    if (themeIconDark) themeIconDark.classList.remove("is-hidden");
    if (themeIconLight) themeIconLight.classList.add("is-hidden");
    if (themeBtnDark) themeBtnDark.classList.add("is-active");
    if (themeBtnLight) themeBtnLight.classList.remove("is-active");
  }
}

function applyPalette(palette = settings.palette || "coffee") {
  settings.palette = palette;
  document.documentElement.setAttribute("data-palette", palette);

  document.querySelectorAll(".palette-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.palette === palette);
  });
}

function applyLampFocus(isFocus = settings.lampFocus || false) {
  settings.lampFocus = isFocus;
  document.body.classList.toggle("focus-lamp-on", isFocus);
  if (lampPullChain) {
    lampPullChain.classList.toggle("is-lit", isFocus);
  }
}

function syncAmbientButton() {
  if (!ambientIcon || !ambientSoundBtn) return;
  const map = {
    none: { icon: "🔇", title: "Arka Plan Ambiyansı: Kapalı (Açmak için tıkla)" },
    rain: { icon: "🌧️", title: "Arka Plan Ambiyansı: Yağmur Sesi" },
    fire: { icon: "🔥", title: "Arka Plan Ambiyansı: Şömine Çıtırtısı" }
  };
  const cur = map[settings.ambience] || map.none;
  ambientIcon.textContent = cur.icon;
  ambientSoundBtn.title = cur.title;
  ambientSoundBtn.classList.toggle("is-active", settings.ambience !== "none");
}

function syncSoundIcons() {
  if (soundIconOn && soundIconOff) {
    if (settings.sound) {
      soundIconOn.classList.remove("is-hidden");
      soundIconOff.classList.add("is-hidden");
    } else {
      soundIconOn.classList.add("is-hidden");
      soundIconOff.classList.remove("is-hidden");
    }
  }
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(list) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
  } catch { /* ignore */ }
}

function addToHistory(topic, category, notes = "") {
  const list = loadHistory();
  list.unshift({
    tr: topic.tr,
    en: topic.en,
    category: category || "general",
    notes: notes ? notes.trim() : "",
    finishedAt: Date.now()
  });
  saveHistory(list);
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("is-hidden");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.add("is-hidden");
  }, 2200);
}

function copyToClipboard(text, msg = "Panoya kopyalandı!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg);
  }).catch(() => {
    showToast("Kopyalanamadı");
  });
}

function formatTime(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function reviewTopicKey(item) {
  return `${item.tr}|${item.en}`;
}

function dueForReview() {
  const list = loadHistory();
  if (!list.length) return null;
  const now = Date.now();
  const latestByTopic = new Map();
  for (const item of list) {
    const key = reviewTopicKey(item);
    if (!latestByTopic.has(key)) latestByTopic.set(key, item);
  }
  for (const item of latestByTopic.values()) {
    if (reviewTopicKey(item) === dismissedReview) continue;
    if (now - item.finishedAt >= REVIEW_AFTER_MS) return item;
  }
  return null;
}

// ---------- Countdown Engine ----------
function startCountdown(seconds, onDone, startFrom = seconds) {
  clearInterval(state.timerId);
  state.totalForPhase = seconds;
  state.remaining = startFrom;
  state.paused = false;

  state.timerId = setInterval(() => {
    if (state.paused) return;
    state.remaining -= 1;
    persistSession();
    if (state.remaining <= 0) {
      clearInterval(state.timerId);
      sfx.playChime();
      triggerConfetti();
      onDone();
      return;
    }
    updateTimerDisplay();
  }, 1000);
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const digits = document.querySelector("#timerDigits");
  const circle = document.querySelector("#radialProgress");
  const section = document.querySelector("#timerSection");

  if (digits) digits.textContent = formatTime(Math.max(state.remaining, 0));
  if (circle) {
    const ratio = state.totalForPhase ? Math.max(0, state.remaining / state.totalForPhase) : 0;
    const circumference = 440; // 2 * PI * 70
    const offset = circumference * (1 - ratio);
    circle.style.strokeDashoffset = offset.toFixed(2);
  }
  if (section) {
    if (state.paused) section.classList.add("is-paused");
    else section.classList.remove("is-paused");
  }
}

// Her kategorinin kendi elle küratörlüğü yapılmış havuzu. Tanım/açıklama
// yok: kavramın adı verilir, araştırmayı kullanıcı yapar.
const CATEGORY_TOPICS = {
  general: TOPICS,
  technology: [
    { tr: "Conway Yasası", en: "Conway's Law" },
    { tr: "CAP Teoremi", en: "CAP Theorem" },
    { tr: "Halting Problemi", en: "The Halting Problem" },
    { tr: "Bizans Generalleri Problemi", en: "Byzantine Generals Problem" },
    { tr: "Moore Yasası", en: "Moore's Law" },
    { tr: "Amdahl Yasası", en: "Amdahl's Law" },
    { tr: "Turing Bütünlüğü", en: "Turing Completeness" },
    { tr: "Linus Yasası", en: "Linus's Law" },
    { tr: "Sızdıran Soyutlamalar Yasası", en: "The Law of Leaky Abstractions" },
    { tr: "P vs NP Problemi", en: "P versus NP Problem" },
    { tr: "Kuantum Üstünlüğü", en: "Quantum Supremacy" },
    { tr: "Dağıtık Mutabakat (Raft)", en: "Raft Consensus Algorithm" },
    { tr: "Açıklanabilir Yapay Zeka", en: "Explainable AI" },
    { tr: "Algoritmik Yanlılık", en: "Algorithmic Bias" },
    { tr: "Brooks Yasası", en: "Brooks's Law" },
    { tr: "Postel Yasası (Dayanıklılık İlkesi)", en: "Postel's Law" },
    { tr: "Hyrum Yasası", en: "Hyrum's Law" },
    { tr: "İki Generaller Problemi", en: "Two Generals' Problem" },
    { tr: "Yemek Yiyen Filozoflar Problemi", en: "Dining Philosophers Problem" },
    { tr: "Yarış Durumu", en: "Race Condition" },
    { tr: "Ölümcül Kilitlenme", en: "Deadlock" },
    { tr: "Teknik Borç", en: "Technical Debt" },
    { tr: "Kerckhoffs İlkesi", en: "Kerckhoffs's Principle" },
    { tr: "Merkle Ağacı", en: "Merkle Tree" },
    { tr: "Dijkstra'nın En Kısa Yol Algoritması", en: "Dijkstra's Algorithm" },
    { tr: "Huffman Kodlaması", en: "Huffman Coding" },
    { tr: "Nyquist-Shannon Örnekleme Teoremi", en: "Nyquist-Shannon Sampling Theorem" },
    { tr: "Metcalfe Yasası", en: "Metcalfe's Law" },
    { tr: "Von Neumann Mimarisi", en: "Von Neumann Architecture" },
    { tr: "Turing Testi", en: "The Turing Test" }
  ],
  science: [
    { tr: "Entropi İlkesi", en: "The Principle of Entropy" },
    { tr: "Schrödinger'in Kedisi", en: "Schrödinger's Cat" },
    { tr: "Heisenberg Belirsizlik İlkesi", en: "Heisenberg Uncertainty Principle" },
    { tr: "Çift Yarık Deneyi", en: "Double-Slit Experiment" },
    { tr: "Fotoelektrik Etki", en: "Photoelectric Effect" },
    { tr: "Doppler Etkisi", en: "The Doppler Effect" },
    { tr: "Kaos Teorisi ve Kelebek Etkisi", en: "Chaos Theory & The Butterfly Effect" },
    { tr: "Kırmızıya Kayma", en: "Redshift Phenomenon" },
    { tr: "Higgs Bozonu", en: "The Higgs Boson" },
    { tr: "Mutlak Sıfır", en: "Absolute Zero" },
    { tr: "Özel Görelilik Kuramı", en: "Special Relativity" },
    { tr: "Genel Görelilik Kuramı", en: "General Relativity" },
    { tr: "Kuantum Dolanıklığı", en: "Quantum Entanglement" },
    { tr: "Pauli Dışarlama İlkesi", en: "Pauli Exclusion Principle" },
    { tr: "Maxwell'in Şeytanı", en: "Maxwell's Demon" },
    { tr: "Brown Hareketi", en: "Brownian Motion" },
    { tr: "Rezonans Olayı", en: "Resonance" },
    { tr: "Coriolis Etkisi", en: "The Coriolis Effect" },
    { tr: "Bernoulli İlkesi", en: "Bernoulli's Principle" },
    { tr: "Arşimet İlkesi", en: "Archimedes' Principle" },
    { tr: "Le Chatelier İlkesi", en: "Le Chatelier's Principle" },
    { tr: "Avogadro Sayısı", en: "Avogadro's Number" },
    { tr: "Periyodik Yasa", en: "The Periodic Law" },
    { tr: "Gözlemci Etkisi", en: "The Observer Effect" },
    { tr: "Süperiletkenlik", en: "Superconductivity" },
    { tr: "Kuantum Tünelleme", en: "Quantum Tunnelling" },
    { tr: "Antimadde", en: "Antimatter" },
    { tr: "Nötrino Salınımı", en: "Neutrino Oscillation" },
    { tr: "Casimir Etkisi", en: "The Casimir Effect" },
    { tr: "Beliren Özellikler", en: "Emergence" }
  ],
  philosophy: [
    { tr: "Theseus'un Gemisi", en: "Ship of Theseus" },
    { tr: "Tramvay Problemi", en: "The Trolley Problem" },
    { tr: "Platon'un Mağara Alegorisi", en: "Allegory of the Cave" },
    { tr: "Çin Odası Düşünce Deneyi", en: "The Chinese Room Argument" },
    { tr: "Epiküros Paradoksu", en: "The Epicurean Paradox" },
    { tr: "Tabula Rasa", en: "Tabula Rasa (Blank Slate)" },
    { tr: "Kategorik Buyruk", en: "The Categorical Imperative" },
    { tr: "Solipsizm", en: "Solipsism" },
    { tr: "Buridan'ın Eşeği", en: "Buridan's Ass" },
    { tr: "Deneyim Makinesi", en: "The Experience Machine" },
    { tr: "Gettier Problemi", en: "The Gettier Problem" },
    { tr: "Occam'ın Usturası", en: "Occam's Razor" },
    { tr: "Hume Giyotini (Olan-Olması Gereken)", en: "Hume's Guillotine (Is-Ought Problem)" },
    { tr: "Pascal'ın Bahsi", en: "Pascal's Wager" },
    { tr: "Fıçıdaki Beyin", en: "Brain in a Vat" },
    { tr: "Sorites (Yığın) Paradoksu", en: "The Sorites Paradox" },
    { tr: "Zenon'un Paradoksları", en: "Zeno's Paradoxes" },
    { tr: "Yalancı Paradoksu", en: "The Liar Paradox" },
    { tr: "Mary'nin Odası (Bilgi Argümanı)", en: "Mary's Room" },
    { tr: "Bengi Dönüş", en: "Eternal Recurrence" },
    { tr: "Sisifos Miti ve Absürt", en: "The Myth of Sisyphus" },
    { tr: "Kötülüğün Sıradanlığı", en: "The Banality of Evil" },
    { tr: "Panoptikon", en: "The Panopticon" },
    { tr: "Toplumsal Sözleşme", en: "The Social Contract" },
    { tr: "Kategori Hatası", en: "Category Mistake" },
    { tr: "Varoluş Özden Önce Gelir", en: "Existence Precedes Essence" },
    { tr: "Zihin-Beden İkiliği", en: "Mind-Body Dualism" },
    { tr: "Doğalcı Yanılgı", en: "The Naturalistic Fallacy" },
    { tr: "Felsefi Zombi", en: "Philosophical Zombie" },
    { tr: "Chesterton'ın Çiti", en: "Chesterton's Fence" }
  ],
  psychology: [
    { tr: "Bilişsel Çelişki", en: "Cognitive Dissonance" },
    { tr: "Asch Uyum Deneyi", en: "Asch Conformity Experiment" },
    { tr: "Dunning-Kruger Etkisi", en: "Dunning-Kruger Effect" },
    { tr: "Hedonik Koşu Bandı", en: "The Hedonic Treadmill" },
    { tr: "Sahtekarlık Sendromu", en: "Impostor Syndrome" },
    { tr: "Görünmez Goril Deneyi", en: "The Invisible Gorilla Test" },
    { tr: "Akış Hali", en: "Flow State" },
    { tr: "Ayna Nöronlar", en: "Mirror Neurons" },
    { tr: "Seyirci Etkisi", en: "The Bystander Effect" },
    { tr: "Zeigarnik Etkisi", en: "The Zeigarnik Effect" },
    { tr: "Doğrulama Yanlılığı", en: "Confirmation Bias" },
    { tr: "Kayıptan Kaçınma", en: "Loss Aversion" },
    { tr: "Çerçeveleme Etkisi", en: "The Framing Effect" },
    { tr: "Temel Atıf Hatası", en: "Fundamental Attribution Error" },
    { tr: "Milgram İtaat Deneyi", en: "Milgram Experiment" },
    { tr: "Stanford Hapishane Deneyi", en: "Stanford Prison Experiment" },
    { tr: "Klasik Koşullanma", en: "Classical Conditioning" },
    { tr: "Öğrenilmiş Çaresizlik", en: "Learned Helplessness" },
    { tr: "Maslow İhtiyaçlar Hiyerarşisi", en: "Maslow's Hierarchy of Needs" },
    { tr: "Bilişsel Yük Kuramı", en: "Cognitive Load Theory" },
    { tr: "Aralıklı Tekrar", en: "Spaced Repetition" },
    { tr: "Ebbinghaus Unutma Eğrisi", en: "The Forgetting Curve" },
    { tr: "Zirve-Son Kuralı", en: "Peak-End Rule" },
    { tr: "Batık Maliyet Yanılgısı", en: "Sunk Cost Fallacy" },
    { tr: "Barnum Etkisi", en: "The Barnum Effect" },
    { tr: "Halo Etkisi", en: "The Halo Effect" },
    { tr: "Sahiplik Etkisi", en: "The Endowment Effect" },
    { tr: "Yanlış Uzlaşı Etkisi", en: "False Consensus Effect" },
    { tr: "Sosyal Kaytarma", en: "Social Loafing" },
    { tr: "Grup Düşüncesi", en: "Groupthink" }
  ],
  history: [
    { tr: "Magna Carta", en: "Magna Carta Libertatum" },
    { tr: "Vestfalya Barışı", en: "Peace of Westphalia" },
    { tr: "İskenderiye Kütüphanesi", en: "The Library of Alexandria" },
    { tr: "Kadeş Barış Antlaşması", en: "Treaty of Kadesh" },
    { tr: "Meiji Restorasyonu", en: "The Meiji Restoration" },
    { tr: "Manhattan Projesi", en: "The Manhattan Project" },
    { tr: "Enigma ve Bletchley Park", en: "Enigma Cryptanalysis" },
    { tr: "Soğuk Savaş Doktrini", en: "The Cold War Doctrine" },
    { tr: "Gutenberg ve Matbaa Devrimi", en: "Gutenberg Printing Revolution" },
    { tr: "Hammurabi Kanunları", en: "Code of Hammurabi" },
    { tr: "İpek Yolu", en: "The Silk Road" },
    { tr: "Batı Roma'nın Çöküşü", en: "Fall of the Western Roman Empire" },
    { tr: "Kara Ölüm", en: "The Black Death" },
    { tr: "Haçlı Seferleri", en: "The Crusades" },
    { tr: "Rönesans", en: "The Renaissance" },
    { tr: "Coğrafi Keşifler Çağı", en: "The Age of Discovery" },
    { tr: "Aydınlanma Çağı", en: "The Age of Enlightenment" },
    { tr: "Fransız Devrimi", en: "The French Revolution" },
    { tr: "Sanayi Devrimi", en: "The Industrial Revolution" },
    { tr: "Amerikan Bağımsızlık Bildirgesi", en: "United States Declaration of Independence" },
    { tr: "Rosetta Taşı", en: "The Rosetta Stone" },
    { tr: "Berlin Konferansı", en: "The Berlin Conference" },
    { tr: "Sykes-Picot Antlaşması", en: "Sykes-Picot Agreement" },
    { tr: "Versay Antlaşması", en: "Treaty of Versailles" },
    { tr: "Marshall Planı", en: "The Marshall Plan" },
    { tr: "Küba Füze Krizi", en: "Cuban Missile Crisis" },
    { tr: "Berlin Duvarı'nın Yıkılışı", en: "Fall of the Berlin Wall" },
    { tr: "Truva Kazıları", en: "The Excavation of Troy" },
    { tr: "Göbeklitepe", en: "Göbekli Tepe" },
    { tr: "Lozan Antlaşması", en: "Treaty of Lausanne" }
  ],
  economy: [
    { tr: "Mahkumlar Çıkmazı", en: "Prisoner's Dilemma" },
    { tr: "Ortak Malların Trajedisi", en: "Tragedy of the Commons" },
    { tr: "Nash Dengesi", en: "Nash Equilibrium" },
    { tr: "Görünmez El", en: "The Invisible Hand" },
    { tr: "Gresham Yasası", en: "Gresham's Law" },
    { tr: "Lale Çılgınlığı", en: "Tulip Mania" },
    { tr: "Kara Kuğu Teorisi", en: "The Black Swan Theory" },
    { tr: "Fırsat Maliyeti", en: "Opportunity Cost" },
    { tr: "Pareto İlkesi (80/20)", en: "The Pareto Principle" },
    { tr: "Arz ve Talep Yasası", en: "Law of Supply and Demand" },
    { tr: "Azalan Verimler Yasası", en: "Law of Diminishing Returns" },
    { tr: "Karşılaştırmalı Üstünlük", en: "Comparative Advantage" },
    { tr: "Ölçek Ekonomileri", en: "Economies of Scale" },
    { tr: "Hiperenflasyon", en: "Hyperinflation" },
    { tr: "Stagflasyon", en: "Stagflation" },
    { tr: "Ahlaki Tehlike", en: "Moral Hazard" },
    { tr: "Ters Seçim", en: "Adverse Selection" },
    { tr: "Limon Piyasası (Bilgi Asimetrisi)", en: "The Market for Lemons" },
    { tr: "Goodhart Yasası", en: "Goodhart's Law" },
    { tr: "Veblen Malları", en: "Veblen Goods" },
    { tr: "Giffen Malları", en: "Giffen Goods" },
    { tr: "Yaratıcı Yıkım", en: "Creative Destruction" },
    { tr: "Keynesyen Çarpan Etkisi", en: "The Keynesian Multiplier" },
    { tr: "Phillips Eğrisi", en: "The Phillips Curve" },
    { tr: "Laffer Eğrisi", en: "The Laffer Curve" },
    { tr: "Gini Katsayısı", en: "Gini Coefficient" },
    { tr: "Hollanda Hastalığı", en: "Dutch Disease" },
    { tr: "Güney Denizi Balonu", en: "The South Sea Bubble" },
    { tr: "2008 Mortgage Krizi", en: "The 2008 Subprime Crisis" },
    { tr: "Dürtme Kuramı", en: "Nudge Theory" }
  ],
  advertising: [
    { tr: "Konumlandırma Stratejisi", en: "Positioning Strategy" },
    { tr: "AIDA Modeli", en: "AIDA Model" },
    { tr: "Çapa Etkisi", en: "The Anchoring Effect" },
    { tr: "Sosyal Kanıt İlkesi", en: "Social Proof Principle" },
    { tr: "Kıtlık Psikolojisi", en: "The Scarcity Principle" },
    { tr: "Mavi Okyanus Stratejisi", en: "Blue Ocean Strategy" },
    { tr: "1.000 Gerçek Hayran", en: "1,000 True Fans" },
    { tr: "Gündem Belirleme Kuramı", en: "Agenda-Setting Theory" },
    { tr: "Karşılıklılık İlkesi", en: "The Reciprocity Principle" },
    { tr: "Tutarlılık ve Bağlılık İlkesi", en: "Commitment and Consistency" },
    { tr: "Otorite İlkesi", en: "The Authority Principle" },
    { tr: "Sevilirlik İlkesi", en: "The Liking Principle" },
    { tr: "Benzersiz Satış Önerisi", en: "Unique Selling Proposition" },
    { tr: "Marka Kişiliği", en: "Brand Personality" },
    { tr: "Zihinsel Kullanılabilirlik", en: "Mental Availability" },
    { tr: "Yeniden Hedefleme", en: "Retargeting" },
    { tr: "Satın Alma Hunisi", en: "The Purchase Funnel" },
    { tr: "Yeniliklerin Yayılımı", en: "Diffusion of Innovations" },
    { tr: "Uçurumu Aşmak", en: "Crossing the Chasm" },
    { tr: "İki Aşamalı Akış Kuramı", en: "Two-Step Flow of Communication" },
    { tr: "Suskunluk Sarmalı", en: "The Spiral of Silence" },
    { tr: "Ekme Kuramı", en: "Cultivation Theory" },
    { tr: "Kullanımlar ve Doyumlar Kuramı", en: "Uses and Gratifications Theory" },
    { tr: "Medyada Çerçeveleme", en: "Media Framing" },
    { tr: "Kapı Aralama Tekniği", en: "Foot-in-the-Door Technique" },
    { tr: "Yüze Kapı Çarpma Tekniği", en: "Door-in-the-Face Technique" },
    { tr: "Tuzak Seçenek Etkisi", en: "The Decoy Effect" },
    { tr: "Sıfır Fiyat Etkisi", en: "The Zero Price Effect" },
    { tr: "Von Restorff Etkisi", en: "The Von Restorff Effect" },
    { tr: "Sürü Psikolojisi", en: "The Bandwagon Effect" }
  ],
  art: [
    { tr: "Altın Oran", en: "The Golden Ratio in Art" },
    { tr: "Kiaroskuro (Işık-Gölge)", en: "Chiaroscuro Technique" },
    { tr: "Bauhaus Hareketi", en: "The Bauhaus Movement" },
    { tr: "Sfumato Tekniği", en: "Sfumato" },
    { tr: "Dadaizm ve Hazır-Nesne", en: "Dadaism and Ready-Made Art" },
    { tr: "Wabi-Sabi Estetiği", en: "Wabi-Sabi Aesthetic" },
    { tr: "Kintsugi Felsefesi", en: "Kintsugi Gold Repair" },
    { tr: "Çizgisel Perspektif", en: "Linear Perspective" },
    { tr: "Üçler Kuralı", en: "Rule of Thirds" },
    { tr: "Negatif Alan", en: "Negative Space" },
    { tr: "Tenebrizm", en: "Tenebrism" },
    { tr: "İzlenimcilik", en: "Impressionism" },
    { tr: "Post-İzlenimcilik", en: "Post-Impressionism" },
    { tr: "Kübizm", en: "Cubism" },
    { tr: "Dışavurumculuk", en: "Expressionism" },
    { tr: "Sürrealizm", en: "Surrealism" },
    { tr: "Fütürizm", en: "Futurism" },
    { tr: "Soyut Dışavurumculuk", en: "Abstract Expressionism" },
    { tr: "Pop Art", en: "Pop Art" },
    { tr: "Minimalizm", en: "Minimalism" },
    { tr: "Barok Sanat", en: "Baroque Art" },
    { tr: "Rokoko", en: "Rococo" },
    { tr: "Art Nouveau", en: "Art Nouveau" },
    { tr: "Art Deco", en: "Art Deco" },
    { tr: "Ukiyo-e Baskıları", en: "Ukiyo-e" },
    { tr: "Sumi-e Mürekkep Resmi", en: "Sumi-e" },
    { tr: "Trompe-l'oeil (Göz Aldatmacası)", en: "Trompe-l'oeil" },
    { tr: "Vanitas Sembolizmi", en: "Vanitas" },
    { tr: "Fresk Tekniği", en: "Fresco" },
    { tr: "Auranın Yitimi", en: "The Work of Art in the Age of Mechanical Reproduction" }
  ],
  law: [
    { tr: "Masumiyet Karinesi", en: "Presumption of Innocence" },
    { tr: "Habeas Corpus Güvencesi", en: "Habeas Corpus" },
    { tr: "Suç ve Cezanın Kanuniliği", en: "Nullum Crimen Sine Lege" },
    { tr: "Kuvvetler Ayrılığı İlkesi", en: "Separation of Powers" },
    { tr: "Miranda Hakları", en: "Miranda Rights" },
    { tr: "Jus Cogens (Emredici Normlar)", en: "Jus Cogens Norms" },
    { tr: "Orantılılık İlkesi", en: "Principle of Proportionality" },
    { tr: "Hukukun Üstünlüğü", en: "The Rule of Law" },
    { tr: "Kanun Önünde Eşitlik", en: "Equality Before the Law" },
    { tr: "Adil Yargılanma Hakkı", en: "Right to a Fair Trial" },
    { tr: "Şüpheden Sanık Yararlanır", en: "In Dubio Pro Reo" },
    { tr: "Aynı Suçtan İki Kez Yargılanmama", en: "Double Jeopardy" },
    { tr: "Geriye Yürümezlik İlkesi", en: "Non-Retroactivity of Law" },
    { tr: "Zehirli Ağacın Meyvesi", en: "Fruit of the Poisonous Tree" },
    { tr: "Emsal Karara Bağlılık", en: "Stare Decisis" },
    { tr: "Sözleşme Serbestisi", en: "Freedom of Contract" },
    { tr: "Ahde Vefa İlkesi", en: "Pacta Sunt Servanda" },
    { tr: "İyi Niyet İlkesi", en: "Principle of Good Faith" },
    { tr: "Hakkın Kötüye Kullanılması Yasağı", en: "Abuse of Rights" },
    { tr: "Mücbir Sebep", en: "Force Majeure" },
    { tr: "Kusursuz Sorumluluk", en: "Strict Liability" },
    { tr: "Meşru Müdafaa", en: "Self-Defence" },
    { tr: "Zamanaşımı", en: "Statute of Limitations" },
    { tr: "Anayasa Yargısı", en: "Judicial Review" },
    { tr: "Yargı Bağımsızlığı", en: "Judicial Independence" },
    { tr: "Nürnberg İlkeleri", en: "The Nuremberg Principles" },
    { tr: "Cenevre Sözleşmeleri", en: "The Geneva Conventions" },
    { tr: "İnsan Hakları Evrensel Beyannamesi", en: "Universal Declaration of Human Rights" },
    { tr: "Unutulma Hakkı", en: "The Right to Be Forgotten" },
    { tr: "Cezaların Şahsiliği İlkesi", en: "Personal Nature of Criminal Responsibility" }
  ],
  astronomy: [
    { tr: "Olay Ufku", en: "The Event Horizon" },
    { tr: "Fermi Paradoksu", en: "The Fermi Paradox" },
    { tr: "Büyük Patlama", en: "The Big Bang Theory" },
    { tr: "Drake Denklemi", en: "The Drake Equation" },
    { tr: "Nötron Yıldızları ve Pulsarlar", en: "Neutron Stars & Pulsars" },
    { tr: "Hubble-Lemaître Yasası", en: "Hubble's Law" },
    { tr: "Soluk Mavi Nokta", en: "Pale Blue Dot" },
    { tr: "Kozmik Mikrodalga Arka Plan Işıması", en: "Cosmic Microwave Background" },
    { tr: "Kepler Yasaları", en: "Kepler's Laws of Planetary Motion" },
    { tr: "Kütleçekimsel Merceklenme", en: "Gravitational Lensing" },
    { tr: "Kütleçekim Dalgaları", en: "Gravitational Waves" },
    { tr: "Roche Limiti", en: "The Roche Limit" },
    { tr: "Chandrasekhar Limiti", en: "The Chandrasekhar Limit" },
    { tr: "Süpernova Patlamaları", en: "Supernovae" },
    { tr: "Kara Delik Bilgi Paradoksu", en: "Black Hole Information Paradox" },
    { tr: "Hawking Işıması", en: "Hawking Radiation" },
    { tr: "Solucan Delikleri", en: "Wormholes" },
    { tr: "Karanlık Madde", en: "Dark Matter" },
    { tr: "Karanlık Enerji", en: "Dark Energy" },
    { tr: "Kozmik Enflasyon", en: "Cosmic Inflation" },
    { tr: "Yaşanabilir Bölge", en: "The Habitable Zone" },
    { tr: "Kırmızı Devler ve Beyaz Cüceler", en: "Red Giants and White Dwarfs" },
    { tr: "Hertzsprung-Russell Diyagramı", en: "Hertzsprung-Russell Diagram" },
    { tr: "Oort Bulutu", en: "The Oort Cloud" },
    { tr: "Kuiper Kuşağı", en: "The Kuiper Belt" },
    { tr: "Lagrange Noktaları", en: "Lagrange Points" },
    { tr: "Kütleçekimsel Sapan Manevrası", en: "Gravity Assist" },
    { tr: "Güneş Rüzgârı ve Manyetosfer", en: "Solar Wind and the Magnetosphere" },
    { tr: "Gelgit Kilitlenmesi", en: "Tidal Locking" },
    { tr: "Büyük Filtre", en: "The Great Filter" }
  ],
  mathematics: [
    { tr: "Gödel'in Eksiklik Teoremi", en: "Gödel's Incompleteness Theorems" },
    { tr: "Monty Hall Problemi", en: "The Monty Hall Problem" },
    { tr: "Fibonacci Dizisi", en: "Fibonacci Sequence" },
    { tr: "Banach-Tarski Paradoksu", en: "Banach-Tarski Paradox" },
    { tr: "Fermat'nın Son Teoremi", en: "Fermat's Last Theorem" },
    { tr: "Hilbert'in Sonsuz Oteli", en: "Hilbert's Paradox of the Grand Hotel" },
    { tr: "Dört Renk Teoremi", en: "Four Color Theorem" },
    { tr: "Euler Özdeşliği", en: "Euler's Identity" },
    { tr: "Pisagor Teoremi", en: "The Pythagorean Theorem" },
    { tr: "Öklid'in Paralellik Postülatı", en: "Euclid's Parallel Postulate" },
    { tr: "Altın Oran", en: "The Golden Ratio" },
    { tr: "Pi Sayısı", en: "The Number Pi" },
    { tr: "Asal Sayıların Sonsuzluğu", en: "Euclid's Theorem on Primes" },
    { tr: "Riemann Hipotezi", en: "The Riemann Hypothesis" },
    { tr: "Goldbach Sanısı", en: "Goldbach's Conjecture" },
    { tr: "Collatz Sanısı", en: "The Collatz Conjecture" },
    { tr: "Cantor'un Köşegen Argümanı", en: "Cantor's Diagonal Argument" },
    { tr: "Sonsuzluğun Mertebeleri", en: "Cardinality of Infinite Sets" },
    { tr: "Güvercin Yuvası İlkesi", en: "The Pigeonhole Principle" },
    { tr: "Doğum Günü Paradoksu", en: "The Birthday Problem" },
    { tr: "Bayes Teoremi", en: "Bayes' Theorem" },
    { tr: "Büyük Sayılar Yasası", en: "Law of Large Numbers" },
    { tr: "Merkezi Limit Teoremi", en: "Central Limit Theorem" },
    { tr: "Benford Yasası", en: "Benford's Law" },
    { tr: "Simpson Paradoksu", en: "Simpson's Paradox" },
    { tr: "Fraktal Geometri", en: "Fractal Geometry" },
    { tr: "Mandelbrot Kümesi", en: "The Mandelbrot Set" },
    { tr: "Möbius Şeridi", en: "The Möbius Strip" },
    { tr: "Königsberg'in Yedi Köprüsü", en: "Seven Bridges of Königsberg" },
    { tr: "Minimaks Teoremi", en: "The Minimax Theorem" }
  ],
  health: [
    { tr: "CRISPR-Cas9 Gen Düzenleme", en: "CRISPR-Cas9 Gene Editing" },
    { tr: "Plasebo ve Nosebo Etkisi", en: "Placebo & Nocebo Effect" },
    { tr: "Sirkadiyen Ritim", en: "Circadian Rhythm Biology" },
    { tr: "Doğal Seçilim", en: "Natural Selection" },
    { tr: "Nöroplastisite", en: "Neuroplasticity" },
    { tr: "Epigenetik Kalıtım", en: "Epigenetic Regulation" },
    { tr: "Apoptoz", en: "Apoptosis" },
    { tr: "Telomerler ve Hücresel Yaşlanma", en: "Telomeres & Cellular Aging" },
    { tr: "Bağışıklık Hafızası", en: "Immunological Memory" },
    { tr: "Sürü Bağışıklığı", en: "Herd Immunity" },
    { tr: "Otoimmünite", en: "Autoimmunity" },
    { tr: "Antibiyotik Direnci", en: "Antibiotic Resistance" },
    { tr: "Bağırsak-Beyin Ekseni", en: "The Gut-Brain Axis" },
    { tr: "Otofaji", en: "Autophagy" },
    { tr: "Homeostaz", en: "Homeostasis" },
    { tr: "Genel Uyum Sendromu", en: "General Adaptation Syndrome" },
    { tr: "Kan-Beyin Bariyeri", en: "The Blood-Brain Barrier" },
    { tr: "Dopamin Ödül Yolağı", en: "Dopamine Reward Pathway" },
    { tr: "Hormesis", en: "Hormesis" },
    { tr: "Bazal Metabolizma Hızı", en: "Basal Metabolic Rate" },
    { tr: "İnsülin Direnci", en: "Insulin Resistance" },
    { tr: "Hücresel Solunum", en: "Cellular Respiration" },
    { tr: "Kök Hücreler", en: "Stem Cells" },
    { tr: "Hayflick Limiti", en: "The Hayflick Limit" },
    { tr: "Jenner ve Aşının Keşfi", en: "Edward Jenner and Vaccination" },
    { tr: "Semmelweis Refleksi", en: "The Semmelweis Reflex" },
    { tr: "Mikrop Kuramı", en: "Germ Theory of Disease" },
    { tr: "Çift Kör Randomize Deney", en: "Double-Blind Randomised Trial" },
    { tr: "Kanıta Dayalı Tıp", en: "Evidence-Based Medicine" },
    { tr: "Mavi Bölgeler", en: "Blue Zones" }
  ]
};

function activeCategory() {
  return settings.category || "general";
}

function currentTopicPool(category = activeCategory()) {
  return CATEGORY_TOPICS[category] || TOPICS;
}

function getResearchedSet() {
  return new Set(loadHistory().map((h) => `${h.tr}|${h.en}`));
}

function availableTopicPool(category = activeCategory()) {
  const fullPool = currentTopicPool(category);
  const researched = getResearchedSet();
  const fresh = fullPool.filter((t) => !researched.has(`${t.tr}|${t.en}`));
  // Çekmecedeki tüm kavramlar tamamlandıysa havuz sıfırlanıp tekrar kullanılabilir olsun
  return fresh.length ? fresh : fullPool;
}

function setCategory(id) {
  if (activeCategory() === id) return;
  settings.category = id;
  saveSettings();
  render();
}

function shuffleArray(arr) {
  const res = [...arr];
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}

function pickTopic() {
  const pool = availableTopicPool();
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateWheelItems(pool, targetTopic = null, targetIndex = -1) {
  if (!pool.length) return [];
  const minItems = 160;
  const repeatCount = Math.max(10, Math.ceil(minItems / pool.length));
  let list = [];
  for (let r = 0; r < repeatCount; r++) {
    list.push(...shuffleArray(pool));
  }
  if (targetTopic && targetIndex >= 0 && targetIndex < list.length) {
    list[targetIndex] = targetTopic;
  }
  return list;
}

function getWheelItemHeight() {
  const root = document.documentElement;
  const val = getComputedStyle(root).getPropertyValue("--wheel-item").trim();
  const parsed = parseFloat(val);
  return parsed > 0 ? parsed : 62;
}

function getWheelInitialOffset(pool) {
  const itemHeight = getWheelItemHeight();
  const startIndex = Math.min(pool.length * 2, 30);
  return Math.max(0, (startIndex - 3) * itemHeight);
}

function spin() {
  if (state.spinning) return;
  sfx.init();
  state.spinning = true;

  const itemHeight = getWheelItemHeight();
  const pool = availableTopicPool();
  const finalTopic = pickTopic();
  const spinLoops = Math.max(5, Math.ceil(70 / Math.max(pool.length, 1)));
  const targetIndex = (spinLoops * pool.length) + Math.floor(Math.random() * pool.length);
  const offset = (targetIndex - 3) * itemHeight;

  // Her spinde kavramların sırasını tamamen karıştır ve hedefi targetIndex'e yerleştir
  const wheelItems = generateWheelItems(pool, finalTopic, targetIndex);
  
  render();

  const track = document.querySelector("#wheelTrack");
  const viewport = document.querySelector("#wheelViewport");
  if (!track || !viewport) {
    state.spinning = false;
    render();
    return;
  }

  // Yeni karıştırılmış listeyi çarka uygula
  track.innerHTML = wheelItems.map(
    (t) => `<li><b>${esc(t.tr)}</b><small>${esc(t.en)}</small></li>`
  ).join("");

  // Sound ticking during roulette spin
  let tickCount = 0;
  const tickInterval = setInterval(() => {
    tickCount++;
    sfx.playTick();
    if (tickCount > 24) clearInterval(tickInterval);
  }, 100);

  const startOffset = getWheelInitialOffset(pool);
  track.style.transition = "none";
  track.style.transform = `translateY(-${startOffset}px)`;
  void track.offsetHeight; // reflow
  track.style.transition = "transform 2.6s cubic-bezier(0.12, 0.7, 0.1, 1)";
  track.style.transform = `translateY(-${offset}px)`;

  setTimeout(() => {
    clearInterval(tickInterval);
    sfx.playLand();
    state.spinning = false;
    state.topic = finalTopic;
    state.phase = "landed";
    render();
  }, 2700);
}

function completeResearch() {
  clearInterval(state.timerId);
  const notesEl = document.querySelector("#researchNotesInput");
  if (notesEl) state.notes = notesEl.value;
  addToHistory(state.topic, activeCategory(), state.notes);
  state.phase = "done";
  render();
}

function startResearch() {
  state.phase = "researching";
  state.notes = "";
  render();
  startCountdown(settings.researchMinutes * 60, completeResearch);
}

function resetToIdle() {
  clearInterval(state.timerId);
  state.phase = "idle";
  state.topic = null;
  state.notes = "";
  render();
}

function persistSession() {
  if (state.phase === "idle") {
    try { sessionStorage.removeItem(SESSION_KEY); } catch { /* ignore */ }
    return;
  }
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      phase: state.phase,
      topic: state.topic,
      remaining: state.remaining,
      totalForPhase: state.totalForPhase,
      paused: !!state.paused,
      notes: state.notes || "",
      savedAt: Date.now()
    }));
  } catch { /* ignore */ }
}

function restoreSession() {
  let raw;
  try { raw = sessionStorage.getItem(SESSION_KEY); } catch { return false; }
  if (!raw) return false;

  let saved;
  try { saved = JSON.parse(raw); } catch { return false; }
  if (!saved || !saved.topic || !saved.phase || saved.phase === "idle") return false;

  state.topic = saved.topic;
  state.notes = saved.notes || "";

  if (saved.phase === "landed" || saved.phase === "done") {
    state.phase = saved.phase;
    render();
    return true;
  }

  if (saved.phase === "researching") {
    const elapsed = saved.paused ? 0 : Math.max(0, Math.round((Date.now() - saved.savedAt) / 1000));
    const remaining = Math.max(0, (saved.remaining || 0) - elapsed);
    const total = saved.totalForPhase || remaining;

    if (remaining <= 0) {
      completeResearch();
      return true;
    }

    state.phase = "researching";
    startCountdown(total, completeResearch, remaining);
    state.paused = !!saved.paused;
    render();
    return true;
  }

  return false;
}

// ---------- UI Rendering ----------
function render() {
  const prevTabs = document.querySelector(".category-tabs");
  const prevScroll = prevTabs ? prevTabs.scrollLeft : 0;

  if (state.phase === "idle") stage.innerHTML = renderIdle();
  else if (state.phase === "landed") stage.innerHTML = renderLanded();
  else if (state.phase === "researching") stage.innerHTML = renderResearching();
  else if (state.phase === "done") stage.innerHTML = renderDone();

  bindStageEvents();

  const newTabs = document.querySelector(".category-tabs");
  if (newTabs && prevScroll > 0) {
    newTabs.scrollLeft = prevScroll;
  }

  updateTimerDisplay();
  persistSession();
}

function categoryIcon(cat) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${cat.icon}</svg>`;
}

function renderCategoryTabs() {
  const active = activeCategory();
  const tabs = CATEGORIES.map((c) => {
    const selected = c.id === active;
    return `
      <button type="button" class="cat-pill${selected ? " is-active" : ""}" data-category="${c.id}"
        aria-pressed="${selected}">
        ${categoryIcon(c)}
        <span>${c.tr}</span>
      </button>
    `;
  }).join("");
  return `<div class="tabs-scroll-area"><div class="category-tabs" role="group" aria-label="Kategori seç">${tabs}</div></div>`;
}

function renderDeskGreeting() {
  const quote = CURIOSITY_QUOTES[currentQuoteIndex % CURIOSITY_QUOTES.length];
  return `
    <!-- Günün İlham Parşömeni -->
    <div class="curiosity-parchment-card" id="quoteCard">
      <div class="parchment-header">
        <span class="parchment-tag">📜 GÜNÜN İLHAMI</span>
        <button id="nextQuoteBtn" class="parchment-cycle-btn" type="button" title="Başka bir alıntı göster ✨">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
          <span>Değiştir</span>
        </button>
      </div>
      <p class="parchment-quote" id="parchmentText">“${esc(quote.text)}”</p>
      <span class="parchment-author" id="parchmentAuthor">— ${esc(quote.author)}</span>
    </div>
  `;
}

function renderRecall() {
  const due = dueForReview();
  if (!due) return "";
  const days = Math.floor((Date.now() - due.finishedAt) / (24 * 60 * 60 * 1000));
  return `
    <div class="recall-banner">
      <div class="recall-info">
        <strong>Hatırlatma Çanı 🔔</strong>
        <span>${esc(due.tr)}</span>
        <em>${days} gün önce sandığına eklemiştin — hafızanı tazelemek ister misin?</em>
      </div>
      <div class="recall-actions">
        <button id="reviewAgainBtn" class="btn btn-primary btn-sm" type="button" data-tr="${esc(due.tr)}" data-en="${esc(due.en)}" data-category="${esc(due.category)}">Hemen Hatırla ✨</button>
        <button id="dismissReviewBtn" class="link-btn" type="button" data-key="${esc(reviewTopicKey(due))}">Sonra</button>
      </div>
    </div>
  `;
}

function renderCozyDecorations() {
  const hour = new Date().getHours();
  const isNight = hour >= 22 || hour < 6;

  return `
    <div class="cozy-decorations" aria-hidden="true">

      <!-- Sandık Kedisi: Sağ üst köşeye kıvrılmış, huzurla uyuyan & nefes alan sevimli kedi -->
      <div class="cozy-item cozy-cat-box" id="cozyCatBtn" role="button" tabindex="0" title="Sandık Kedisi — sevmek için tıkla! 🐾">
        <span class="cat-emote" aria-hidden="true">
          <span class="z-1">z</span>
          <span class="z-2">z</span>
          <span class="z-3">Z</span>
        </span>
        <svg viewBox="0 0 96 50" class="cat-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Gölge / kart kenarı teması -->
          <ellipse cx="48" cy="46" rx="40" ry="3.5" fill="rgba(0,0,0,0.18)"/>

          <!-- Kuyruk (arkada kıvrılmış) -->
          <path class="cat-tail" d="M 78 40 C 90 38 94 24 86 17 C 80 12 73 17 76 26" stroke="var(--cat-color,#e08a4c)" stroke-width="6.5" stroke-linecap="round" fill="none"/>
          <path class="cat-tail" d="M 85 17 C 83 14 77 16 77 22" stroke="#fff5ea" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.85"/>

          <!-- Ana Gövde (kıvrılmış yatan gövde) -->
          <path class="cat-body-torso" d="M 22 44 C 18 36 20 22 36 16 C 54 10 76 14 84 26 C 90 34 88 44 82 45 C 68 46 34 46 22 44 Z" fill="var(--cat-color,#e08a4c)"/>

          <!-- Sırt çizgileri (tekir deseni) -->
          <path d="M 50 14 Q 48 21 46 25" stroke="#a8521a" stroke-width="2.2" stroke-linecap="round" opacity="0.45"/>
          <path d="M 60 15 Q 58 22 56 27" stroke="#a8521a" stroke-width="2.2" stroke-linecap="round" opacity="0.45"/>
          <path d="M 70 18 Q 68 25 65 29" stroke="#a8521a" stroke-width="2.2" stroke-linecap="round" opacity="0.45"/>

          <!-- Göbek (nefes alıp verirken yumuşakça şişip inen göbek) -->
          <ellipse class="cat-belly" cx="54" cy="36" rx="17" ry="9.5" fill="#fff5ea" opacity="0.8"/>

          <!-- Kafa (patilerin üzerine yatmış dinleniyor) -->
          <circle class="cat-head" cx="28" cy="30" r="14" fill="var(--cat-color,#e08a4c)"/>

          <!-- Kulaklar -->
          <polygon points="16,22 18,8 26,18" fill="var(--cat-color,#e08a4c)"/>
          <polygon points="18,20 19,11 24,17" fill="#f9c0a8"/>

          <polygon class="cat-ear-twitch" points="29,17 35,7 41,19" fill="var(--cat-color,#e08a4c)"/>
          <polygon class="cat-ear-twitch" points="31,16 35,10 39,18" fill="#f9c0a8"/>

          <!-- Gece Uykusu Bonesi (Saat 22:00 sonrası sevimli gece şapkası) -->
          ${isNight ? `
            <g class="cat-nightcap">
              <path d="M 18 19 C 14 11 22 2 34 5 C 41 8 40 18 36 21 Z" fill="#c44747" stroke="#7a1c1c" stroke-width="0.8"/>
              <path d="M 33 5 Q 46 2 48 9" stroke="#c44747" stroke-width="3.5" fill="none" stroke-linecap="round"/>
              <circle cx="48" cy="9.5" r="2.8" fill="#fff5ea"/>
              <path d="M 17 19 Q 27 16 37 20" stroke="#fff5ea" stroke-width="2.6" stroke-linecap="round" fill="none"/>
            </g>
          ` : ""}

          <!-- Alın çizgileri -->
          <path d="M 28 18 L 28 22" stroke="#a8521a" stroke-width="1.6" stroke-linecap="round" opacity="0.45"/>
          <path d="M 24 19 L 25 22" stroke="#a8521a" stroke-width="1.3" stroke-linecap="round" opacity="0.45"/>
          <path d="M 32 19 L 31 22" stroke="#a8521a" stroke-width="1.3" stroke-linecap="round" opacity="0.45"/>

          <!-- Yanak allıkları -->
          <ellipse cx="20" cy="33.5" rx="3.2" ry="2" fill="#f89f9f" opacity="0.55"/>
          <ellipse cx="37" cy="33.5" rx="3.2" ry="2" fill="#f89f9f" opacity="0.55"/>

          <!-- Kapalı uyuyan gözler (huzurlu yaylar) -->
          <path d="M 21 29.5 Q 24.5 32.5 27.5 29.5" stroke="#3e1a0c" stroke-width="1.9" fill="none" stroke-linecap="round"/>
          <path d="M 30 29.5 Q 33.5 32.5 36.5 29.5" stroke="#3e1a0c" stroke-width="1.9" fill="none" stroke-linecap="round"/>

          <!-- Pembe burun & ağız -->
          <ellipse cx="28.5" cy="33.8" rx="2" ry="1.3" fill="#f2907a"/>
          <path d="M 26.5 35.2 Q 28.5 37 30.5 35.2" stroke="#3e1a0c" stroke-width="1.4" fill="none" stroke-linecap="round"/>

          <!-- Bıyıklar -->
          <line x1="12" y1="32" x2="20" y2="34" stroke="#3e1a0c" stroke-width="0.9" stroke-linecap="round" opacity="0.5"/>
          <line x1="12" y1="35" x2="20" y2="35.5" stroke="#3e1a0c" stroke-width="0.9" stroke-linecap="round" opacity="0.5"/>
          <line x1="37" y1="34" x2="45" y2="32" stroke="#3e1a0c" stroke-width="0.9" stroke-linecap="round" opacity="0.5"/>
          <line x1="37" y1="35.5" x2="45" y2="35" stroke="#3e1a0c" stroke-width="0.9" stroke-linecap="round" opacity="0.5"/>

          <!-- Patiler (kart kenarına uzanmış çenenin altında) -->
          <ellipse cx="24" cy="43.5" rx="6" ry="3.5" fill="var(--cat-color,#e08a4c)"/>
          <ellipse cx="34" cy="43.5" rx="6" ry="3.5" fill="var(--cat-color,#e08a4c)"/>
          <ellipse cx="23" cy="44.2" rx="2.5" ry="1.5" fill="#fff5ea"/>
          <ellipse cx="33" cy="44.2" rx="2.5" ry="1.5" fill="#fff5ea"/>
        </svg>
      </div>

    </div>
  `;
}


function renderIdle() {
  const fullPool = currentTopicPool();
  const pool = availableTopicPool();
  const researched = getResearchedSet();
  const remainingCount = fullPool.filter((t) => !researched.has(`${t.tr}|${t.en}`)).length;
  const isAllCompleted = remainingCount === 0;
  const cat = CATEGORIES.find((c) => c.id === activeCategory()) || CATEGORIES[0];

  const wheelItems = generateWheelItems(pool);
  const items = wheelItems.map(
    (t) => `<li><b>${esc(t.tr)}</b><small>${esc(t.en)}</small></li>`
  ).join("");

  const initialOffset = getWheelInitialOffset(pool);
  const badgeText = isAllCompleted ? "Tümü Keşfedildi 🏆" : `${remainingCount} / ${fullPool.length} Kavram`;

  return `
    ${renderRecall()}
    ${renderDeskGreeting()}
    <div class="catalog-wrapper">
      ${renderCategoryTabs()}
      <div style="position: relative;">
        ${renderCozyDecorations()}
        <section class="roulette-card">
          <div class="roulette-header">
            <div class="roulette-header-title">
              ${categoryIcon(cat)}
              <span>${cat.tr} Çekmecesi</span>
            </div>
          </div>

          <div class="wheel-viewport" id="wheelViewport" aria-hidden="true">
            <div class="wheel-fade top"></div>
            <ul class="wheel-track" id="wheelTrack" style="transform: translateY(-${initialOffset}px);">${items}</ul>
            <div class="wheel-fade bottom"></div>
            <div class="wheel-guide">
              <div class="wheel-guide-pointer left"></div>
              <div class="wheel-guide-pointer right"></div>
            </div>
          </div>

          <div class="roulette-footer">
            <button id="spinBtn" class="btn btn-primary" type="button" ${state.spinning ? "disabled" : ""}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg>
              ${state.spinning ? "Kart Çekiliyor…" : "Sandıktan Çek"}
            </button>
          </div>
        </section>
      </div>
    </div>
  `;
}

function callNumber(topic) {
  const category = activeCategory();
  const cat = CATEGORIES.find((c) => c.id === category);
  const prefix = category !== "general" && cat ? `${cat.tr} · ` : "";
  return `${prefix}Günün Fişi`;
}

function renderQuickTools(topic) {
  const googleQuery = encodeURIComponent(topic.tr + " nedir");
  return `
    <div class="quick-tools-row">
      <a href="https://www.google.com/search?q=${googleQuery}" target="_blank" rel="noopener noreferrer" class="quick-tool-btn" title="Google'da yeni sekmede araştır">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>Google'da Ara</span>
      </a>
      <button type="button" id="copyTopicBtn" class="quick-tool-btn" title="Kavram adını panoya kopyala">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        <span>Kopyala</span>
      </button>
    </div>
  `;
}

function renderLanded() {
  const cat = CATEGORIES.find((c) => c.id === activeCategory()) || CATEGORIES[0];
  return `
    <div style="position: relative;">
      ${renderCozyDecorations()}
      <article class="concept-card">
        <div class="card-top-meta">
          <span class="card-callno">${callNumber(state.topic)}</span>
          <span class="card-cat-badge">
            ${categoryIcon(cat)}
            ${cat.tr}
          </span>
        </div>

        <h1 class="card-headline">${esc(state.topic.tr)}</h1>
        <p class="card-subtitle">${esc(state.topic.en)}</p>

        ${renderQuickTools(state.topic)}

        <div class="card-instruction">
          <p>
            <strong>${settings.researchMinutes} dakika</strong> boyunca bu kavramı araştırıp öğrenmek için süreyi başlatabilirsin.
          </p>
        </div>

        <div class="actions-row">
          <button id="startResearchBtn" class="btn btn-primary" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Araştırmaya Başla
          </button>
          <button id="cancelBtn" class="btn btn-secondary" type="button">Başka Kart Çek</button>
        </div>
      </article>
    </div>
  `;
}

function renderResearching() {
  const cat = CATEGORIES.find((c) => c.id === activeCategory()) || CATEGORIES[0];
  return `
    <div style="position: relative;">
      ${renderCozyDecorations()}
      <article class="concept-card">
        <div class="card-top-meta">
          <span class="card-callno">${callNumber(state.topic)}</span>
          <span class="card-cat-badge">
            ${categoryIcon(cat)}
            ${cat.tr}
          </span>
        </div>

        <h1 class="card-headline">${esc(state.topic.tr)}</h1>
        <p class="card-subtitle">${esc(state.topic.en)}</p>

        ${renderQuickTools(state.topic)}

        <div id="timerSection" class="timer-section">
          <div class="radial-timer-wrap">
            <svg class="radial-svg" viewBox="0 0 160 160">
              <circle class="radial-bg" cx="80" cy="80" r="70"></circle>
              <circle id="radialProgress" class="radial-progress" cx="80" cy="80" r="70"></circle>
            </svg>
            <div class="radial-timer-content">
              <span id="timerDigits" class="timer-digits">00:00</span>
              <span class="timer-label">${state.paused ? "DURAKLATILDI" : "ODAKLANMA SÜRESİ"}</span>
            </div>
          </div>
        </div>

        <div class="notes-container">
          <label class="notes-label" for="researchNotesInput">
            <span>Not Defteri</span>
          </label>
          <textarea id="researchNotesInput" class="notes-textarea" placeholder="Öğrendiğin ana fikirleri veya kendi cümlelerinle özetini buraya not al...">${esc(state.notes)}</textarea>
        </div>

        <div class="actions-row">
          <button id="pauseBtn" class="btn btn-secondary" type="button">
            ${state.paused
              ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="5 3 19 12 5 21 5 3"/></svg> Devam Et'
              : '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Duraklat'
            }
          </button>
          <button id="finishResearchBtn" class="btn btn-primary" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
            Tamamla ve Kaydet
          </button>
        </div>
      </article>
    </div>
  `;
}

function renderDone() {
  const cat = CATEGORIES.find((c) => c.id === activeCategory()) || CATEGORIES[0];
  return `
    <div style="position: relative;">
      ${renderCozyDecorations()}
      <article class="concept-card">
        <div class="card-top-meta">
          <span class="card-callno">${callNumber(state.topic)}</span>
          <span class="card-cat-badge">
            ${categoryIcon(cat)}
            ${cat.tr}
          </span>
        </div>

        <h1 class="card-headline">${esc(state.topic.tr)}</h1>
        <p class="card-subtitle">${esc(state.topic.en)}</p>

        <div class="completion-badge-wrap">
          <div class="stamp-badge">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            TAMAMLANDI
          </div>
        </div>

        ${state.notes ? `
          <div class="completion-notes-recap">
            <h4>Kaydedilen Not</h4>
            <p>${esc(state.notes)}</p>
          </div>
        ` : ""}

        <div class="actions-row">
          <button id="newRoundBtn" class="btn btn-primary" type="button">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg>
            Yeni Kart Çek
          </button>
          <button id="viewInCatalogBtn" class="btn btn-secondary" type="button">Notlarımı Gör</button>
        </div>
      </article>
    </div>
  `;
}

function bindStageEvents() {
  const cozyCatBtn = document.querySelector("#cozyCatBtn");
  if (cozyCatBtn) {
    const handleCatPet = () => {
      sessionPetCount++;
      sfx.playCatInteraction();
      const emote = cozyCatBtn.querySelector(".cat-emote");
      if (emote) {
        emote.innerHTML = `<span class="cat-heart">🤍🐾</span>`;
        setTimeout(() => {
          emote.innerHTML = `<span class="z-1">z</span><span class="z-2">z</span><span class="z-3">Z</span>`;
        }, 2500);
      }
      cozyCatBtn.classList.add("is-purring");
      setTimeout(() => {
        cozyCatBtn.classList.remove("is-purring");
      }, 700);

      if (sessionPetCount === 3) {
        showToast("🐱 Miyaav~ Mırrr... Sandık Kedisi başını eline yasladı! 🐾 (Dostluk +1)");
      } else if (sessionPetCount === 5) {
        showToast("🏆 Gizli Başarım: Sandık Kedisinin Sırdaşı! 🐱🐾 Kedi sana tamamen bağlandı.");
      } else {
        const catMsgs = [
          "Miyaaav! 🐱✨ (Sandık Kedisi sevindi ve patisini uzattı)",
          "Mırrr... 🐱🐾 (Sandık Kedisi huzurla mırıldanıyor)",
          "Miyav~ 🐾 (Sandık Kedisi seninle çalışmayı çok seviyor!)",
          "Mırrr... 🐱💤 (Kedi başını patilerine daha çok gömdü)"
        ];
        showToast(catMsgs[Math.floor(Math.random() * catMsgs.length)]);
      }
    };
    cozyCatBtn.addEventListener("click", handleCatPet);
    cozyCatBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCatPet();
      }
    });
  }

  const cozyCoffeeBtn = document.querySelector("#cozyCoffeeBtn");
  if (cozyCoffeeBtn) {
    const handleCoffeeSip = () => {
      sfx.playCoffee();
      const burst = cozyCoffeeBtn.querySelector(".coffee-steam-burst");
      if (burst) {
        burst.style.opacity = "1";
        burst.style.transform = "translateY(-14px) scale(1.3)";
        setTimeout(() => {
          burst.style.opacity = "0";
          burst.style.transform = "none";
        }, 800);
      }
      cozyCoffeeBtn.classList.add("is-sipping");
      setTimeout(() => cozyCoffeeBtn.classList.remove("is-sipping"), 600);
      const coffeeMsgs = [
        "☕ Sıcak bir yudum aldın... Zihninde yeni kıvılcımlar çaktı!",
        "☕ Mis gibi kahve kokusu... Odaklanma seviyesi +%100!",
        "☕ Şifa olsun! Masandaki kahveyle yeni bir kavrama dalmaya hazırsın."
      ];
      showToast(coffeeMsgs[Math.floor(Math.random() * coffeeMsgs.length)]);
    };
    cozyCoffeeBtn.addEventListener("click", handleCoffeeSip);
    cozyCoffeeBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCoffeeSip();
      }
    });
  }

  const nextQuoteBtn = document.querySelector("#nextQuoteBtn");
  if (nextQuoteBtn) {
    nextQuoteBtn.addEventListener("click", () => {
      sfx.playRustle();
      currentQuoteIndex = (currentQuoteIndex + 1) % CURIOSITY_QUOTES.length;
      const q = CURIOSITY_QUOTES[currentQuoteIndex];
      const card = document.querySelector("#quoteCard");
      const textEl = document.querySelector("#parchmentText");
      const authorEl = document.querySelector("#parchmentAuthor");
      if (card) {
        card.classList.add("is-flipping");
        setTimeout(() => {
          if (textEl) textEl.textContent = `“${q.text}”`;
          if (authorEl) authorEl.textContent = `— ${q.author}`;
          card.classList.remove("is-flipping");
        }, 220);
      }
    });
  }

  const spinBtn = document.querySelector("#spinBtn");
  if (spinBtn) spinBtn.addEventListener("click", spin);

  document.querySelectorAll(".cat-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (state.spinning) return;
      sfx.playTick();
      settings.category = btn.dataset.category;
      saveSettings();
      render();
    });
  });

  const reviewAgainBtn = document.querySelector("#reviewAgainBtn");
  if (reviewAgainBtn) reviewAgainBtn.addEventListener("click", () => {
    settings.category = reviewAgainBtn.dataset.category || "general";
    saveSettings();
    state.topic = { tr: reviewAgainBtn.dataset.tr, en: reviewAgainBtn.dataset.en };
    state.phase = "landed";
    render();
  });

  const dismissReviewBtn = document.querySelector("#dismissReviewBtn");
  if (dismissReviewBtn) dismissReviewBtn.addEventListener("click", () => {
    dismissedReview = dismissReviewBtn.dataset.key;
    render();
  });

  const copyTopicBtn = document.querySelector("#copyTopicBtn");
  if (copyTopicBtn && state.topic) {
    copyTopicBtn.addEventListener("click", () => {
      copyToClipboard(`${state.topic.tr} (${state.topic.en})`);
    });
  }

  const startResearchBtn = document.querySelector("#startResearchBtn");
  if (startResearchBtn) startResearchBtn.addEventListener("click", startResearch);

  const cancelBtn = document.querySelector("#cancelBtn");
  if (cancelBtn) cancelBtn.addEventListener("click", resetToIdle);

  const pauseBtn = document.querySelector("#pauseBtn");
  if (pauseBtn) pauseBtn.addEventListener("click", () => {
    state.paused = !state.paused;
    const notesEl = document.querySelector("#researchNotesInput");
    if (notesEl) state.notes = notesEl.value;
    render();
  });

  const finishResearchBtn = document.querySelector("#finishResearchBtn");
  if (finishResearchBtn) finishResearchBtn.addEventListener("click", () => {
    sfx.playChime();
    triggerConfetti();
    completeResearch();
  });

  const newRoundBtn = document.querySelector("#newRoundBtn");
  if (newRoundBtn) newRoundBtn.addEventListener("click", resetToIdle);

  const viewInCatalogBtn = document.querySelector("#viewInCatalogBtn");
  if (viewInCatalogBtn) viewInCatalogBtn.addEventListener("click", () => {
    syncProfileUI();
    profileModal.classList.remove("is-hidden");
  });

  const researchNotesInput = document.querySelector("#researchNotesInput");
  if (researchNotesInput) {
    researchNotesInput.addEventListener("input", (e) => {
      state.notes = e.target.value;
      persistSession();
    });
  }
}

// ---------- Confetti Particle Burst ----------
function triggerConfetti() {
  // Canvas animasyonu CSS'in reduced-motion kuralına takılmaz, burada elle kontrol et.
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.querySelector("#confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#6366f1", "#06b6d4", "#10b981", "#f59e0b", "#ec4899", "#a855f7"];

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2 + 50,
      r: Math.random() * 5 + 3,
      dx: (Math.random() - 0.5) * 14,
      dy: (Math.random() - 1.2) * 16,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.02 + 0.015
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;
      p.dy += 0.45; // gravity
      p.alpha -= p.decay;
      if (p.alpha > 0) {
        alive = true;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    if (alive) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

// ---------- Settings Modal Events ----------
function syncSettingsUI() {
  researchRange.value = settings.researchMinutes;
  researchLabel.textContent = `${settings.researchMinutes} dk`;
  soundToggle.checked = settings.sound;
  syncSoundIcons();
  syncAmbientButton();
  applyTheme(settings.theme);
  applyPalette(settings.palette);
  applyLampFocus(settings.lampFocus);
}

settingsBtn.addEventListener("click", () => {
  syncSettingsUI();
  settingsModal.classList.remove("is-hidden");
});

function closeSettingsModal() {
  settingsModal.classList.add("is-hidden");
  render();
}

closeSettings.addEventListener("click", closeSettingsModal);
settingsModal.addEventListener("click", (e) => {
  if (e.target === settingsModal) closeSettingsModal();
});

const themeQuickToggle = document.querySelector("#themeQuickToggle");
const themeBtnDark = document.querySelector("#themeBtnDark");
const themeBtnLight = document.querySelector("#themeBtnLight");

if (themeQuickToggle) {
  themeQuickToggle.addEventListener("click", () => {
    const nextTheme = settings.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    saveSettings();
    showToast(nextTheme === "light" ? "Aydınlık kütüphane modu" : "Karanlık kütüphane modu");
  });
}

if (themeBtnDark) {
  themeBtnDark.addEventListener("click", () => {
    applyTheme("dark");
    saveSettings();
  });
}

if (themeBtnLight) {
  themeBtnLight.addEventListener("click", () => {
    applyTheme("light");
    saveSettings();
  });
}

document.querySelectorAll(".palette-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const pal = btn.dataset.palette;
    sfx.playTick();
    applyPalette(pal);
    saveSettings();
    const names = {
      coffee: "☕ Sıcak Kahve paleti uygulandı",
      library: "🌲 Gece Kütüphanesi paleti uygulandı",
      matcha: "🍵 Matcha & Yulaf paleti uygulandı"
    };
    showToast(names[pal] || "Renk paleti güncellendi");
  });
});

if (ambientSoundBtn) {
  ambientSoundBtn.addEventListener("click", () => {
    sfx.init();
    if (!settings.sound) {
      settings.sound = true;
      syncSoundIcons();
    }
    const sequence = ["none", "rain", "fire"];
    const currentIdx = sequence.indexOf(settings.ambience);
    const nextAmbience = sequence[(currentIdx + 1) % sequence.length];
    settings.ambience = nextAmbience;
    sfx.setAmbience(nextAmbience);
    saveSettings();
    const msgs = {
      none: "🔇 Ambiyans sesi kapatıldı",
      rain: "🌧️ Yağmur ambiyansı açıldı (Cama vuran damlalar)",
      fire: "🔥 Şömine çıtırtısı açıldı (Sıcacık çalışma ambiyansı)"
    };
    showToast(msgs[nextAmbience]);
  });
}

function setupHangingLampChain() {
  const chainWrap = document.querySelector("#lampPullChain");
  const svg = document.querySelector("#chainPhysicsSvg");
  const touchArea = document.querySelector("#chainTouchArea");
  const cordPath = document.querySelector("#chainCordPath");
  const beadsGroup = document.querySelector("#chainBeadsGroup");
  const handleGroup = document.querySelector("#chainHandleGroup");
  if (!chainWrap || !svg || !cordPath || !beadsGroup || !handleGroup) return;

  // Geometry: SVG coordinates (viewBox 0 0 100 240)
  const ANCHOR_X = 64;
  const ANCHOR_Y = 0;
  const NUM_POINTS = 9;
  const SEGMENT_LEN = 16; // Rest length ~128px

  // Verlet Physics Nodes
  const nodes = [];
  for (let i = 0; i < NUM_POINTS; i++) {
    const y = ANCHOR_Y + i * SEGMENT_LEN;
    nodes.push({
      x: ANCHOR_X,
      y: y,
      oldX: ANCHOR_X + (i > 0 ? (Math.random() - 0.5) * 1.5 : 0),
      oldY: y,
      pinned: i === 0
    });
  }

  // Create SVG bead circles
  beadsGroup.innerHTML = "";
  const beadElements = [];
  for (let i = 1; i < NUM_POINTS - 1; i++) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "2.8");
    circle.setAttribute("fill", "url(#brassBeadGrad)");
    circle.setAttribute("stroke", "#613b0a");
    circle.setAttribute("stroke-width", "0.6");
    beadsGroup.appendChild(circle);
    beadElements.push(circle);
  }

  let isDragging = false;
  let dragTargetX = ANCHOR_X;
  let dragTargetY = ANCHOR_Y + (NUM_POINTS - 1) * SEGMENT_LEN;
  let startPointerY = 0;
  let maxStretchDistance = 0;
  let animId = null;
  let isSimulating = false;

  function triggerThemeSwitch() {
    const nextTheme = settings.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    saveSettings();
    sfx.playChainClick();

    // Add oscillation impulse
    nodes[NUM_POINTS - 1].oldX -= (Math.random() > 0.5 ? 1 : -1) * 14;
    nodes[NUM_POINTS - 1].oldY -= 12;
    startSimulation();

    showToast(
      nextTheme === "light"
        ? "☀️ Işıklar Açıldı — Aydınlık Kütüphane Modu"
        : "🌙 Işıklar Kısıldı — Karanlık Kütüphane Modu"
    );
  }

  function getSvgPoint(e) {
    const rect = svg.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : ANCHOR_X);
    const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : 130);
    const scaleX = 100 / rect.width;
    const scaleY = 240 / rect.height;
    return {
      x: Math.max(8, Math.min(92, (clientX - rect.left) * scaleX)),
      y: Math.max(6, Math.min(230, (clientY - rect.top) * scaleY))
    };
  }

  function onPointerDown(e) {
    e.stopPropagation();
    e.preventDefault();
    isDragging = true;
    const pt = getSvgPoint(e);
    dragTargetX = pt.x;
    dragTargetY = pt.y;
    startPointerY = pt.y;
    maxStretchDistance = 0;

    nodes[NUM_POINTS - 1].x = pt.x;
    nodes[NUM_POINTS - 1].y = pt.y;
    nodes[NUM_POINTS - 1].oldX = pt.x;
    nodes[NUM_POINTS - 1].oldY = pt.y;

    startSimulation();
    try { handleGroup.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const pt = getSvgPoint(e);
    dragTargetX = pt.x;
    dragTargetY = pt.y;
    const currentDist = Math.hypot(pt.x - ANCHOR_X, pt.y - ANCHOR_Y);
    const restLen = (NUM_POINTS - 1) * SEGMENT_LEN;
    const stretch = currentDist - restLen;
    if (stretch > maxStretchDistance) {
      maxStretchDistance = stretch;
    }
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    try { handleGroup.releasePointerCapture(e.pointerId); } catch { /* ignore */ }

    if (maxStretchDistance >= 15 || (Math.abs(nodes[NUM_POINTS - 1].y - startPointerY) < 6 && maxStretchDistance < 4)) {
      triggerThemeSwitch();
    } else {
      startSimulation();
    }
  }

  function updatePhysics() {
    const GRAVITY = 0.55;
    const DAMPING = 0.985;

    for (let i = 0; i < NUM_POINTS; i++) {
      const n = nodes[i];
      if (n.pinned) continue;

      if (isDragging && i === NUM_POINTS - 1) {
        n.oldX = n.x;
        n.oldY = n.y;
        n.x = dragTargetX;
        n.y = dragTargetY;
        continue;
      }

      const vx = (n.x - n.oldX) * DAMPING;
      const vy = (n.y - n.oldY) * DAMPING + GRAVITY;

      n.oldX = n.x;
      n.oldY = n.y;
      n.x += vx;
      n.y += vy;
    }

    const iterations = 6;
    for (let iter = 0; iter < iterations; iter++) {
      nodes[0].x = ANCHOR_X;
      nodes[0].y = ANCHOR_Y;

      for (let i = 0; i < NUM_POINTS - 1; i++) {
        const n1 = nodes[i];
        const n2 = nodes[i + 1];

        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.hypot(dx, dy) || 0.001;
        const diff = (dist - SEGMENT_LEN) / dist;

        if (n1.pinned) {
          n2.x -= dx * diff;
          n2.y -= dy * diff;
        } else if (isDragging && i + 1 === NUM_POINTS - 1) {
          n1.x += dx * diff;
          n1.y += dy * diff;
        } else {
          n1.x += dx * 0.5 * diff;
          n1.y += dy * 0.5 * diff;
          n2.x -= dx * 0.5 * diff;
          n2.y -= dy * 0.5 * diff;
        }
      }
    }
  }

  function renderChain() {
    let pathD = `M ${nodes[0].x.toFixed(1)} ${nodes[0].y.toFixed(1)}`;
    for (let i = 1; i < NUM_POINTS; i++) {
      pathD += ` L ${nodes[i].x.toFixed(1)} ${nodes[i].y.toFixed(1)}`;
    }
    cordPath.setAttribute("d", pathD);
    if (touchArea) touchArea.setAttribute("d", pathD);

    for (let i = 1; i < NUM_POINTS - 1; i++) {
      const bead = beadElements[i - 1];
      if (bead) {
        bead.setAttribute("cx", nodes[i].x.toFixed(1));
        bead.setAttribute("cy", nodes[i].y.toFixed(1));
      }
    }

    const handleNode = nodes[NUM_POINTS - 1];
    const prevNode = nodes[NUM_POINTS - 2];
    const angle = Math.atan2(handleNode.x - prevNode.x, handleNode.y - prevNode.y) * (-180 / Math.PI);
    handleGroup.setAttribute("transform", `translate(${handleNode.x.toFixed(1)}, ${handleNode.y.toFixed(1)}) rotate(${(-angle).toFixed(1)})`);
  }

  function loop() {
    updatePhysics();
    renderChain();

    let totalVelocity = 0;
    for (let i = 1; i < NUM_POINTS; i++) {
      totalVelocity += Math.hypot(nodes[i].x - nodes[i].oldX, nodes[i].y - nodes[i].oldY);
    }

    if (isDragging || totalVelocity > 0.04) {
      animId = requestAnimationFrame(loop);
    } else {
      isSimulating = false;
      animId = null;
    }
  }

  function startSimulation() {
    if (!isSimulating) {
      isSimulating = true;
      animId = requestAnimationFrame(loop);
    }
  }

  if (touchArea) touchArea.addEventListener("pointerdown", onPointerDown);
  handleGroup.addEventListener("pointerdown", onPointerDown);
  cordPath.addEventListener("pointerdown", onPointerDown);
  beadsGroup.addEventListener("pointerdown", onPointerDown);

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);

  chainWrap.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      triggerThemeSwitch();
    }
  });

  renderChain();
  startSimulation();
}

setupHangingLampChain();

researchRange.addEventListener("input", () => {
  settings.researchMinutes = Number(researchRange.value);
  researchLabel.textContent = `${settings.researchMinutes} dk`;
  saveSettings();
});

soundToggle.addEventListener("change", () => {
  settings.sound = soundToggle.checked;
  if (!settings.sound) {
    sfx.stopAmbience();
  } else if (settings.ambience !== "none") {
    sfx.setAmbience(settings.ambience);
  }
  saveSettings();
});

if (soundQuickToggle) {
  soundQuickToggle.addEventListener("click", () => {
    settings.sound = !settings.sound;
    if (!settings.sound) {
      sfx.stopAmbience();
    } else if (settings.ambience !== "none") {
      sfx.setAmbience(settings.ambience);
    }
    saveSettings();
    showToast(settings.sound ? "Ses efektleri açıldı" : "Ses kapatıldı");
  });
}

// ---------- Profile & Catalog UI ----------
function getRankInfo(total) {
  if (total >= 20) return { title: "Bilge Kaşif 💎", desc: "20+ kavram sandığa eklendi!", icon: "💎" };
  if (total >= 10) return { title: "Kahve & Kitap Filozofu ☕", desc: "10+ kavram tamamlandı", icon: "☕" };
  if (total >= 5)  return { title: "Kavram Kaşifi ✨", desc: "5+ kavram sandıkta birikti", icon: "✨" };
  if (total >= 1)  return { title: "Meraklı Çırak 🌱", desc: "Harika bir alışkanlık başladı!", icon: "🌱" };
  return { title: "Yeni Kaşif 🧭", desc: "Sandığını doldurmaya hazır mısın?", icon: "🧭" };
}

function computeStats(list) {
  const byCategory = {};
  list.forEach((item) => {
    const key = item.category || "general";
    byCategory[key] = (byCategory[key] || 0) + 1;
  });

  const days = new Set(list.map((item) => new Date(item.finishedAt).toDateString()));
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (!days.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (days.has(cursor.toDateString())) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return { total: list.length, byCategory, streak };
}

function renderStats(list) {
  const { total, byCategory, streak } = computeStats(list);
  const rank = getRankInfo(total);
  const topEntry = Object.entries(byCategory).sort((a, b) => b[1] - a[1])[0];
  const topCat = topEntry ? CATEGORIES.find((c) => c.id === topEntry[0]) : null;

  return `
    <div class="stats-panel">
      <div class="stat-rank-header">
        <span class="stat-rank-icon">${rank.icon}</span>
        <div class="stat-rank-info">
          <span class="stat-rank-title">${rank.title}</span>
          <span class="stat-rank-desc">${rank.desc}</span>
        </div>
      </div>
      <div class="stats-metrics-row">
        <div class="stat-metric-item">
          <span class="stat-metric-val">${total}</span>
          <span class="stat-metric-label">Öğrenilen Kavram</span>
        </div>
        <div class="stat-metric-divider"></div>
        <div class="stat-metric-item">
          <span class="stat-metric-val">${streak} Gün</span>
          <span class="stat-metric-label">Öğrenme Serisi 🔥</span>
        </div>
        <div class="stat-metric-divider"></div>
        <div class="stat-metric-item">
          <span class="stat-metric-val">${topCat ? esc(topCat.tr) : "—"}</span>
          <span class="stat-metric-label">En Sevilen Alan</span>
        </div>
      </div>
    </div>
  `;
}

function renderFilterChips(list) {
  const availableCats = new Set(list.map((item) => item.category || "general"));
  let html = `<button class="filter-chip${historyActiveCategory === "all" ? " is-active" : ""}" data-filter="all">Tümü (${list.length})</button>`;
  CATEGORIES.forEach((cat) => {
    if (availableCats.has(cat.id)) {
      const count = list.filter((i) => (i.category || "general") === cat.id).length;
      html += `<button class="filter-chip${historyActiveCategory === cat.id ? " is-active" : ""}" data-filter="${cat.id}">${cat.tr} (${count})</button>`;
    }
  });
  return html;
}

function renderHistoryList(list) {
  let filtered = list;
  if (historyActiveCategory !== "all") {
    filtered = filtered.filter((item) => (item.category || "general") === historyActiveCategory);
  }
  if (historySearchQuery) {
    const q = historySearchQuery.toLowerCase();
    filtered = filtered.filter((item) =>
      item.tr.toLowerCase().includes(q) ||
      item.en.toLowerCase().includes(q) ||
      (item.notes && item.notes.toLowerCase().includes(q))
    );
  }

  if (!filtered.length) {
    return `<p class="history-empty">${list.length === 0 ? "Kataloğun henüz boş. İlk kavramını çek ve keşfe başla!" : "Aramana uygun kavram bulunamadı."}</p>`;
  }

  return `
    <ul class="history-list">
      ${filtered.map((item) => {
        const cat = CATEGORIES.find((c) => c.id === item.category) || CATEGORIES[0];
        const dateStr = new Date(item.finishedAt).toLocaleDateString("tr-TR", { day: "2-digit", month: "short" });
        return `
          <li class="history-card">
            <div class="history-card-header">
              <div class="history-card-left">
                ${categoryIcon(cat)}
                <span class="history-cat-tag">${cat.tr}</span>
                <span class="history-card-title">${esc(item.tr)}</span>
              </div>
              <span class="history-card-date">${dateStr}</span>
            </div>
            <span class="history-card-en">${esc(item.en)}</span>
            ${item.notes ? `<div class="history-card-note">${esc(item.notes)}</div>` : ""}
          </li>
        `;
      }).join("")}
    </ul>
  `;
}

function syncProfileUI() {
  const list = loadHistory();
  if (statsContainer) statsContainer.innerHTML = renderStats(list);
  if (historyFilterRow) {
    historyFilterRow.innerHTML = renderFilterChips(list);
    historyFilterRow.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        historyActiveCategory = chip.dataset.filter;
        syncProfileUI();
      });
    });
  }
  if (historyListContainer) historyListContainer.innerHTML = renderHistoryList(list);
}

if (historySearchInput) {
  historySearchInput.addEventListener("input", (e) => {
    historySearchQuery = e.target.value.trim();
    syncProfileUI();
  });
}

profileBtn.addEventListener("click", () => {
  historySearchQuery = "";
  if (historySearchInput) historySearchInput.value = "";
  historyActiveCategory = "all";
  syncProfileUI();
  profileModal.classList.remove("is-hidden");
});

closeProfile.addEventListener("click", () => profileModal.classList.add("is-hidden"));
profileModal.addEventListener("click", (e) => {
  if (e.target === profileModal) profileModal.classList.add("is-hidden");
});

clearHistoryBtn.addEventListener("click", () => {
  if (!confirm("Tüm araştırma geçmişini silmek istediğine emin misin?")) return;
  saveHistory([]);
  syncProfileUI();
  render();
  showToast("Katalog sıfırlandı");
});

function historyToMarkdown(list) {
  if (!list.length) return "# Meraksandık — Araştırma Kataloğu\n\nHenüz araştırılan bir kavram yok.\n";
  const lines = ["# Meraksandık — Araştırma Kataloğu", ""];
  let lastDate = null;
  [...list].reverse().forEach((item) => {
    const dateKey = new Date(item.finishedAt).toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
    if (dateKey !== lastDate) {
      lines.push(`## ${dateKey}`, "");
      lastDate = dateKey;
    }
    const cat = CATEGORIES.find((c) => c.id === item.category) || CATEGORIES[0];
    lines.push(`- **${item.tr}** (*${item.en}*) — \`${cat.tr}\``);
    if (item.notes) {
      lines.push(`  > ${item.notes}`);
    }
  });
  lines.push("");
  return lines.join("\n");
}

exportHistoryBtn.addEventListener("click", () => {
  const md = historyToMarkdown(loadHistory());
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "meraksandik-katalog.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Markdown dosyası indirildi");
});

// ---------- Initialization ----------
applyTheme(settings.theme);
applyPalette(settings.palette);
applyLampFocus(settings.lampFocus);
syncSoundIcons();
syncAmbientButton();

if (settings.sound && settings.ambience && settings.ambience !== "none") {
  const startOnGesture = () => {
    sfx.setAmbience(settings.ambience);
  };
  window.addEventListener("click", startOnGesture, { once: true });
  window.addEventListener("keydown", startOnGesture, { once: true });
}

if (!restoreSession()) {
  render();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => { /* PWA desteği */ });
  });
}
