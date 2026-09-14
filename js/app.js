/**
 * ANTROMAT — THE AI CHIEF OF STAFF
 * Interactive Experience Engine
 * Specification: website new version.md
 */

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgress();
  initStickyPageIndicator();
  initEditorialNav();
  initSpotlightEngine();
  initAskAntromatEngine();
  initWorkflowSwitcher();
  initModalEngine();
  initCustomCursor();
  initVoiceNotePlayer();
});

/* --------------------------------------------------------------------------
   1. READING PROGRESS BAR
   -------------------------------------------------------------------------- */
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. STICKY PAGE INDICATOR (01 / 13 — ARTICLE TITLE)
   -------------------------------------------------------------------------- */
function initStickyPageIndicator() {
  const indicator = document.getElementById('sticky-page-indicator');
  const pageNumEl = document.getElementById('indicator-num');
  const pageTitleEl = document.getElementById('indicator-title');
  if (!indicator || !pageNumEl || !pageTitleEl) return;

  const articles = document.querySelectorAll('.editorial-article');
  
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const num = entry.target.getAttribute('data-article-num') || '00';
        const title = entry.target.getAttribute('data-article-title') || 'ANTROMAT';
        pageNumEl.textContent = `${num} / 13`;
        pageTitleEl.textContent = title;
      }
    });
  }, observerOptions);

  articles.forEach(article => observer.observe(article));
}

/* --------------------------------------------------------------------------
   3. EDITORIAL NAVIGATION BEHAVIOR
   -------------------------------------------------------------------------- */
function initEditorialNav() {
  const nav = document.querySelector('.editorial-nav');
  if (!nav) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Matte background on scroll
    if (currentScrollY > 40) {
      nav.classList.add('nav-matte');
    } else {
      nav.classList.remove('nav-matte');
    }

    // Hide on fast scroll down, reveal on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // Mobile navigation toggle
  const mobileToggle = document.querySelector('.nav-mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '72px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#090909';
        navLinks.style.padding = '24px 32px';
        navLinks.style.borderBottom = '1px solid var(--border-dark)';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   4. SELECTIVE COLOR SPOTLIGHT ENGINE
   -------------------------------------------------------------------------- */
function initSpotlightEngine() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return; // Desktop only

  const spotlightFrames = document.querySelectorAll('.spotlight-frame');

  spotlightFrames.forEach(frame => {
    frame.addEventListener('mousemove', (e) => {
      const rect = frame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      frame.style.setProperty('--mouse-x', `${x}px`);
      frame.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* --------------------------------------------------------------------------
   5. ASK ANTROMAT INTERACTION ENGINE (ARTICLE 06)
   -------------------------------------------------------------------------- */
const TRANSCRIPT_DATA = {
  q1: {
    question: "Which customers haven't paid in the last 30 days?",
    answer: "Mahesh Textiles\nOutstanding amount: <span class=\"highlight-green\">₹86,400</span>\nLast reminder sent yesterday.\nExpected payment this Friday."
  },
  q2: {
    question: "Summarize today's business activity.",
    answer: "14 quotations sent.\n6 dispatches completed.\n<span class=\"highlight-amber\">3 customer follow-ups pending.</span>\n2 production delays need attention."
  },
  q3: {
    question: "What happened with Order #248?",
    answer: "Production completed at 2:15 PM.\n<span class=\"highlight-red\">Dispatch delayed</span> because transport confirmation arrived late.\nCustomer has already been informed."
  },
  q4: {
    question: "What should I focus on today?",
    answer: "1. Follow up with Mahesh Textiles.\n2. Approve quotation for RK Fabrics.\n3. Review delayed shipment #248.\n4. <span class=\"highlight-blue\">Outstanding collections worth ₹1.82L.</span>"
  }
};

function initAskAntromatEngine() {
  const chips = document.querySelectorAll('.query-chip');
  const questionEl = document.getElementById('transcript-owner-q');
  const answerEl = document.getElementById('transcript-antromat-a');
  if (!chips.length || !questionEl || !answerEl) return;

  let typingTimeout = null;

  function runQuery(key) {
    const data = TRANSCRIPT_DATA[key];
    if (!data) return;

    // Update active chip
    chips.forEach(c => c.classList.toggle('active', c.getAttribute('data-query') === key));

    // Instant question appearance
    questionEl.textContent = `"${data.question}"`;

    // Reset answer with typing cursor
    if (typingTimeout) clearTimeout(typingTimeout);
    answerEl.innerHTML = '<span class="typing-cursor"></span>';

    // Type out answer smoothly
    const rawAnswer = data.answer;
    
    // Check if reduced motion is requested
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      answerEl.innerHTML = rawAnswer.replace(/\n/g, '<br>');
      return;
    }

    let charIndex = 0;
    // We will render character by character without breaking HTML tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = rawAnswer;
    const plainText = tempDiv.textContent || tempDiv.innerText || "";

    function typeChar() {
      if (charIndex <= plainText.length) {
        // Show partial text with cursor
        const currentSlice = plainText.substring(0, charIndex);
        answerEl.innerHTML = currentSlice.replace(/\n/g, '<br>') + '<span class="typing-cursor"></span>';
        charIndex++;
        typingTimeout = setTimeout(typeChar, 24);
      } else {
        // Typing finished -> reveal final formatted HTML with selective color highlight!
        answerEl.innerHTML = rawAnswer.replace(/\n/g, '<br>');
      }
    }

    typeChar();
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const qKey = chip.getAttribute('data-query');
      runQuery(qKey);
    });
  });

  // Initial trigger with Query 1
  runQuery('q1');
}

/* --------------------------------------------------------------------------
   6. INDUSTRY WORKFLOW SWITCHER (ARTICLE 08)
   -------------------------------------------------------------------------- */
const WORKFLOW_DATA = {
  garment: {
    headline: "Every production update becomes memory.",
    copy: "Workers upload updates on the floor. Production moves through cutting, stitching, and finishing stages. Owners don't chase status anymore.",
    meta: "GARMENT UNIT · CUTTING FLOOR",
    statusText: "STAGE 03 / 05 · STITCHING IN PROGRESS",
    stageHighlight: "Cutting & Stitching synced · 420 units on schedule",
    image: "assets/garment_floor.jpg"
  },
  textile: {
    headline: "Every roll has full operational context.",
    copy: "Orders, inventory, loom dispatches, payments, and clients connected together in one living memory.",
    meta: "TEXTILE MILL · WARDHA",
    statusText: "LOOM SHIFT 02 · 1,200 METERS PROCESSED",
    stageHighlight: "Dispatch sticker active · Quality inspection passed",
    image: "assets/textile_mill.jpg"
  },
  warehouse: {
    headline: "Know where every shipment is before clients ask.",
    copy: "Warehouse loading docks, barcode scans, and courier handoffs update the company timeline automatically.",
    meta: "DISTRIBUTION HUB · DISPATCH DOCK",
    statusText: "DOCK 04 · OUTBOUND SCAN COMPLETE",
    stageHighlight: "Consignment #4892 · In-transit tracking live",
    image: "assets/warehouse.jpg"
  },
  chemical: {
    headline: "Formulation and batch tracking without loose papers.",
    copy: "Industrial reactors, inspection tags, batch tests, and safety compliance logs organized in searchable context.",
    meta: "CHEMICAL PLANT · BATCHING UNIT",
    statusText: "BATCH #B-88 · VISCOSITY VERIFIED",
    stageHighlight: "Compliance certified · Ready for dispatch",
    image: "assets/chemical_plant.jpg"
  },
  distribution: {
    headline: "Sales and logistics finally speak the same language.",
    copy: "From WhatsApp quotation to delivery truck departure, every team member works from the same live reality.",
    meta: "CENTRAL LOGISTICS · TRUCK TERMINAL",
    statusText: "VEHICLE MH-31 · ROUTE OPTIMIZED",
    stageHighlight: "Invoice attached · Payment milestone tracked",
    image: "assets/distribution_truck.jpg"
  }
};

function initWorkflowSwitcher() {
  const tabs = document.querySelectorAll('.workflow-tab-btn');
  const headlineEl = document.getElementById('workflow-headline');
  const copyEl = document.getElementById('workflow-copy');
  const metaEl = document.getElementById('workflow-meta');
  const statusEl = document.getElementById('workflow-status-badge');
  const highlightEl = document.getElementById('workflow-highlight-text');
  const photoImg = document.getElementById('workflow-photo-img');
  const photoReveal = document.getElementById('workflow-photo-reveal');

  if (!tabs.length || !headlineEl) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-workflow');
      const data = WORKFLOW_DATA[key];
      if (!data) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      headlineEl.textContent = data.headline;
      copyEl.textContent = data.copy;
      if (metaEl) metaEl.textContent = data.meta;
      if (statusEl) statusEl.textContent = data.statusText;
      if (highlightEl) highlightEl.textContent = data.stageHighlight;
      if (photoImg && data.image) photoImg.src = data.image;
      if (photoReveal && data.image) photoReveal.style.backgroundImage = `url('${data.image}')`;
    });
  });
}

