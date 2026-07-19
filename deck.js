const INSTAGRAM_URL = "https://www.instagram.com/neoverseboy/";

function promptCard(prompt, htmlBody) {
  const esc = prompt.replace(/"/g, "&quot;");
  return `<div class="card" style="flex-direction:column; justify-content:space-between;"><p class="mono p" style="direction:rtl; text-align:right;">${htmlBody}</p><button class="mono copy-btn" data-prompt="${esc}">העתקה</button></div>`;
}

const SLIDES = [

/* 01 — Cover */
{
  label: "Cover", screen: "01",
  notes: "Welcome. Playbook 02: Social Media Managers.",
  html: `<div class="slide-inner" style="background:#F3EEE4; display:flex;"><div style="flex:1.1; padding:100px 0 90px 100px; display:flex; flex-direction:column; justify-content:space-between;"><div style="display:flex; align-items:center; gap:16px;"><div style="width:44px; height:2px; background:#E8385A;"></div><span style="font-size:24px; font-weight:700; letter-spacing:0.08em; color:#191714; text-transform:uppercase;">Playbook 02</span></div><div><div style="font-size:34px; color:#6b6459; margin-bottom:20px; direction:rtl; text-align:left; margin-left:8px;" dir="rtl">חוברת סושיאל מדיה</div><h1 style="font-size:132px; line-height:0.98; font-weight:700; color:#191714; margin:0; letter-spacing:-0.02em;">Prompts<br>for Social</h1><div style="font-size:36px; color:#3d3830; margin-top:36px; max-width:760px; font-weight:400;" dir="rtl">פרומפטים להצלחה בעולם האינסטגרם, יוטיוב, טיקטוק וניהול תוכן</div></div><div style="display:flex; align-items:baseline; gap:24px;"><span style="font-size:30px; font-weight:600; color:#191714;">Eduardo Mitelman</span><a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="mono" style="font-size:26px; color:#8a8276;">@neoverseboy</a></div></div><div style="flex:0.9; position:relative; overflow:hidden;"><img src="assets/cover-generic.jpg" alt="Social media growth" style="width:100%; height:100%; object-fit:cover; display:block;"></div></div>`
},

/* 02 — Contents */
{
  label: "Contents", screen: "02",
  notes: "4 sections: Research, Audience, Tension, Insight, Message, Hooks.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:100px; display:flex; flex-direction:column; justify-content:center;"><div style="display:flex; align-items:center; gap:16px; margin-bottom:56px;"><div style="width:44px; height:2px; background:#E8385A;"></div><span style="font-size:24px; font-weight:700; letter-spacing:0.08em; color:#191714; text-transform:uppercase;" dir="rtl">תוכן עניינים</span></div><div style="display:grid; grid-template-columns:1fr 1fr; gap:0 80px; direction:rtl;" dir="rtl">${[["01","מחקר וקהל"],["02","מתח וחסמים"],["03","תובנה"],["04","מסר והוקים"]].map(([n,t]) => `<div style="display:flex; align-items:flex-end; gap:32px; padding:32px 0; border-bottom:1px solid rgba(25,23,20,0.15); text-align:right;"><span class="mono" style="font-size:40px; color:#E8385A; font-weight:600;">${n}</span><span style="font-size:44px; font-weight:600; color:#191714;">${t}</span></div>`).join("")}</div></div>`
},

/* 03 — About */
{
  label: "About the Instructor", screen: "03",
  notes: "Eduardo Mitelman, 24 years teaching design.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; gap:100px; align-items:center;"><div style="flex:1.3;"><div style="display:flex; align-items:center; gap:16px; margin-bottom:40px;"><div style="width:44px; height:2px; background:#E8385A;"></div><span style="font-size:24px; font-weight:700; letter-spacing:0.08em; color:#F3EEE4; text-transform:uppercase;" dir="rtl">מי אני</span></div><h1 style="font-size:72px; color:#F3EEE4; font-weight:700; margin:0 0 32px; direction:rtl; text-align:right;" dir="rtl">אדוארדו מיטלמן</h1><p style="font-size:32px; color:#d8d2c6; line-height:1.5; max-width:900px; margin:0 0 28px; direction:rtl; text-align:right;" dir="rtl">עיצוב, מיתוג, AI, ניהול תוכן סושיאל ודיגיטלי. בעלים של Stratigo</p><p style="font-size:32px; color:#d8d2c6; line-height:1.5; max-width:900px; margin:0; direction:rtl; text-align:right;" dir="rtl">24 שנים בהוראה בבצלאל, אוניברסיטת חיפה, ואוניברסיטת אריאל. 14 פרסי עיצוב בינלאומיים</p></div><div style="flex:0.6; display:flex; flex-direction:column; align-items:center; gap:28px;"><div style="background:#F3EEE4; padding:28px; border-radius:4px;"><img src="assets/qr-code.png" alt="Instagram QR" style="width:280px; height:280px; display:block; image-rendering:pixelated;"></div><a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="mono" style="font-size:26px; color:#F3EEE4;">@neoverseboy</a></div></div>`
},

/* 04 — Platforms */
{
  label: "Platforms", screen: "04",
  notes: "5 platforms to master.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:100px; display:flex; flex-direction:column; justify-content:center;"><div style="display:flex; align-items:center; gap:16px; margin-bottom:43px;"><div style="width:44px; height:2px; background:#E8385A;"></div><span style="font-size:24px; font-weight:700; letter-spacing:0.08em; color:#191714;" dir="rtl">פלטפורמות</span></div><div style="display:flex; flex-wrap:wrap; gap:24px; max-width:1500px;">${["Instagram","YouTube","TikTok","LinkedIn","Threads"].map(t => `<div style="background:#191714; color:#F3EEE4; font-size:34px; font-weight:600; padding:24px 44px; border-radius:100px;">${t}</div>`).join("")}</div></div>`
},

/* 05 — Process */
{
  label: "מחקר ל-Hook", screen: "05",
  notes: "The workflow: Research → Audience → Tension → Insight → Message → Hooks.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:100px; display:flex; flex-direction:column; justify-content:center;"><div style="display:flex; align-items:center; gap:16px; margin-bottom:56px;"><div style="width:44px; height:2px; background:#E8385A;"></div><span style="font-size:24px; font-weight:700; letter-spacing:0.08em; color:#191714;" dir="rtl">התהליך</span></div><div style="direction:rtl; text-align:right;"><div style="display:flex; flex-wrap:wrap; gap:12px; margin-bottom:40px;">${["מחקר","קהל","מתח","תובנה","מסר","Hook"].map((s,i) => `<div style="background:#191714; color:#F3EEE4; padding:12px 20px; border-radius:100px; font-size:20px; font-weight:600;">${i+1}. ${s}</div>`).join("")}</div><p style="font-size:32px; color:#3d3830; line-height:1.6; max-width:800px;">לפני שמנסחים מסר או Hook, צריך להבין את הקהל, את המתח והתובנה. התהליך מדורג ומהנדסי.</p></div></div>`
},

/* 06 — Section 1 */
{
  label: "Section 1 — Audience", screen: "06",
  notes: "Transition to audience research.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; flex-direction:column; justify-content:center; position:relative;"><span class="mono section-num">01</span><div style="direction:rtl; text-align:right;"><div style="display:flex; align-items:center; gap:20px; margin-bottom:32px; justify-content:flex-end;"><span style="font-size:26px; font-weight:700; letter-spacing:0.1em; color:#8a8276; text-transform:uppercase;">חלק 01</span><div style="width:60px; height:3px; background:#E8385A;"></div></div><h1 style="font-size:110px; color:#F3EEE4; font-weight:700; margin:0;">קהל</h1></div></div>`
},

/* 07 — Prompt 1 */
{
  label: "Prompt 1 — קהל", screen: "07",
  notes: "Audience researcher role.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:12px;"><div><span style="font-size:24px; color:#E8385A; font-weight:600;">Prompt 1</span><h1 style="font-size:56px; color:#191714; font-weight:700; margin:8px 0 0;">חוקר קהלים אסטרטגי</h1></div></div><div style="flex:1; display:flex; flex-direction:column; gap:20px; margin-top:32px; direction:rtl; text-align:right;"><div class="card"><p class="mono p" style="direction:rtl; text-align:right;">פעל כחוקר קהלים ואסטרטג שיווק.

השתמש רק במחקר, בבריף ובמקורות שנמצאים בפרויקט.

נתח את קהל היעד האפשרי של המותג ואל תיצור עדיין מסרים, רעיונות תוכן או הוקים.

הצג:
1. קבוצות הקהל האפשריות
2. מה מאפיין כל קבוצה
3. מה היא רוצה להשיג
4. אילו בעיות היא חווה
5. אילו שאלות היא שואלת
6. מה משפיע על הבחירה שלה
7. מה גורם לה לסמוך על מותג
8. מה גורם לה להתנגד

בסוף, בחר את קהל היעד המרכזי.</p><button class="mono copy-btn" data-prompt="פעל כחוקר קהלים ואסטרטג שיווק. השתמש רק במחקר, בבריף ובמקורות שנמצאים בפרויקט. נתח את קהל היעד האפשרי של המותג ואל תיצור עדיין מסרים, רעיונות תוכן או הוקים. הצג: 1. קבוצות הקהל האפשריות 2. מה מאפיין כל קבוצה 3. מה היא רוצה להשיג 4. אילו בעיות היא חווה 5. אילו שאלות היא שואלת 6. מה משפיע על הבחירה שלה 7. מה גורם לה לסמוך על מותג 8. מה גורם לה להתנגד. בסוף, בחר את קהל היעד המרכזי." style="align-self:flex-start; margin-top:16px;">העתקה</button></div></div></div>`
},

/* 08 — Prompt 2 */
{
  label: "Prompt 2 — מצב קהל", screen: "08",
  notes: "Audience situation mapping.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:12px;"><div><span style="font-size:24px; color:#E8385A; font-weight:600;">Prompt 2</span><h1 style="font-size:56px; color:#191714; font-weight:700; margin:8px 0 0;">מיפוי מצב הקהל</h1></div></div><div style="flex:1; display:flex; flex-direction:column; gap:20px; margin-top:32px; direction:rtl; text-align:right;"><div class="card"><p class="mono p" style="direction:rtl; text-align:right;">בהתבסס על קהל היעד שנבחר, תאר את מצבו לפני המפגש עם המותג.

אל תיצור עדיין מסרים או הוקים.

הצג:
1. מה קורה בחייו כרגע
2. מה הוא מנסה להשיג
3. מה הוא כבר ניסה
4. מה לא עבד עבורו
5. מה הוא מרגיש ביחס לבעיה
6. מה הוא חושש שיקרה
7. מה יגרום לו לחפש פתרון עכשיו
8. באילו מילים הוא עשוי לתאר את המצב

בסוף: "הקהל שלנו הוא אנשים ש..., נמצאים במצב שבו..., ומחפשים..."</p><button class="mono copy-btn" data-prompt="בהתבסס על קהל היעד שנבחר, תאר את מצבו לפני המפגש עם המותג. אל תיצור עדיין מסרים או הוקים. הצג: 1. מה קורה בחייו כרגע 2. מה הוא מנסה להשיג 3. מה הוא כבר ניסה 4. מה לא עבד עבורו 5. מה הוא מרגיש ביחס לבעיה 6. מה הוא חושש שיקרה 7. מה יגרום לו לחפש פתרון עכשיו 8. באילו מילים הוא עשוי לתאר את המצב. בסוף: הקהל שלנו הוא אנשים ש..., נמצאים במצב שבו..., ומחפשים..." style="align-self:flex-start; margin-top:16px;">העתקה</button></div></div></div>`
},

/* 09 — Section 2 */
{
  label: "Section 2 — Tension", screen: "09",
  notes: "Tension and barriers.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; flex-direction:column; justify-content:center; position:relative;"><span class="mono section-num">02</span><div style="direction:rtl; text-align:right;"><div style="display:flex; align-items:center; gap:20px; margin-bottom:32px; justify-content:flex-end;"><span style="font-size:26px; font-weight:700; letter-spacing:0.1em; color:#8a8276; text-transform:uppercase;">חלק 02</span><div style="width:60px; height:3px; background:#E8385A;"></div></div><h1 style="font-size:110px; color:#F3EEE4; font-weight:700; margin:0;">מתח<br>וחסמים</h1></div></div>`
},

/* 10 — Prompt 3 */
{
  label: "Prompt 3 — מתחים", screen: "10",
  notes: "Identify central tensions.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:12px;"><div><span style="font-size:24px; color:#E8385A; font-weight:600;">Prompt 3</span><h1 style="font-size:56px; color:#191714; font-weight:700; margin:8px 0 0;">ממפה מתחים בקהל</h1></div></div><div style="flex:1; display:flex; flex-direction:column; gap:20px; margin-top:32px; direction:rtl; text-align:right;"><div class="card"><p class="mono p" style="direction:rtl; text-align:right;">בהתבסס על אפיון הקהל, זהה את המתחים המרכזיים שהוא חווה.

מתח הוא פער בין דבר שהקהל רוצה לבין חסם שמונע ממנו להשיג אותו.

אל תיצור עדיין מסרים או הוקים.

צור טבלה הכוללת:
1. מה הקהל רוצה
2. מה מפריע לו
3. מה הוא חושב על הבעיה
4. מה הוא מרגיש
5. מה הוא עושה כיום
6. מדוע הפתרונות הקיימים אינם מספקים
7. כיצד המותג יכול להיות רלוונטי

נסח לפחות 5 מתחים. בחר את 3 החזקים ביותר.</p><button class="mono copy-btn" data-prompt="בהתבסס על אפיון הקהל, זהה את המתחים המרכזיים שהוא חווה. מתח הוא פער בין דבר שהקהל רוצה לבין חסם שמונע ממנו להשיג אותו. אל תיצור עדיין מסרים או הוקים. צור טבלה הכוללת: 1. מה הקהל רוצה 2. מה מפריע לו 3. מה הוא חושב על הבעיה 4. מה הוא מרגיש 5. מה הוא עושה כיום 6. מדוע הפתרונות הקיימים אינם מספקים 7. כיצד המותג יכול להיות רלוונטי. נסח לפחות 5 מתחים. בחר את 3 החזקים ביותר." style="align-self:flex-start; margin-top:16px;">העתקה</button></div></div></div>`
},

/* 11 — Prompt 4 */
{
  label: "Prompt 4 — חסמים", screen: "11",
  notes: "Analyze barriers and beliefs.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:12px;"><div><span style="font-size:24px; color:#E8385A; font-weight:600;">Prompt 4</span><h1 style="font-size:56px; color:#191714; font-weight:700; margin:8px 0 0;">ניתוח חסמים ואמונות</h1></div></div><div style="flex:1; display:flex; flex-direction:column; gap:20px; margin-top:32px; direction:rtl; text-align:right;"><div class="card"><p class="mono p" style="direction:rtl; text-align:right;">פעל כאסטרטג התנהגות צרכנית.

בחן את שלושת המתחים שנבחרו וזהה מה באמת מעכב את הקהל.

לכל מתח הצג:
1. החסם המעשי
2. החסם הרגשי
3. האמונה הקיימת
4. החשש המרכזי
5. המחיר של אי פעולה
6. מה הקהל צריך לראות כדי לשנות את דעתו
7. איזה סוג הוכחה עשוי להפחית את החסם

אל תציע עדיין מסרים. בסוף, דרג את המתחים וחסם אחד שיהיה בסיס לתהליך המסרים.</p><button class="mono copy-btn" data-prompt="פעל כאסטרטג התנהגות צרכנית. בחן את שלושת המתחים שנבחרו וזהה מה באמת מעכב את הקהל. לכל מתח הצג: 1. החסם המעשי 2. החסם הרגשי 3. האמונה הקיימת 4. החשש המרכזי 5. המחיר של אי פעולה 6. מה הקהל צריך לראות כדי לשנות את דעתו 7. איזה סוג הוכחה עשוי להפחית את החסם. אל תציע עדיין מסרים. בסוף, דרג את המתחים." style="align-self:flex-start; margin-top:16px;">העתקה</button></div></div></div>`
},

/* 12 — Section 3 */
{
  label: "Section 3 — Insight", screen: "12",
  notes: "Strategic insight.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; flex-direction:column; justify-content:center; position:relative;"><span class="mono section-num">03</span><div style="direction:rtl; text-align:right;"><div style="display:flex; align-items:center; gap:20px; margin-bottom:32px; justify-content:flex-end;"><span style="font-size:26px; font-weight:700; letter-spacing:0.1em; color:#8a8276; text-transform:uppercase;">חלק 03</span><div style="width:60px; height:3px; background:#E8385A;"></div></div><h1 style="font-size:110px; color:#F3EEE4; font-weight:700; margin:0;">תובנה</h1></div></div>`
},

/* 13 — Prompt 5 */
{
  label: "Prompt 5 — תובנות", screen: "13",
  notes: "Distill strategic insights.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:12px;"><div><span style="font-size:24px; color:#E8385A; font-weight:600;">Prompt 5</span><h1 style="font-size:56px; color:#191714; font-weight:700; margin:8px 0 0;">זיקוק תובנות אסטרטגיות</h1></div></div><div style="flex:1; display:flex; flex-direction:column; gap:20px; margin-top:32px; direction:rtl; text-align:right;"><div class="card"><p class="mono p" style="direction:rtl; text-align:right;">בהתבסס על המחקר, אפיון הקהל והמתח שנבחר, נסח תובנות אסטרטגיות.

תובנה צריכה להסביר מדוע הקהל חושב, מרגיש או פועל כפי שהוא פועל.

לכל תובנה הצג:
1. הממצא שעליו היא מבוססת
2. מה המשמעות של הממצא
3. מה הקהל אומר
4. מה ייתכן שהוא באמת צריך
5. מה המותג יכול להבין מכך
6. איזו הנחה עדיין דורשת בדיקה

נסח 5 תובנות במשפט אחד כל אחת. אל תכתוב עדיין מסרים. בחר את התובנה החזקה ביותר.</p><button class="mono copy-btn" data-prompt="בהתבסס על המחקר, אפיון הקהל והמתח שנבחר, נסח תובנות אסטרטגיות. תובנה צריכה להסביר מדוע הקהל חושב, מרגיש או פועל כפי שהוא פועל. לכל תובנה הצג: 1. הממצא שעליו היא מבוססת 2. מה המשמעות של הממצא 3. מה הקהל אומר 4. מה ייתכן שהוא באמת צריך 5. מה המותג יכול להבין מכך 6. איזו הנחה עדיין דורשת בדיקה. נסח 5 תובנות במשפט אחד כל אחת. אל תכתוב עדיין מסרים. בחר את התובנה החזקה ביותר." style="align-self:flex-start; margin-top:16px;">העתקה</button></div></div></div>`
},

/* 14 — Prompt 6 */
{
  label: "Prompt 6 — פערים", screen: "14",
  notes: "Category gaps and opportunities.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:12px;"><div><span style="font-size:24px; color:#E8385A; font-weight:600;">Prompt 6</span><h1 style="font-size:56px; color:#191714; font-weight:700; margin:8px 0 0;">איתור פערים בקטגוריה</h1></div></div><div style="flex:1; display:flex; flex-direction:column; gap:20px; margin-top:32px; direction:rtl; text-align:right;"><div class="card"><p class="mono p" style="direction:rtl; text-align:right;">פעל כאסטרטג קטגוריה ומיצוב.

השווה בין:
- מה שהקהל צריך
- מה שהמתחרים אומרים
- מה שהמותג יכול להציע

אל תיצור עדיין רעיונות תוכן.

זהה:
1. אילו מסרים חוזרים אצל המתחרים
2. אילו קלישאות נפוצות
3. אילו צרכים אינם מקבלים מענה
4. אילו שאלות נשארות פתוחות
5. אילו טענות כולם מעלים אך אינם מוכיחים
6. היכן קיימת הזדמנות למותג

נסח 3 תובנות: "רוב המותגים מדברים על..., אבל הקהל למעשה מחפש..."</p><button class="mono copy-btn" data-prompt="פעל כאסטרטג קטגוריה ומיצוב. השווה בין: מה שהקהל צריך, מה שהמתחרים אומרים, מה שהמותג יכול להציע. אל תיצור עדיין רעיונות תוכן. זהה: 1. אילו מסרים חוזרים אצל המתחרים 2. אילו קלישאות נפוצות 3. אילו צרכים אינם מקבלים מענה 4. אילו שאלות נשארות פתוחות 5. אילו טענות כולם מעלים אך אינם מוכיחים 6. היכן קיימת הזדמנות למותג. נסח 3 תובנות קטגוריה." style="align-self:flex-start; margin-top:16px;">העתקה</button></div></div></div>`
},

/* 15 — Section 4 */
{
  label: "Section 4 — Message & Hooks", screen: "15",
  notes: "Message and hook creation.",
  html: `<div class="slide-inner" style="background:#191714; padding:100px; display:flex; flex-direction:column; justify-content:center; position:relative;"><span class="mono section-num">04</span><div style="direction:rtl; text-align:right;"><div style="display:flex; align-items:center; gap:20px; margin-bottom:32px; justify-content:flex-end;"><span style="font-size:26px; font-weight:700; letter-spacing:0.1em; color:#8a8276; text-transform:uppercase;">חלק 04</span><div style="width:60px; height:3px; background:#E8385A;"></div></div><h1 style="font-size:110px; color:#F3EEE4; font-weight:700; margin:0;">מסר<br>והוקים</h1></div></div>`
},

/* 16 — Prompt 7 */
{
  label: "Prompt 7 — מסר", screen: "16",
  notes: "Message architecture.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:12px;"><div><span style="font-size:24px; color:#E8385A; font-weight:600;">Prompt 7</span><h1 style="font-size:56px; color:#191714; font-weight:700; margin:8px 0 0;">אדריכל מסרים</h1></div></div><div style="flex:1; display:flex; flex-direction:column; gap:20px; margin-top:32px; direction:rtl; text-align:right;"><div class="card"><p class="mono p" style="direction:rtl; text-align:right;">פעל כאדריכל מסרים למותגים.

השתמש בקהל, במתח ובתובנה שאושרו.

נסח מסר מרכזי אחד שהמותג רוצה לבסס.

המסר צריך:
- לענות על מתח אמיתי
- לבטא נקודת מבט ברורה
- להיות רלוונטי לקהל
- להיות שונה מהקלישאות
- להיות אמין וניתן להוכחה
- לא להישמע כמו סלוגן פרסומי

הצע 3 גרסאות: ישירה, רגשית, סמכותית.

לכל גרסה ציין מה הקהל אמור להבין, מה מבדיל, איזו הוכחה נדרשת, מה הסיכון.</p><button class="mono copy-btn" data-prompt="פעל כאדריכל מסרים למותגים. השתמש בקהל, במתח ובתובנה שאושרו. נסח מסר מרכזי אחד שהמותג רוצה לבסס. המסר צריך: לענות על מתח אמיתי, לבטא נקודת מבט ברורה, להיות רלוונטי לקהל, להיות שונה מהקלישאות, להיות אמין וניתן להוכחה, לא להישמע כמו סלוגן פרסומי. הצע 3 גרסאות: ישירה, רגשית, סמכותית." style="align-self:flex-start; margin-top:16px;">העתקה</button></div></div></div>`
},

/* 17 — Prompt 8 */
{
  label: "Prompt 8 — מיצוב", screen: "17",
  notes: "Brand positioning.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:12px;"><div><span style="font-size:24px; color:#E8385A; font-weight:600;">Prompt 8</span><h1 style="font-size:56px; color:#191714; font-weight:700; margin:8px 0 0;">מומחה למיצוב מותג</h1></div></div><div style="flex:1; display:flex; flex-direction:column; gap:20px; margin-top:32px; direction:rtl; text-align:right;"><div class="card"><p class="mono p" style="direction:rtl; text-align:right;">פעל כמומחה למיצוב מותגים.

בהתבסס על המסר המרכזי שנבחר, נסח שורת מיצוב ברורה.

השורה צריכה להסביר:
1. למי המותג מיועד
2. מה הוא עוזר להשיג
3. מה שונה בגישה שלו
4. מדוע כדאי להאמין לו

הצע 3 גרסאות: אלגנטית, ישירה, פרימיום.

הימנע מקלישאות, הבטחות מוגזמות, ומילים כמו מהפכני או ייחודי.

המלץ על גרסה אחת והסבר כיצד היא מתחברת לתובנה ולמתח.</p><button class="mono copy-btn" data-prompt="פעל כמומחה למיצוב מותגים. בהתבסס על המסר המרכזי שנבחר, נסח שורת מיצוב ברורה. השורה צריכה להסביר: 1. למי המותג מיועד 2. מה הוא עוזר להשיג 3. מה שונה בגישה שלו 4. מדוע כדאי להאמין לו. הצע 3 גרסאות: אלגנטית, ישירה, פרימיום. הימנע מקלישאות, הבטחות מוגזמות." style="align-self:flex-start; margin-top:16px;">העתקה</button></div></div></div>`
},

/* 18 — Prompt 9 */
{
  label: "Prompt 9 — הוקים", screen: "18",
  notes: "Hook writing.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:12px;"><div><span style="font-size:24px; color:#E8385A; font-weight:600;">Prompt 9</span><h1 style="font-size:56px; color:#191714; font-weight:700; margin:8px 0 0;">כתיבת הוקים חכמים</h1></div></div><div style="flex:1; display:flex; flex-direction:column; gap:20px; margin-top:32px; direction:rtl; text-align:right;"><div class="card"><p class="mono p" style="direction:rtl; text-align:right;">פעל ככותב הוקים לסושיאל.

השתמש רק בקהל, במתח, בתובנה ובמסר שאושרו.

צור 12 הוקים:
- 3 מבוססי כאב
- 3 מבוססי תוצאה
- 3 מבוססי ניגוד
- 3 מבוססי גילוי

כל הוק חייב:
1. להתמקד בנושא אחד
2. לפתוח שאלה אחת
3. להציג הקשר מיד
4. להיות רלוונטי לקהל
5. להוביל למסר המרכזי
6. להשתמש בשפה פשוטה
7. להימנע מקליקבייט
8. להבטיח ערך שהתוכן יכול לקיים

לכל הוק ציין הזווית, השאלה, המתח, ההבטחה, סוג ההוכחה הנדרש.

דרג את 5 ההוקים החזקים ביותר.</p><button class="mono copy-btn" data-prompt="פעל ככותב הוקים לסושיאל. השתמש רק בקהל, במתח, בתובנה ובמסר שאושרו. צור 12 הוקים: 3 מבוססי כאב, 3 מבוססי תוצאה, 3 מבוססי ניגוד, 3 מבוססי גילוי. כל הוק חייב: 1. להתמקד בנושא אחד 2. לפתוח שאלה אחת 3. להציג הקשר מיד 4. להיות רלוונטי לקהל 5. להוביל למסר המרכזי 6. להשתמש בשפה פשוטה 7. להימנע מקליקבייט 8. להבטיח ערך שהתוכן יכול לקיים. לכל הוק ציין הזווית, השאלה, המתח, ההבטחה, סוג ההוכחה. דרג את 5 ההוקים החזקים." style="align-self:flex-start; margin-top:16px;">העתקה</button></div></div></div>`
},

/* 19 — Prompt 10 */
{
  label: "Prompt 10 — ביקורת", screen: "19",
  notes: "Hook review and filtering.",
  html: `<div class="slide-inner" style="background:#F3EEE4; padding:80px 100px; display:flex; flex-direction:column;"><div style="display:flex; align-items:baseline; justify-content:space-between; margin-bottom:12px;"><div><span style="font-size:24px; color:#E8385A; font-weight:600;">Prompt 10</span><h1 style="font-size:56px; color:#191714; font-weight:700; margin:8px 0 0;">ביקורת הוקים וסינון קליקבייט</h1></div></div><div style="flex:1; display:flex; flex-direction:column; gap:20px; margin-top:32px; direction:rtl; text-align:right;"><div class="card"><p class="mono p" style="direction:rtl; text-align:right;">פעל כעורך בכיר ומבקר הוקים.

בדוק כל הוק לפי הקריטריונים:
1. בהירות הנושא
2. רלוונטיות לקהל
3. דריכוז בנושא אחד
4. שאלה אחת ברורה
5. סקרנות אמיתית
6. התאמה למסר
7. אמינות ההבטחה
8. סיכון לקליקבייט

דרג כל הוק מ-1 עד 5 בכל קריטריון.

אל תשכתב מיד. תחילה הסבר מה עובד ומה לא.
לאחר מכן שפר רק את ההוקים החלשים.

שמור על המסר המקורי, שפת המותג, בהירות, סקרנות ואמינות.</p><button class="mono copy-btn" data-prompt="פעל כעורך בכיר ומבקר הוקים. בדוק כל הוק לפי הקריטריונים: 1. בהירות הנושא 2. רלוונטיות לקהל 3. דריכוז בנושא אחד 4. שאלה אחת ברורה 5. סקרנות אמיתית 6. התאמה למסר 7. אמינות ההבטחה 8. סיכון לקליקבייט. דרג כל הוק מ-1 עד 5. אל תשכתב מיד. תחילה הסבר מה עובד ומה לא. שמור על המסר המקורי, שפת המותג, בהירות." style="align-self:flex-start; margin-top:16px;">העתקה</button></div></div></div>`
}

];

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
      btn.textContent = "הועתק ✓";
      btn.classList.add("copied");
      showToast("הועתק");
      setTimeout(() => { btn.textContent = "העתקה"; btn.classList.remove("copied"); }, 1500);
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
    try { document.execCommand("copy"); cb(); } catch (e) { showToast("העתקה נכשלה"); }
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
