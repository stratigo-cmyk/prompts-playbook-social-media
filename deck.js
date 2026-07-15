/* =====================================================================
   Prompts Playbook — Social Media Managers
   19 prompts for Instagram, YouTube, TikTok & content strategy
   ===================================================================== */

const INSTAGRAM_URL = "https://www.instagram.com/neoverseboy/";

function promptCard(prompt, htmlBody, opts = {}) {
  const span = opts.span ? `grid-column:${opts.span};` : "";
  const row = opts.row ? `grid-row:${opts.row};` : "";
  const align = opts.center ? "align-items:center;" : "flex-direction:column; justify-content:space-between;";
  const btnMargin = opts.center ? "flex-shrink:0; margin-left:24px;" : "align-self:flex-start; margin-top:16px;";
  const esc = prompt.replace(/"/g, "&quot;");
  return `<div class="card" style="${span}${row}${align}"><p class="mono p">${htmlBody}</p><button class="mono copy-btn" data-prompt="${esc}" style="${btnMargin}">Copy</button></div>`;
}

const SLIDES = [

/* 01 — Cover */
{
  label: "Cover", screen: "01",
  notes: "Welcome. This is Playbook 02: Social Media Managers. Focus on Instagram, YouTube, content strategy & growth.",
  html: `<div class="slide-inner" style="background:#F3EEE4; display:flex;"><div style="flex:1.1; padding:100px 0 90px 100px; display:flex; flex-direction:column; justify-content:space-between;"><div style="display:flex; align-items:center; gap:16px;"><div style="width:44px; height:2px; background:#E8385A;"></div><span style="font-size:24px; font-weight:700; letter-spacing:0.08em; color:#191714; text-transform:uppercase;">Playbook 02</span></div><div><div style="font-size:34px; color:#6b6459; margin-bottom:20px; direction:rtl; text-align:left; margin-left:8px;" dir="rtl">חוברת סושיאל מדיה</div><h1 style="font-size:132px; line-height:0.98; font-weight:700; color:#191714; margin:0; letter-spacing:-0.02em;">Prompts<br>for Social</h1><div style="font-size:36px; color:#3d3830; margin-top:36px; max-width:760px; font-weight:400;">פרומפטים להצלחה בעולם האינסטגרם, יוטיוב, טיקטוק וניהול תוכן</div></div><div style="display:flex; align-items:baseline; gap:24px;"><span style="font-size:30px; font-weight:600; color:#191714;">Eduardo Mitelman</span><a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="mono" style="font-size:26px; color:#8a8276;">@neoverseboy</a></div></div><div style="flex:0.9; position:relative; overflow:hidden;"><img src="assets/cover-generic.jpg" alt="Social media growth" style="width:100%; height:100%; object-fit:cover; display:block;"></div></div>`
},

/* 02 — Contents */
{
  label: "Contents", screen: "02",
  notes: "4 sections: Research, Instagram, YouTube, Growth Systems.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:100px; display:flex; flex-direction:column; justify-content:center;"><div style="display:flex; align-items:center; gap:16px; margin-bottom:56px;"><div style="width:44px; height:2px; background:#E8385A;"></div><span style="font-size:24px; font-weight:700; letter-spacing:0.08em; color:#191714; text-transform:uppercase;">תוכן עניינים</span></div><div style="display:grid; grid-template-columns:1fr 1fr; gap:0 80px;">${[["01","Research & Strategy"],["02","Instagram Growth"],["03","YouTube"],["04","Growth Systems"]].map(([n,t]) => `<div style="display:flex; align-items:flex-end; gap:32px; padding:32px 0; border-bottom:1px solid rgba(25,23,20,0.15);"><span class="mono" style="font-size:40px; color:#E8385A; font-weight:600;">${n}</span><span style="font-size:44px; font-weight:600; color:#191714;">${t}</span></div>`).join("")}</div><div style="margin-top:64px; font-size:30px; color:#6b6459; direction:rtl; text-align:right;" dir="rtl">פרומפטים להצלחה בסושיאל מדיה, בניית תוכן ויצירת קהל.</div></div>`
},

/* 03 — About */
{
  label: "About the Instructor", screen: "03",
  notes: "Eduardo Mitelman, 24 years teaching design, branding, AI.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; gap:100px; align-items:center;"><div style="flex:1.3;"><div style="display:flex; align-items:center; gap:16px; margin-bottom:40px;"><div style="width:44px; height:2px; background:#E8385A;"></div><span style="font-size:24px; font-weight:700; letter-spacing:0.08em; color:#F3EEE4; text-transform:uppercase;">מי אני</span></div><h1 style="font-size:72px; color:#F3EEE4; font-weight:700; margin:0 0 32px;">אדוארדו מיטלמן</h1><p style="font-size:32px; color:#d8d2c6; line-height:1.5; max-width:900px; margin:0 0 28px;">עיצוב, מיתוג, AI, ניהול תוכן סושיאל ודיגיטלי. בעלים של Stratigo</p><p style="font-size:32px; color:#d8d2c6; line-height:1.5; max-width:900px; margin:0;">24 שנים בהוראה בבצלאל, אוניברסיטת חיפה, ואוניברסיטת אריאל. 14 פרסי עיצוב בינלאומיים</p></div><div style="flex:0.6; display:flex; flex-direction:column; align-items:center; gap:28px;"><div style="background:#F3EEE4; padding:28px; border-radius:4px;"><img src="assets/qr-code.png" alt="Instagram QR" style="width:280px; height:280px; display:block; image-rendering:pixelated;"></div><a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="mono" style="font-size:26px; color:#F3EEE4;">@neoverseboy</a></div></div>`
},

/* 04 — Platforms */
{
  label: "Platforms to Master", screen: "04",
  notes: "Focus on these 5 platforms for social media growth.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:100px; display:flex; flex-direction:column; justify-content:center;"><div style="display:flex; align-items:center; gap:16px; margin-bottom:43px;"><div style="width:44px; height:2px; background:#E8385A;"></div><span style="font-size:24px; font-weight:700; letter-spacing:0.08em; color:#191714;">פלטפורמות</span></div><div style="display:flex; flex-wrap:wrap; gap:24px; max-width:1500px;">${["Instagram","YouTube","TikTok","LinkedIn","Threads"].map(t => `<div style="background:#191714; color:#F3EEE4; font-size:34px; font-weight:600; padding:24px 44px; border-radius:100px;">${t}</div>`).join("")}</div></div>`
},

/* 05 — Section 01 */
{
  label: "Section 01 — Research & Strategy", screen: "05",
  notes: "Start with brand research. Know your niche, audience, competitors.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; flex-direction:column; justify-content:center; position:relative;"><span class="mono section-num">01</span><div style="position:relative;"><div style="display:flex; align-items:center; gap:20px; margin-bottom:32px;"><div style="width:60px; height:3px; background:#E8385A;"></div></div><h1 style="font-size:110px; color:#F3EEE4; font-weight:700; margin:0 0 28px;">Research<br>&amp; Strategy</h1></div></div>`
},

/* 06 — Research Initial */
{
  label: "Research — Brand Analysis", screen: "06",
  notes: "Start with understanding. Know your niche, pain points, trends.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><span class="kicker">01 —&nbsp;<span style="letter-spacing:1.92px;">מחקר</span></span><h1 class="h-title">Initial brand analysis</h1><div class="prompt-grid-2">${promptCard("התפקיד שלך הוא להיות מומחה סושיאל. המשימה שלך היא לזהות צרכים, כאבים, שאלות, טרנדים והזדמנויות לבידול עבור המותג הבא: [תיאור המותג]. בצע מחקר אינטרנטי בסיסי שיגדיר את תחום הפעילות, קהל היעד, המתחרים, המוצר או השירות, המטרות והטון המותגי. אל תיצור עדיין פוסטים או רעיונות קריאייטיביים. כתוב ניתוח קצר הכולל את הצרכים המרכזיים של הקהל, הכאבים והחסמים, השאלות שהוא שואל, הטרנדים הבולטים בתחום, קלישאות שכדאי להימנע מהן והזדמנויות לבידול שהמותג יכול לנצל","<b>Role:</b> Social media strategist. <b>Task:</b> Analyze niche, identify audience needs, pain points, competitors & differentiation opportunities. <b>Output:</b> Market analysis only—no creative ideas yet.")}</div></div>`
},

/* 07 — Master Prompt */
{
  label: "Research — Master Prompt Framework", screen: "07",
  notes: "Transform simple prompts into powerful master prompts.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><h1 class="h-title">Master prompt transformation</h1><div class="prompt-grid-2">${promptCard("הפוך את הפרומפט הבא ל-Master Prompt. הרחב אותו כך שיכלול: מה התפקיד שלך, מה המשימה, מה ההקשר, מה המטרה, מה צריך לשאול לפני שמתחילים, איך לעבוד בשלבים, מה לא לעשות, איך התשובה צריכה להיראות. [הדבק פרומפט כאן]. כתוב עכשיו רק את הפרומפט החדש והמשופר.","<b>Input:</b> Simple prompt. <b>Task:</b> Expand into Master Prompt with: role, task, context, goal, questions to ask, working steps, what NOT to do, output format. <b>Output:</b> Refined, powerful prompt only.")}</div></div>`
},

/* 08 — Section 02 */
{
  label: "Section 02 — Instagram", screen: "08",
  notes: "Instagram is where most brands grow. Master these 5 prompts.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; flex-direction:column; justify-content:center; position:relative;"><span class="mono section-num">02</span><div><div style="display:flex; align-items:center; gap:20px; margin-bottom:32px;"><div style="width:60px; height:3px; background:#E8385A;"></div></div><h1 style="font-size:110px; color:#F3EEE4; font-weight:700; margin:0 0 28px;">Instagram</h1></div></div>`
},

/* 09 — Instagram Growth */
{
  label: "Instagram — Growth Strategist", screen: "09",
  notes: "Beat saturation. Create content that breaks algorithm patterns.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><span class="kicker">02 — Instagram</span><h1 class="h-title">Break saturation patterns</h1><div class="prompt-grid-2">${promptCard("Act as a senior Instagram growth strategist. Analyze my niche, identify the 7 most saturated content patterns, and create 10 post ideas that break those patterns without losing algorithm compatibility. For each idea, provide: Concept, Hook, Ideal format, Why it feels fresh, Why it would generate saves or shares. Niche: [NICHE] | Audience: [AUDIENCE] | Goal: [GOAL]","<b>Role:</b> Instagram growth strategist. <b>Task:</b> Identify saturated patterns, create 10 fresh ideas that break them. <b>For each:</b> Concept, hook, format, why fresh, why shareable. <b>Input:</b> Your niche, audience, goal.")}</div></div>`
},

/* 10 — Viral Hooks */
{
  label: "Instagram — Viral Hooks", screen: "10",
  notes: "Opening lines. 15 hooks across 5 categories. Stop the scroll.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><h1 class="h-title">Viral opening hooks</h1><div class="prompt-grid-2">${promptCard("Act as a viral copywriter specializing in Instagram. Generate 15 opening hooks for this idea, divided into: Curiosity, Contrarian, Emotional tension, Specificity, Subtle authority. Each hook must stop the scroll without using clickbait and feel intelligent, native, and strong. At the end, rank the top 5. Idea: [IDEA] | Audience: [AUDIENCE] | Tone: [TONE]","<b>15 hooks</b> across 5 categories: Curiosity, Contrarian, Emotional tension, Specificity, Subtle authority. <b>Must:</b> Stop the scroll, no clickbait, feel intelligent. <b>Rank:</b> Top 5. <b>Input:</b> Idea, audience, tone.")}</div></div>`
},

/* 11 — Faceless Content */
{
  label: "Instagram — Faceless Content", screen: "11",
  notes: "No face, no trends, no complex editing. 3 formats.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><h1 class="h-title">Faceless content strategy</h1><div class="prompt-grid-2">${promptCard("Act as a faceless content strategist for Instagram. Transform this idea into 3 versions: Carousel, Text-only reel, Silent visual post. Do not use a face, voice, trends, or complex editing. For each version, deliver: Structure, On-screen text, Visual direction, Caption, CTA. Idea: [IDEA] | Audience: [AUDIENCE] | Goal: [GOAL]","<b>3 formats:</b> Carousel, text-only reel, silent visual post. <b>No face, voice, trends,</b> or complex editing. <b>For each:</b> Structure, on-screen text, visuals, caption, CTA. <b>Input:</b> Idea, audience, goal.")}</div></div>`
},

/* 12 — Retention */
{
  label: "Instagram — Retention Optimization", screen: "12",
  notes: "Keep them watching. Maximize watch time, completion, saves, shares.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><h1 class="h-title">Maximize retention metrics</h1><div class="prompt-grid-2">${promptCard("Act as an Instagram retention specialist. Rewrite this content to maximize: Watch time, Completion rate, Saves, Shares. Make each line pull the reader into the next, eliminate weak parts, and keep a natural, sharp, non-promotional tone. Then briefly explain why the new version is better. Content: [PASTE THE TEXT] | Voice: [VOICE] | Audience: [AUDIENCE]","<b>Rewrite for:</b> Watch time, completion, saves, shares. <b>Each line</b> pulls to the next. <b>Tone:</b> Natural, sharp, non-promotional. <b>Explain:</b> Why better. <b>Input:</b> Your content, voice, audience.")}</div></div>`
},

/* 13 — Section 03 */
{
  label: "Section 03 — YouTube", screen: "13",
  notes: "YouTube is the long game. Build authority, monetize faster.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; flex-direction:column; justify-content:center; position:relative;"><span class="mono section-num">03</span><div><div style="display:flex; align-items:center; gap:20px; margin-bottom:32px;"><div style="width:60px; height:3px; background:#E8385A;"></div></div><h1 style="font-size:110px; color:#F3EEE4; font-weight:700; margin:0 0 28px;">YouTube</h1></div></div>`
},

/* 14 — YouTube Ideas */
{
  label: "YouTube — Viral Video Ideas", screen: "14",
  notes: "10 video ideas based on trends and your niche.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><span class="kicker">03 — YouTube</span><h1 class="h-title">Viral video ideas</h1><div class="prompt-grid-2">${promptCard("I want to create a YouTube channel about [INSERT NICHE]. Generate a list of 10 video ideas that could go viral, based on current trends, trending topics, and what works best in my niche. For each idea provide: Title, Hook, Why it will work, Estimated watch time, Monetization angle.","<b>10 video ideas</b> for your niche. <b>For each:</b> Title, hook, why it works, watch time, monetization angle. <b>Based on:</b> Trends, current topics, niche performance. <b>Input:</b> Your niche.")}</div></div>`
},

/* 15 — YouTube Script */
{
  label: "YouTube — Video Script Formula", screen: "15",
  notes: "Strong hook. Engaging story. Persuasive CTA.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><h1 class="h-title">Script structure & flow</h1><div class="prompt-grid-2">${promptCard("Write a YouTube video script for my idea about [INSERT TOPIC]. Make sure to include: A strong hook to grab attention, An engaging story to keep people watching, A persuasive call to action that drives engagement. Format the script with: [HOOK], [BODY], [CTA].","<b>Script for:</b> [Your topic]. <b>Must include:</b> Strong hook, engaging story, persuasive CTA. <b>Format:</b> Hook, body, CTA. <b>Keep:</b> Natural pace, conversational tone.")}</div></div>`
},

/* 16 — YouTube Automation */
{
  label: "YouTube — Faceless Channel Setup", screen: "16",
  notes: "Build a faceless channel. Automate scripts, voiceover, editing.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><h1 class="h-title">Automation & workflow</h1><div class="prompt-grid-2">${promptCard("I want to start a faceless YouTube channel in [NICHE]. Show me how to use ChatGPT to write scripts, AI voices for narration, stock footage, and editing tools to automate the workflow and earn money. Include: Tools, workflow steps, cost estimate, monetization timeline.","<b>Faceless channel</b> setup for [niche]. <b>Tools:</b> ChatGPT scripts, AI voices, stock footage, editing. <b>Workflow:</b> Step-by-step automation. <b>Include:</b> Costs, monetization timeline.")}</div></div>`
},

/* 17 — Section 04 */
{
  label: "Section 04 — Growth & Systems", screen: "17",
  notes: "Scale. Systems. Consistency. These are the growth accelerators.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; flex-direction:column; justify-content:center; position:relative;"><span class="mono section-num">04</span><div><div style="display:flex; align-items:center; gap:20px; margin-bottom:32px;"><div style="width:60px; height:3px; background:#E8385A;"></div></div><h1 style="font-size:110px; color:#F3EEE4; font-weight:700; margin:0 0 28px;">Growth<br>Systems</h1></div></div>`
},

/* 18 — Key Takeaways */
{
  label: "Key Takeaways", screen: "18",
  notes: "5 principles for social media success. Apply immediately.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:100px; display:flex; flex-direction:column; justify-content:center;"><div style="display:flex; align-items:center; gap:16px; margin-bottom:56px;"><div style="width:44px; height:2px; background:#E8385A;"></div><span style="font-size:24px; font-weight:700; letter-spacing:0.08em; color:#191714; text-transform:uppercase;">טיפים לסיום</span></div><div style="display:grid; grid-template-columns:1fr 1fr; gap:60px;">${[["01","ניתוח קודם. אל תתחילו בתוכן בלי להבין את השוק, הקהל והמתחרים"],["02","Master prompts חוסכים זמן. תרחיבו כל פרומפט מופשט לממנו מסודר"],["03","תוכן פשוט עולה על קידוד מורכב. לא צריך טרנדים או עריכה מתוחכמת"],["04","צפיפות פעמים תביעה עדיפות על איכות קטנה. עמידו בקביעות, תוצאות מובטחות"]]
        .map(([n,t]) => `<div style="display:flex; gap:28px;"><span class="mono" style="font-size:44px; color:#E8385A; font-weight:600;">${n}</span><p style="font-size:32px; color:#191714; line-height:1.5; margin:0;">${t}</p></div>`).join("")}</div></div>`
},

/* 19 — Thank You */
{
  label: "Thank You", screen: "19",
  notes: "Close. Remind them how to follow and apply.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;"><span style="font-size:26px; font-weight:700; letter-spacing:0.1em; color:#8a8276; text-transform:uppercase; margin-bottom:28px;">Thank you</span><h1 style="font-size:104px; color:#F3EEE4; font-weight:700; margin:0 0 24px;">Grow Big</h1><p style="font-size:40px; color:#d8d2c6; margin:0 0 48px; direction:rtl;" dir="rtl">גדלו בקביעות</p><div style="display:flex; align-items:center; gap:20px;"><span style="width:6px; height:6px; border-radius:50%; background:#8a8276; display:inline-block;"></span><a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="mono" style="font-size:26px; color:#E8385A;">@neoverseboy</a></div></div>`
}

];

/* Runtime — same as original */
(function () {
  const STAGE_W = 1920, STAGE_H = 1080;
  const wrap = document.getElementById("stage-wrap");
  const deck = document.getElementById("deck");
  const counter = document.getElementById("counter");
  const slideLabel = document.getElementById("slide-label");
  const progressBar = document.querySelector("#progress > span");
  const notesEl = document.getElementById("notes");
  const tocEl = document.getElementById("toc");
  const tocGrid = document.getElementById("toc-grid");
  const toast = document.getElementById("toast");

  let index = 0;
  let notesVisible = false;

  SLIDES.forEach((s, i) => {
    const el = document.createElement("section");
    el.className = "slide" + (i === 0 ? " active" : "");
    el.setAttribute("data-screen", s.screen);
    el.setAttribute("aria-label", s.label);
    el.innerHTML = s.html;
    wrap.appendChild(el);
  });
  const slideEls = Array.from(wrap.querySelectorAll(".slide"));

  SLIDES.forEach((s, i) => {
    const b = document.createElement("button");
    b.className = "toc-item";
    b.innerHTML = `<span class="n">${s.screen}</span><span class="t">${s.label}</span>`;
    b.addEventListener("click", () => { go(i); closeToc(); });
    tocGrid.appendChild(b);
  });
  const tocItems = Array.from(tocGrid.children);

  function fit() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(vw / STAGE_W, vh / STAGE_H);
    wrap.style.transform = `scale(${scale})`;
  }
  window.addEventListener("resize", fit);
  fit();

  function render() {
    slideEls.forEach((el, i) => el.classList.toggle("active", i === index));
    const s = SLIDES[index];
    counter.innerHTML = `<b>${s.screen}</b> / ${String(SLIDES.length).padStart(2, "0")}`;
    slideLabel.textContent = s.label;
    progressBar.style.width = ((index + 1) / SLIDES.length * 100) + "%";
    notesEl.innerHTML = `<b>Speaker notes · ${s.screen}</b>${s.notes}`;
    tocItems.forEach((it, i) => it.classList.toggle("current", i === index));
  }

  function go(i) {
    index = Math.max(0, Math.min(SLIDES.length - 1, i));
    render();
  }
  function next() { go(index + 1); }
  function prev() { go(index - 1); }
  function toggleNotes() { notesVisible = !notesVisible; notesEl.classList.toggle("show", notesVisible); }
  function openToc() { tocEl.classList.add("open"); }
  function closeToc() { tocEl.classList.remove("open"); }
  function toggleToc() { tocEl.classList.toggle("open"); }
  function toggleFull() {
    if (!document.fullscreenElement) {
      (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen)?.call(document.documentElement);
    } else {
      (document.exitFullscreen || document.webkitExitFullscreen)?.call(document);
    }
  }

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 1400);
  }
  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".copy-btn");
    if (!btn) return;
    const text = btn.dataset.prompt;
    const done = () => {
      btn.textContent = "Copied ✓";
      btn.classList.add("copied");
      showToast("Prompt copied");
      setTimeout(() => { btn.textContent = "Copy"; btn.classList.remove("copied"); }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  });
  function fallbackCopy(text, cb) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); cb(); } catch (e) { showToast("Copy failed"); }
    document.body.removeChild(ta);
  }

  document.getElementById("btn-next").addEventListener("click", next);
  document.getElementById("btn-prev").addEventListener("click", prev);
  document.getElementById("btn-notes").addEventListener("click", toggleNotes);
  document.getElementById("btn-toc").addEventListener("click", toggleToc);
  document.getElementById("btn-full").addEventListener("click", toggleFull);

  document.addEventListener("keydown", (e) => {
    if (tocEl.classList.contains("open") && e.key !== "Escape" && e.key.toLowerCase() !== "c") return;
    switch (e.key) {
      case "ArrowRight": case "PageDown": case " ": e.preventDefault(); next(); break;
      case "ArrowLeft": case "PageUp": prev(); break;
      case "Home": go(0); break;
      case "End": go(SLIDES.length - 1); break;
      case "f": case "F": toggleFull(); break;
      case "n": case "N": toggleNotes(); break;
      case "c": case "C": toggleToc(); break;
      case "Escape": closeToc(); break;
    }
  });

  deck.addEventListener("click", (e) => {
    if (e.target.closest("a,button,.copy-btn")) return;
    if (tocEl.classList.contains("open")) return;
    if (e.clientX > window.innerWidth * 0.4) next(); else prev();
  });

  const fromHash = parseInt((location.hash || "").replace("#", ""), 10);
  if (fromHash >= 1 && fromHash <= SLIDES.length) index = fromHash - 1;

  render();
})();