/* --------------------------------------------------------------------------
   7. EDITORIAL DEMO BOOKING MODAL
   -------------------------------------------------------------------------- */
function initModalEngine() {
  const modal = document.getElementById('demo-modal');
  const openButtons = document.querySelectorAll('[data-open-demo]');
  const closeButton = document.getElementById('modal-close-btn');
  const demoForm = document.getElementById('editorial-demo-form');

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = demoForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'RESERVATION CONFIRMED';
        submitBtn.style.backgroundColor = '#2E7D5A';
        submitBtn.style.color = '#FAFAF7';
      }
      setTimeout(() => {
        alert('Thank you. Your private briefing reservation has been received. Our team will contact you shortly.');
        closeModal();
        demoForm.reset();
        if (submitBtn) {
          submitBtn.textContent = 'CONFIRM DEMO RESERVATION';
          submitBtn.style.backgroundColor = '';
          submitBtn.style.color = '';
        }
      }, 600);
    });
  }
}

/* --------------------------------------------------------------------------
   8. CUSTOM EDITORIAL DOT CURSOR
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  window.addEventListener('mousemove', (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    ring.style.left = `${e.clientX}px`;
    ring.style.top = `${e.clientY}px`;
  });

  const interactiveEls = document.querySelectorAll('a, button, .spotlight-frame, .query-chip, .voice-note-card, .workflow-tab-btn');
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('active-hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('active-hover'));
  });
}

/* --------------------------------------------------------------------------
   9. GROUND VOICE NOTE MICRO-PLAYER
   -------------------------------------------------------------------------- */
function initVoiceNotePlayer() {
  const card = document.getElementById('voice-note-demo');
  const icon = document.getElementById('voice-play-icon');
  if (!card || !icon) return;

  let isPlaying = false;
  let playTimer = null;

  card.addEventListener('click', () => {
    isPlaying = !isPlaying;
    card.classList.toggle('playing', isPlaying);
    icon.textContent = isPlaying ? '❚❚' : '▶';

    if (isPlaying) {
      if (playTimer) clearTimeout(playTimer);
      playTimer = setTimeout(() => {
        isPlaying = false;
        card.classList.remove('playing');
        icon.textContent = '▶';
      }, 4500);
    } else {
      if (playTimer) clearTimeout(playTimer);
    }
  });
}
