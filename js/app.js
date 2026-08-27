/**
 * ANTROMAT — OPERATIONS MANUAL × LIVE PRODUCT DEMO
 * Master Controller & Automated Simulation Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initAnalogClock();
  initRevenueLeakTicker();
  initScrollPagination();
  initHeroUrgencySimulation();
  initLiveWhatsAppDemo();
  initN8nWorkflowEngine();
  initAiUnderstandingSplit();
  initAutomatedLeadPipeline();
  initDashboardTelemetry();
  initIndustrySwitcher();
  initAutomationLibrary();
  initAutomatedSandboxPlayground();
  initVidarbhaMap();
  initDeploymentForm();
  initImpactWidgetToggle();
});

/* ==========================================================================
   01. ANALOG & DIGITAL CLOCK MECHANICS
   ========================================================================== */
function initAnalogClock() {
  const hourHand = document.querySelector('.clock-hour');
  const minuteHand = document.querySelector('.clock-minute');
  const secondHand = document.querySelector('.clock-second');
  const digitalTimeDisplay = document.querySelector('.clock-digital-time .time-val');

  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const millis = now.getMilliseconds();

    const secondDeg = (seconds + millis / 1000) * 6;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const hourDeg = ((hours % 12) + minutes / 60) * 30;

    if (secondHand) secondHand.style.transform = `rotate(${secondDeg}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;

    if (digitalTimeDisplay) {
      const hh = String(hours).padStart(2, '0');
      const mm = String(minutes).padStart(2, '0');
      const ss = String(seconds).padStart(2, '0');
      digitalTimeDisplay.textContent = `${hh}:${mm}:${ss}`;
    }
  }

  setInterval(updateClock, 100);
  updateClock();
}

/* ==========================================================================
   02. LIVE REVENUE LEAK ENGINE
   ========================================================================== */
let revenueLeakAmount = 18426;

function initRevenueLeakTicker() {
  const leakDisplay = document.querySelector('.impact-leak-box .leak-value');

  setInterval(() => {
    const increment = Math.floor(Math.random() * 32) + 14;
    revenueLeakAmount += increment;
    if (leakDisplay) {
      leakDisplay.textContent = `₹ ${revenueLeakAmount.toLocaleString('en-IN')}`;
    }
  }, 2800);
}

function initImpactWidgetToggle() {
  const toggleBtn = document.getElementById('impact-minimize-btn');
  const floater = document.getElementById('live-impact-widget');
  if (toggleBtn && floater) {
    toggleBtn.addEventListener('click', () => {
      floater.classList.toggle('minimized');
      toggleBtn.textContent = floater.classList.contains('minimized') ? '□' : '_';
    });
  }
}

/* ==========================================================================
   03. SCROLL PROGRESSION (PAGE 01 - 11) (STABLE & JUMP-FREE)
   ========================================================================== */
function initScrollPagination() {
  const sections = document.querySelectorAll('.manual-section');
  const pageNumberLabel = document.querySelector('.footer-page-label');
  const progressBarFill = document.querySelector('.footer-progress-fill');
  const bookmark = document.querySelector('.bookmark-ribbon');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));

    if (progressBarFill) {
      progressBarFill.style.width = `${Math.max(9, scrollPercent)}%`;
    }

    sections.forEach((sec, idx) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        const pageNum = String(idx + 1).padStart(2, '0');
        if (pageNumberLabel) {
          pageNumberLabel.textContent = `PAGE ${pageNum} / 11`;
        }
        if (bookmark) {
          const bookmarkSpan = bookmark.querySelector('span');
          if (bookmarkSpan) bookmarkSpan.textContent = `PAGE ${pageNum}`;
        }
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   04. SECTION 01 — HERO URGENCY SIMULATION (YAVATMAL INQUIRY)
   ========================================================================== */
function initHeroUrgencySimulation() {
  const msgContainer = document.getElementById('hero-chat-stream');
  const leakValEl = document.getElementById('hero-leak-counter');
  if (!msgContainer) return;

  const script = [
    { sender: 'client', text: 'Hi, I need 500 bags of cement for tomorrow morning at Yavatmal site.', time: '09:12' },
    { sender: 'business', text: 'Got it. Let me check with our supervisor and get back to you shortly.', time: '09:14' },
    { sender: 'client', text: 'Hello? Any update on the rate and dispatch time?', time: '09:37' },
    { sender: 'business', text: 'Sorry for the delay, was in a site meeting. Working on quotation now.', time: '09:48' },
    { sender: 'client', text: 'Too late. Ordered from another supplier who confirmed in 2 mins.', time: '09:50', isLost: true }
  ];

  let step = 0;
  let heroLeak = 0;

  function runHeroSequence() {
    msgContainer.innerHTML = '';
    step = 0;
    heroLeak = 0;
    if (leakValEl) leakValEl.textContent = `₹ 0`;

    function addNextMsg() {
      if (step < script.length) {
        const item = script[step];
        const bubble = document.createElement('div');
        bubble.className = `chat-msg ${item.sender}`;
        if (item.isLost) {
          bubble.style.border = '2px solid var(--danger)';
          bubble.style.background = '#FFECEB';
          bubble.style.fontWeight = '600';
        }
        bubble.innerHTML = `${item.text} <span class="time-stamp">${item.time}</span>`;
        msgContainer.appendChild(bubble);
        msgContainer.scrollTop = msgContainer.scrollHeight;

        if (item.isLost && leakValEl) {
          heroLeak += 210000;
          leakValEl.textContent = `₹ ${heroLeak.toLocaleString('en-IN')}`;
        }

        step++;
        setTimeout(addNextMsg, 1600);
      } else {
        setTimeout(runHeroSequence, 4500);
      }
    }

    addNextMsg();
  }

  runHeroSequence();
}

/* ==========================================================================
   05. SECTION 02 — LIVE WHATSAPP DEMO (FASTER & CLEARER)
   ========================================================================== */
function initLiveWhatsAppDemo() {
  const fields = document.querySelectorAll('.extracted-field-card');
  const statusTag = document.getElementById('ai-extractor-status');
  if (!fields.length) return;

  let currentIndex = 0;

  function highlightNextField() {
    fields.forEach(f => f.classList.remove('highlighted'));

    if (currentIndex < fields.length) {
      fields[currentIndex].classList.add('highlighted');
      if (statusTag) statusTag.textContent = `EXTRACTING FIELD ${currentIndex + 1}/6...`;
      currentIndex++;
      setTimeout(highlightNextField, 750); // Faster, crisp extraction
    } else {
      if (statusTag) statusTag.textContent = `SYNC COMPLETE (100%)`;
      setTimeout(() => {
        currentIndex = 0;
        highlightNextField();
      }, 2400);
    }
  }

  setTimeout(highlightNextField, 600);
}

/* ==========================================================================
   06. SECTION 03 — N8N WORKFLOW ENGINE & REAL-WORLD VISUAL AID COMPANION
   ========================================================================== */
function initN8nWorkflowEngine() {
  const nodeBoxes = document.querySelectorAll('.n8n-node-box');
  const inspName = document.getElementById('inspector-name');
  const inspLatency = document.getElementById('inspector-latency');
  const inspInput = document.getElementById('inspector-input');
  const inspOutput = document.getElementById('inspector-output');
  const n8nStatus = document.getElementById('n8n-status-text');

  const visAidBadge = document.getElementById('vis-aid-badge');
  const visAidSummary = document.getElementById('vis-aid-summary');
  const visAidBody = document.getElementById('vis-aid-dynamic-body');

  const nodeData = {
    whatsapp: {
      name: 'WhatsApp Trigger (Inbound Message)',
      latency: '45ms',
      input: '{"from": "+9198220XXXXX", "text": "Need 500 bags cement Yavatmal"}',
      output: '{"event": "inquiry_received", "timestamp": 1724754500}',
      status: 'WhatsApp Trigger [Status 200 OK]',
      badge: 'STEP 1 / 6 · INCOMING WHATSAPP MESSAGE',
      summary: 'Client sends an informal message on WhatsApp. The system intercepts the message in 45ms.',
      visualHtml: `
        <div class="visual-aid-card">
          <div class="card-title">
            <span>💬 INBOUND WHATSAPP CHAT</span>
            <span class="crm-badge high">LIVE MSG</span>
          </div>
          <div style="background:#E1F5FE; border:1px solid #81D4FA; padding:10px; border-radius:4px; font-size:11px;">
            <strong>Amit Constructions:</strong> "Hi, I need 500 bags of OPC 43 cement delivered to Yavatmal site tomorrow morning."
            <div style="font-size:9px; color:#555; text-align:right; margin-top:4px;">09:12 AM · WhatsApp Business</div>
          </div>
          <div style="margin-top:8px; font-size:10px; color:var(--neutral-grey);">
            ✓ Webhook captured automatically without human intervention.
          </div>
        </div>
      `
    },
    ai: {
      name: 'AI Intent Engine (OpenAI GPT-4o)',
      latency: '340ms',
      input: '{"raw_text": "Need 500 bags cement Yavatmal", "lang": "Hinglish"}',
      output: '{"intent": "RFQ_PURCHASE", "sku": "OPC_43", "qty": 500, "site": "Yavatmal"}',
      status: 'AI Intent Engine [Status 200 OK]',
      badge: 'STEP 2 / 6 · AI PARAMETER EXTRACTION',
      summary: 'AI reads messy text or voice notes, instantly extracting entity, quantity, and urgency.',
      visualHtml: `
        <div class="visual-aid-card">
          <div class="card-title">
            <span>🧠 AI INTENT & ENTITY EXTRACTION</span>
            <span class="crm-badge won">CONFIDENCE: 99.8%</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:4px; font-size:11px;">
            <div>• <strong>Customer:</strong> Amit Constructions</div>
            <div>• <strong>Material SKU:</strong> Cement OPC 43 (Grade A)</div>
            <div>• <strong>Quantity:</strong> 500 Bags</div>
            <div>• <strong>Delivery Site:</strong> Yavatmal Industrial MIDC</div>
          </div>
          <div style="margin-top:8px; font-size:10px; color:var(--success); font-weight:700;">
            ✓ Structured parameters mapped in 340ms.
          </div>
        </div>
      `
    },
    crm: {
      name: 'Create / Update Lead (Antromat CRM)',
      latency: '110ms',
      input: '{"client": "Amit Constructions", "value": 247800}',
      output: '{"lead_id": "LEAD-4091", "stage": "SCOPED", "status": "ASSIGNED"}',
      status: 'Create / Update Lead [Status 200 OK]',
      badge: 'STEP 3 / 6 · CRM LEAD DOSSIER CREATED',
      summary: 'A new lead card is automatically created in the CRM with verified contact and deal value.',
      visualHtml: `
        <div class="visual-aid-card">
          <div class="card-title">
            <span>📁 ANTROMAT CRM DOSSIER</span>
            <span class="crm-badge high">HIGH VALUE</span>
          </div>
          <div style="background:#FAF9F5; border:1px solid #DDD; padding:8px; font-size:11px;">
            <div style="font-weight:700;">#LEAD-4091 · Amit Constructions</div>
            <div style="color:#666; font-size:10px;">Contact: +91 98220 41920 · Yavatmal</div>
            <div style="margin-top:4px; font-weight:700; color:var(--black);">Deal Value: ₹ 2,47,800.00</div>
          </div>
          <div style="margin-top:8px; font-size:10px; color:var(--neutral-grey);">
            ✓ Assigned to Central Hub Rep · Stage: SCOPED.
          </div>
        </div>
      `
    },
    calendar: {
      name: 'Schedule Meeting (Google Calendar API)',
      latency: '210ms',
      input: '{"slot": "2026-08-28T11:30:00", "title": "Site Inspection Yavatmal"}',
      output: '{"event_id": "CAL_9901", "status": "CONFIRMED", "invite_sent": true}',
      status: 'Schedule Meeting [Status 200 OK]',
      badge: 'STEP 4 / 6 · CALENDAR & DRIVER DISPATCH',
      summary: 'Calendar reservation locked, supervisor allocated, and Google map sent to truck driver.',
      visualHtml: `
        <div class="visual-aid-card">
          <div class="card-title">
            <span>📅 GOOGLE CALENDAR & LOGISTICS DISPATCH</span>
            <span style="background:#0055aa; color:#fff; padding:1px 6px; font-size:9px; font-weight:700;">SYNCED</span>
          </div>
          <div style="background:#EBF3FB; border:1px solid #90CAF9; padding:8px; font-size:11px;">
            <div style="font-weight:700; color:#004499;">Event: Site Inspection & Unloading</div>
            <div style="font-size:10px; color:#555;">Time: Tomorrow, 11:30 AM – 12:15 PM</div>
            <div style="font-size:10px; color:#555;">Assigned: Field Operations Engineer (Nagpur Hub)</div>
          </div>
          <div style="margin-top:8px; font-size:10px; color:#0055aa;">
            ✓ WhatsApp location ping auto-sent to delivery driver.
          </div>
        </div>
      `
    },
    invoice: {
      name: 'Generate Invoice (PDF Engine)',
      latency: '420ms',
      input: '{"hsn": "252329", "qty": 500, "rate": 420, "tax": 0.18}',
      output: '{"invoice_id": "INV-00234", "total": 247800, "pdf_url": "https://..."}',
      status: 'Generate Invoice [Status 200 OK]',
      badge: 'STEP 5 / 6 · TAX QUOTATION PDF SENT',
      summary: 'Official GST invoice generated with line items and delivered to client WhatsApp in 4 seconds.',
      visualHtml: `
        <div class="visual-aid-card">
          <div class="card-title">
            <span>📄 OFFICIAL TAX INVOICE #INV-00234</span>
            <span class="crm-badge won">GST READY</span>
          </div>
          <div style="font-size:11px; line-height:1.4;">
            <div>Item: 500 Bags OPC 43 @ ₹420 = ₹2,10,000</div>
            <div>GST (18%): ₹37,800.00</div>
            <div style="font-weight:700; font-size:12px; margin-top:4px; border-top:1px solid #eee; padding-top:2px;">
              TOTAL AMOUNT: ₹ 2,47,800.00
            </div>
          </div>
          <div style="margin-top:8px; font-size:10px; color:var(--success); font-weight:700;">
            ✓ PDF Quotation auto-dispatched to client WhatsApp.
          </div>
        </div>
      `
    },
    dashboard: {
      name: 'Update Dashboard (Executive Telemetry)',
      latency: '85ms',
      input: '{"event": "quote_sent", "amount": 247800}',
      output: '{"pipeline_updated": true, "total_aug": 2485000}',
      status: 'Update Dashboard [Status 200 OK]',
      badge: 'STEP 6 / 6 · FOUNDER DASHBOARD UPDATED',
      summary: 'The director dashboard updates live. Today’s revenue and active pipeline increase automatically.',
      visualHtml: `
        <div class="visual-aid-card">
          <div class="card-title">
            <span>📊 FOUNDER CONTROL CENTER TELEMETRY</span>
            <span class="crm-badge high">LIVE UPDATE</span>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; background:#FAF9F5; padding:8px; border:1px solid #DDD;">
            <div>
              <div style="font-size:9px; color:#777;">PIPELINE ADDED</div>
              <div style="font-weight:700; font-size:13px; color:var(--black);">+ ₹ 2,47,800</div>
            </div>
            <div>
              <div style="font-size:9px; color:#777;">TOTAL ACTIVE PIPELINE</div>
              <div style="font-weight:700; font-size:13px; color:var(--success);">₹ 48,20,000</div>
            </div>
          </div>
          <div style="margin-top:8px; font-size:10px; color:var(--neutral-grey);">
            ✓ Director notified via WhatsApp push notification.
          </div>
        </div>
      `
    }
  };

  const nodeKeys = ['whatsapp', 'ai', 'crm', 'calendar', 'invoice', 'dashboard'];
  let activeIndex = 0;

  function setActiveNode(key) {
    const data = nodeData[key];
    if (!data) return;

    nodeBoxes.forEach(b => {
      if (b.getAttribute('data-node') === key) {
        b.classList.add('active-node');
      } else {
        b.classList.remove('active-node');
      }
    });

    if (inspName) inspName.textContent = data.name;
    if (inspLatency) inspLatency.textContent = data.latency;
    if (inspInput) inspInput.textContent = data.input;
    if (inspOutput) inspOutput.textContent = data.output;
    if (n8nStatus) n8nStatus.textContent = data.status;

    if (visAidBadge) visAidBadge.textContent = data.badge;
    if (visAidSummary) visAidSummary.textContent = data.summary;
    if (visAidBody) visAidBody.innerHTML = data.visualHtml;
  }

  nodeBoxes.forEach((box, idx) => {
    box.addEventListener('click', () => {
      activeIndex = idx;
      const key = box.getAttribute('data-node');
      setActiveNode(key);
    });
  });

  // Auto-cycle through the 6 steps every 2.6 seconds
  setInterval(() => {
    activeIndex = (activeIndex + 1) % nodeKeys.length;
    setActiveNode(nodeKeys[activeIndex]);
  }, 2600);

  setActiveNode('whatsapp');
}

/* ==========================================================================
   07. SECTION 04 — AI UNDERSTANDING SPLIT PARSER
   ========================================================================== */
function initAiUnderstandingSplit() {
  const tableRows = document.querySelectorAll('.structured-crm-table tbody tr');
  if (!tableRows.length) return;

  let rowIndex = 0;
  setInterval(() => {
    tableRows.forEach(r => r.classList.remove('highlight-row'));
    tableRows[rowIndex].classList.add('highlight-row');
    rowIndex = (rowIndex + 1) % tableRows.length;
  }, 1800);
}

/* ==========================================================================
   08. SECTION 05 — AUTOMATED LEAD JOURNEY PIPELINE (KANBAN)
   ========================================================================== */
let pipelineStageIdx = 0;
const pipelineStageNames = ['NEW', 'QUALIFIED', 'MEETING', 'QUOTE SENT', 'PAYMENT'];

function initAutomatedLeadPipeline() {
  const stageCols = document.querySelectorAll('.kanban-column');
  const movableCard = document.getElementById('active-movable-lead');
  const auditLog = document.getElementById('lead-audit-log');
  if (!stageCols.length || !movableCard) return;

  function advancePipeline(stageIndex) {
    pipelineStageIdx = stageIndex;
    if (stageCols[pipelineStageIdx]) {
      stageCols[pipelineStageIdx].appendChild(movableCard);
    }

    const currentStageName = pipelineStageNames[pipelineStageIdx];

    if (auditLog) {
      const time = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      auditLog.innerHTML = `[${time}] Automated status update: <strong>${currentStageName}</strong>`;
    }

    const paymentBadge = movableCard.querySelector('.payment-status-pill');
    if (paymentBadge) {
      if (currentStageName === 'PAYMENT') {
        paymentBadge.textContent = 'PAID (₹2,47,800)';
        paymentBadge.style.background = 'var(--success)';
        paymentBadge.style.color = '#fff';
      } else {
        paymentBadge.textContent = 'PENDING';
        paymentBadge.style.background = '#ddd';
        paymentBadge.style.color = '#333';
      }
    }
  }

  // Click on any column to jump immediately
  stageCols.forEach((col, idx) => {
    col.addEventListener('click', () => {
      advancePipeline(idx);
    });
  });

  // Auto-play loop every 2.4 seconds so target users don't have to click
  setInterval(() => {
    const nextIdx = (pipelineStageIdx + 1) % pipelineStageNames.length;
    advancePipeline(nextIdx);
  }, 2400);
}

/* ==========================================================================
   09. SECTION 06 — BUILDER CONTROL CENTER COCKPIT CONTROLLER
   ========================================================================== */
function initDashboardTelemetry() {
  const feedList = document.getElementById('telemetry-feed-stream');
  const tabTelemetry = document.getElementById('cp-tab-telemetry');
  const tabCalendar = document.getElementById('cp-tab-calendar');
  const tabQuotes = document.getElementById('cp-tab-quotes');
  const viewTelemetry = document.getElementById('view-telemetry');
  const viewCalendar = document.getElementById('view-calendar');
  const viewQuotes = document.getElementById('view-quotes');

  function switchCockpitView(activeTab, activeView) {
    [tabTelemetry, tabCalendar, tabQuotes].forEach(t => t?.classList.remove('active-cockpit-tab'));
    [viewTelemetry, viewCalendar, viewQuotes].forEach(v => {
      if (v) v.style.display = 'none';
    });

    if (activeTab) activeTab.classList.add('active-cockpit-tab');
    if (activeView) activeView.style.display = 'flex';
  }

  if (tabTelemetry) tabTelemetry.addEventListener('click', () => switchCockpitView(tabTelemetry, viewTelemetry));
  if (tabCalendar) tabCalendar.addEventListener('click', () => switchCockpitView(tabCalendar, viewCalendar));
  if (tabQuotes) tabQuotes.addEventListener('click', () => switchCockpitView(tabQuotes, viewQuotes));

  if (!feedList) return;

  const mockEvents = [
    'WhatsApp inquiry received from Metro Builders (500 bags Cement, Yavatmal).',
    'AI Intent detected: Quotation Request (Score 0.99).',
    'CRM Lead automatically created #LEAD-4091.',
    'Google Calendar site visit scheduled for Tomorrow 11:30 AM.',
    'Invoice #INV-00234 generated & dispatched via WhatsApp PDF.',
    'Payment of ₹2,47,800 received via Bank Transfer webhook.',
    'Inventory stock synchronized across Nagpur & Yavatmal depots.'
  ];

  let eventIdx = 0;

  setInterval(() => {
    const time = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const li = document.createElement('li');
    li.className = 'feed-item';
    li.innerHTML = `<div class="feed-time">${time}</div><div class="feed-text">${mockEvents[eventIdx]}</div>`;
    feedList.prepend(li);
    if (feedList.children.length > 5) {
      feedList.removeChild(feedList.lastChild);
    }
    eventIdx = (eventIdx + 1) % mockEvents.length;
  }, 3200);
}

/* ==========================================================================
   10. SECTION 07 — INDUSTRY BLUEPRINTS (ENHANCED ARCHITECTURE & TABLE)
   ========================================================================== */
const industryData = {
  builder: {
    title: 'CONSTRUCTION & REAL ESTATE',
    description: 'Automates raw material procurement, site visit calendar dispatch, contractor rate cards, and progress milestone alerts.',
    kpis: [
      { num: '85%', lbl: 'Faster Quote Turnaround' },
      { num: '₹ 4.2L', lbl: 'Average Leak Saved / Mo' },
      { num: '100%', lbl: 'Payment Milestone Reminders' },
      { num: '0', lbl: 'Missed WhatsApp Enquiries' }
    ],
    flow: [
      'Customer messages on WhatsApp for cement / steel quote',
      'AI verifies current mill price table and inventory stock',
      'Auto-generates PDF quotation and sends in 45 seconds',
      'Auto-reserves calendar slot for site engineering team'
    ]
  },
  hospital: {
    title: 'HOSPITALS & DIAGNOSTIC CENTERS',
    description: 'Coordinates appointment booking, doctor OPD schedules, lab test report delivery via WhatsApp, and automatic emergency triage.',
    kpis: [
      { num: '92%', lbl: 'Zero Wait OPD Bookings' },
      { num: '30s', lbl: 'Lab Report Delivery Time' },
      { num: '24/7', lbl: 'Triage AI Availability' },
      { num: '4.9★', lbl: 'Patient Communication Score' }
    ],
    flow: [
      'Patient sends doctor name or symptom description on WhatsApp',
      'AI checks Doctor OPD schedule & books exact appointment slot',
      'Sends instant Google Calendar invite & token reminder',
      'Dispatches PDF lab reports securely upon lab authorization'
    ]
  },
  factory: {
    title: 'MANUFACTURING & INDUSTRIAL UNITS',
    description: 'Streamlines vendor Purchase Orders, machine downtime alerts, daily production tally logs, and raw material dispatch schedules.',
    kpis: [
      { num: '100%', lbl: 'PO Generation Automation' },
      { num: '3 hrs', lbl: 'Vendor Turnaround Saved' },
      { num: '99.4%', lbl: 'Dispatch Schedule Accuracy' },
      { num: '₹ 6.8L', lbl: 'Monthly Cost Reduction' }
    ],
    flow: [
      'Supervisor texts order details or breakdown log to bot',
      'AI logs maintenance ticket and notifies on-call engineer',
      'Auto-triggers replenishment PO to verified raw material suppliers',
      'Broadcasts daily production tally to factory director'
    ]
  },
  warehouse: {
    title: 'WAREHOUSING & LOGISTICS HUBS',
    description: 'Tracks inbound freight trucks, gate pass generation, stock low-level reorders, and e-way bill synchronization.',
    kpis: [
      { num: '12 min', lbl: 'Gate Turnaround Time' },
      { num: '0%', lbl: 'Stockout Frequency' },
      { num: 'Auto', lbl: 'E-Way Bill Verification' },
      { num: '150+', lbl: 'Daily Trucks Coordinated' }
    ],
    flow: [
      'Transporter sends truck number & invoice scan on WhatsApp',
      'AI extracts bill info & verifies gate clearance code',
      'Assigns loading bay & notifies forklift operator team',
      'Auto-updates inventory database upon dispatch confirmation'
    ]
  }
};

function initIndustrySwitcher() {
  const tabs = document.querySelectorAll('.industry-tab-btn');
  const titleEl = document.getElementById('ind-title');
  const descEl = document.getElementById('ind-desc');
  const kpiContainer = document.getElementById('ind-kpis');
  const flowContainer = document.getElementById('ind-flow');

  function renderIndustry(key) {
    const data = industryData[key];
    if (!data) return;

    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.description;

    if (kpiContainer) {
      kpiContainer.innerHTML = data.kpis.map(k => `
        <div class="industry-kpi-box">
          <div class="num">${k.num}</div>
          <div class="lbl">${k.lbl}</div>
        </div>
      `).join('');
    }

    if (flowContainer) {
      flowContainer.innerHTML = data.flow.map((step, idx) => `
        <div class="flow-step-row">
          <div class="step-badge">0${idx + 1}</div>
          <div>${step}</div>
        </div>
      `).join('');
    }
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active-tab'));
      btn.classList.add('active-tab');
      const indKey = btn.getAttribute('data-industry');
      renderIndustry(indKey);
    });
  });

  renderIndustry('builder');
}

/* ==========================================================================
   11. SECTION 08 — AUTOMATION LIBRARY WITH MECHANICAL SPEC DRAWER
   ========================================================================== */
const automationCatalog = [
  { id: 'A01', cat: 'sales', title: 'WhatsApp Follow-Up', desc: 'Auto-nudges quotation recipients at 24h & 48h intervals.', trigger: 'Quote sent > 24h no reply', action: 'Polite WhatsApp inquiry message', roi: '₹35,000/mo closed deals' },
  { id: 'A02', cat: 'finance', title: 'Payment Reminder', desc: 'Sends polite WhatsApp reminders 3 days before invoice due date.', trigger: 'Invoice Due Date - 3 Days', action: 'WhatsApp balance summary + UPI QR', roi: '18% faster cash collection' },
  { id: 'A03', cat: 'finance', title: 'Instant Invoice PDF', desc: 'Creates GST-compliant PDF invoice from chat order in 4 seconds.', trigger: 'PO confirmed on WhatsApp', action: 'Generate PDF + dispatch link', roi: '12 hours saved / week' },
  { id: 'A04', cat: 'finance', title: 'Overdue Auto-Escalation', desc: 'Flags overdue invoices over 15 days and alerts finance head.', trigger: 'Due date + 15 days unpaid', action: 'Daily executive alert digest', roi: 'Zero bad debt writeoffs' },
  { id: 'A05', cat: 'reports', title: 'Evening Director Brief', desc: 'Summarizes daily revenue, new leads, and cash collections at 8 PM.', trigger: 'Daily 20:00 IST cron', action: 'WhatsApp executive summary report', roi: 'Complete daily operational visibility' },
  { id: 'A06', cat: 'ops', title: 'Inventory Low-Stock', desc: 'Triggers supplier RFQ when warehouse cement drops below 200 bags.', trigger: 'Inventory < reorder threshold', action: 'Auto-draft supplier RFQ email/chat', roi: 'Zero site downtime' },
  { id: 'A07', cat: 'sales', title: 'Quotation Generator', desc: 'Pulls dynamic vendor rate cards and outputs customer PDF quotes.', trigger: 'Customer RFQ message', action: 'Render customized PDF quote', roi: '< 45s response speed' },
  { id: 'A08', cat: 'ops', title: 'Site Meeting Scheduler', desc: 'Detects client availability and locks Google Calendar slots automatically.', trigger: 'Chat mentions meeting time', action: 'Google Calendar booking link', roi: 'Eliminates back-and-forth calls' },
  { id: 'A09', cat: 'sales', title: 'Lead Qualification AI', desc: 'Scores incoming WhatsApp inquiries and tags High Priority buyers.', trigger: 'New inbound chat', action: 'Calculate intent score & tag CRM', roi: 'Focus on highest-value leads' },
  { id: 'A10', cat: 'finance', title: 'Bank Credit Webhook', desc: 'Matches incoming NEFT/IMPS bank SMS and marks CRM invoices PAID.', trigger: 'Bank credit notification SMS', action: 'Reconcile invoice & send receipt', roi: '100% accurate accounts' },
  { id: 'A11', cat: 'ops', title: 'Vendor Rate Comparison', desc: 'Extracts steel rates from multiple supplier PDFs into one clean sheet.', trigger: 'Supplier sends PDF rate card', action: 'OCR extraction to comparison grid', roi: 'Best procurement rates' },
  { id: 'A12', cat: 'reports', title: 'Weekly Pipeline Health', desc: 'Calculates deal velocity and warns of stagnant deals over 7 days.', trigger: 'Weekly Monday 09:00 cron', action: 'Send stalled deals digest', roi: '+22% pipeline velocity' },
  { id: 'A13', cat: 'sales', title: 'Google Reviews Nudge', desc: 'Sends WhatsApp review link after successful project handover.', trigger: 'Deal marked COMPLETED', action: 'Dispatches review invite', roi: '+45 Google 5-star ratings' },
  { id: 'A14', cat: 'ops', title: 'Driver Gate Pass Bot', desc: 'Generates QR-coded gate entry pass for inbound delivery trucks.', trigger: 'Transporter texts vehicle details', action: 'Auto-generate security gate pass', roi: '8 min gate turnaround' },
  { id: 'A15', cat: 'finance', title: 'Expense Receipt OCR', desc: 'Scans driver fuel receipts sent via photo and logs in tally sheet.', trigger: 'Receipt photo uploaded in chat', action: 'Extract amount & tax to ledger', roi: 'Zero misplaced vouchers' },
  { id: 'A16', cat: 'ops', title: 'Doctor OPD Roster', desc: 'Updates patient booking slots when doctor reschedules OPD hours.', trigger: 'Doctor modifies schedule', action: 'Notify booked patients on WhatsApp', roi: 'Zero clinic confusion' },
  { id: 'A17', cat: 'sales', title: 'Customer Re-order Trigger', desc: 'Prompts recurring clients when typical replenishment cycle arrives.', trigger: '30 days since last cement batch', action: 'Send single-tap reorder card', roi: '+28% repeat order volume' },
  { id: 'A18', cat: 'reports', title: 'Dead Deal Re-engagement', desc: 'Auto-reactivates cold prospects after 30 days with fresh pricing.', trigger: 'Deal inactive 30 days', action: 'Send updated seasonal rate list', roi: '12% re-activation rate' },
  { id: 'A19', cat: 'ops', title: 'Territory Lead Routing', desc: 'Routes incoming WhatsApp leads to regional reps in Wardha, Nagpur, Yavatmal.', trigger: 'Pincode detected in inquiry', action: 'Assign rep & dispatch notification', roi: 'Instant local sales response' },
  { id: 'A20', cat: 'ops', title: 'Vendor Price Drop Monitor', desc: 'Alerts procurement team when cement/steel commodity prices dip.', trigger: 'Market rate feed update', action: 'Send procurement opportunity alert', roi: '₹1.2L average savings / lot' }
];

function initAutomationLibrary() {
  const grid = document.getElementById('automation-cards-container');
  const filterChips = document.querySelectorAll('.filter-chip');
  const drawerBackdrop = document.getElementById('spec-drawer-modal');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  function openSpecDrawer(item) {
    if (!drawerBackdrop) return;
    document.getElementById('drawer-spec-code').textContent = item.id;
    document.getElementById('drawer-spec-title').textContent = item.title;
    document.getElementById('drawer-spec-desc').textContent = item.desc;
    document.getElementById('drawer-spec-trigger').textContent = item.trigger;
    document.getElementById('drawer-spec-action').textContent = item.action;
    document.getElementById('drawer-spec-roi').textContent = item.roi;
    drawerBackdrop.classList.add('open');
  }

  if (drawerCloseBtn && drawerBackdrop) {
    drawerCloseBtn.addEventListener('click', () => {
      drawerBackdrop.classList.remove('open');
    });
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) drawerBackdrop.classList.remove('open');
    });
  }

  function renderCards(filter = 'all') {
    const filtered = filter === 'all' ? automationCatalog : automationCatalog.filter(c => c.cat === filter);
    if (!grid) return;
    grid.innerHTML = filtered.map(item => `
      <div class="auto-lib-card" data-id="${item.id}">
        <div class="card-top">
          <span class="card-code">${item.id}</span>
          <span class="card-pill">${item.cat.toUpperCase()}</span>
        </div>
        <div>
          <div class="card-title">${item.title}</div>
          <div class="card-desc">${item.desc}</div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; font-family:var(--font-mono); font-size:9px; color:var(--neutral-grey);">
          <span>● AUTOMATED</span>
          <span style="color:var(--black); font-weight:700;">SPEC SHEET →</span>
        </div>
      </div>
    `).join('');

    // Attach click listener for mechanical spec drawer
    grid.querySelectorAll('.auto-lib-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const item = automationCatalog.find(c => c.id === id);
        if (item) openSpecDrawer(item);
      });
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active-chip'));
      chip.classList.add('active-chip');
      const cat = chip.getAttribute('data-filter');
      renderCards(cat);
    });
  });

  renderCards('all');
}

/* ==========================================================================
   12. SECTION 09 — ENHANCED CRM PROTOTYPE PLAYGROUND (AGENCY CRM CONTEXT)
   ========================================================================== */
function initAutomatedSandboxPlayground() {
  const sandboxOutput = document.getElementById('sandbox-dynamic-state');
  const invoicePreview = document.getElementById('sandbox-invoice-content');
  const paidStamp = document.getElementById('sandbox-paid-stamp');
  const actionButtons = document.querySelectorAll('.sandbox-action-btn');
  if (!sandboxOutput) return;

  const sandboxSteps = [
    {
      btnId: 'sb-btn-open-lead',
      html: `
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div class="crm-lead-card-dense">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong style="color:var(--black); font-size:12px;">Amit Constructions Pvt Ltd</strong>
              <span class="crm-badge high">HIGH VALUE LEAD (98%)</span>
            </div>
            <div style="color:#555; font-size:10px;">Contact: +91 98220 41920 (WhatsApp Verified) · Location: Yavatmal</div>
            <div style="display:flex; justify-content:space-between; border-top:1px dashed #ddd; padding-top:4px; margin-top:2px;">
              <span>Deal: <strong>500 Bags OPC 43 Cement</strong></span>
              <span style="font-weight:700; color:var(--black);">Est. ₹2,47,800</span>
            </div>
          </div>
          <div style="font-size:10px; color:var(--neutral-grey); line-height:1.4;">
            <div>• Source: Inbound WhatsApp Inquiry (09:12 AM)</div>
            <div>• Stage: <strong>QUALIFIED & SCOPED</strong> · Assigned to: Central Hub Rep</div>
          </div>
        </div>
      `,
      invoiceTotal: '₹ 2,47,800.00',
      stamp: false
    },
    {
      btnId: 'sb-btn-gen-invoice',
      html: `
        <div style="background:#ffffff; padding:12px; border:1.5px solid var(--black); font-family:var(--font-mono); font-size:11px;">
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid #ddd; padding-bottom:6px; margin-bottom:6px;">
            <strong>TAX INVOICE #INV-00234</strong>
            <span style="background:var(--yellow); padding:1px 6px; font-weight:700;">GST READY</span>
          </div>
          <div style="margin:4px 0;">Client: Amit Constructions (Yavatmal MIDC)</div>
          <div style="font-size:10px; color:#555;">HSN: 252329 · 500 Bags @ ₹420 = ₹2,10,000</div>
          <div style="font-size:10px; color:#555;">CGST (9%) + SGST (9%) = ₹37,800.00</div>
          <div style="font-weight:700; font-size:13px; margin-top:6px; color:var(--black); border-top:1px solid #eee; padding-top:4px;">
            TOTAL AMOUNT: ₹ 2,47,800.00
          </div>
        </div>
      `,
      invoiceTotal: '₹ 2,47,800.00',
      stamp: false
    },
    {
      btnId: 'sb-btn-schedule',
      html: `
        <div style="background:#EBF3FB; border:1px solid #0055aa; padding:12px; font-family:var(--font-mono); font-size:11px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <strong style="color:#004499;">✓ GOOGLE CALENDAR DISPATCHED</strong>
            <span style="font-size:9px; background:#fff; padding:1px 6px; border:1px solid #0055aa;">CONFIRMED</span>
          </div>
          <div>Event: Material Inspection & Site Unloading</div>
          <div style="color:#555; font-size:10px; margin-top:2px;">Slot: Tomorrow, 11:30 AM – 12:15 PM</div>
          <div style="color:#555; font-size:10px;">Location: Amit Constructions Site, Yavatmal</div>
          <div style="font-size:10px; margin-top:4px; color:#004499;">WhatsApp location map auto-sent to truck driver.</div>
        </div>
      `,
      invoiceTotal: '₹ 2,47,800.00',
      stamp: false
    },
    {
      btnId: 'sb-btn-mark-paid',
      html: `
        <div style="background:#EBF8F2; border:1.5px solid var(--success); padding:12px; font-family:var(--font-mono); font-size:11px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <strong style="color:var(--success);">✓ BANK WEBHOOK RECONCILED</strong>
            <span class="crm-badge won">DEAL WON</span>
          </div>
          <div>Payment: <strong>₹ 2,47,800.00</strong> received via IMPS</div>
          <div style="font-size:10px; color:#555; margin-top:2px;">Ref UTR: HDFC4291880291 (Validated)</div>
          <div style="font-size:10px; color:#1b5e20; margin-top:4px;">GST Invoice + Payment Receipt auto-dispatched on WhatsApp.</div>
        </div>
      `,
      invoiceTotal: '₹ 2,47,800.00',
      stamp: true
    }
  ];

  let currentStep = 0;

  function runSandboxStep(stepIdx) {
    currentStep = stepIdx;
    const step = sandboxSteps[currentStep];

    actionButtons.forEach(b => b.classList.remove('active-step'));
    const activeBtn = document.getElementById(step.btnId);
    if (activeBtn) activeBtn.classList.add('active-step');

    sandboxOutput.innerHTML = step.html;

    if (paidStamp) {
      if (step.stamp) {
        paidStamp.classList.add('stamped');
      } else {
        paidStamp.classList.remove('stamped');
      }
    }
  }

  actionButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      runSandboxStep(idx);
    });
  });

  setInterval(() => {
    const nextStep = (currentStep + 1) % sandboxSteps.length;
    runSandboxStep(nextStep);
  }, 2800);

  runSandboxStep(0);
}

/* ==========================================================================
   13. SECTION 10 — REAL MAHARASHTRA & VIDARBHA MAP INTERACTION
   ========================================================================== */
const vidarbhaHubDetails = {
  Wardha: 'Design & Founder Engineering Headquarters · Centralized system architecture and client automation command center.',
  Nagpur: 'Commercial & Logistics Epicenter · Heavy industrial trading, multi-modal connectivity, and rapid business dispatch.',
  Yavatmal: 'Core Industrial & Agricultural SME Corridor · High-volume manufacturing, raw materials, and regional enterprise network.'
};

function initVidarbhaMap() {
  const mapNodes = document.querySelectorAll('.map-location-dot');
  const cityLabel = document.getElementById('map-city-info');

  mapNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const city = node.getAttribute('data-city');
      const desc = vidarbhaHubDetails[city] || node.getAttribute('data-desc');
      if (cityLabel) {
        cityLabel.innerHTML = `<strong>${city.toUpperCase()} HUB</strong>: ${desc}`;
      }
    });
  });
}

/* ==========================================================================
   14. SECTION 11 — DEPLOYMENT INTAKE FORM
   ========================================================================== */
function initDeploymentForm() {
  const form = document.getElementById('commission-deployment-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const company = form.querySelector('[name="company"]')?.value || 'Your Organization';
      alert(`[COMMISSION INTAKE RECORDED]\n\nAntromat Operating System blueprint queued for: ${company}.\nOur engineering team in Wardha / Nagpur / Yavatmal will reach out within 2 hours.`);
      form.reset();
    });
  }
}
