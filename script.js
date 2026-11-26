
const categories = [
  {
    name: "عملکرد فنی",
    weight: 30,
    items: [
      "کنترل توپ و لمس اول مناسب",
      "دریبل موفق در موقعیت یک‌به‌یک",
      "استفاده از سرعت و شتاب",
      "دریبل در فضای محدود",
      "پاس کوتاه و ترکیبی",
      "پاس عمقی و خلاقانه",
      "شوت و تمام‌کنندگی",
      "استفاده از پای غیرتخصصی"
    ]
  },
  {
    name: "عملکرد تاکتیکی",
    weight: 25,
    items: [
      "بررسی اطراف قبل از دریافت توپ",
      "قرارگیری مناسب در زمین",
      "حرکت بدون توپ",
      "تصمیم‌گیری سریع و منطقی",
      "انتخاب درست بین پاس و دریبل",
      "حرکت به فضای پشت مدافعان",
      "مشارکت در کارهای دفاعی",
    ]
  },
  {
    name: "عملکرد ذهنی",
    weight: 30,
    items: [
      "اعتمادبه‌نفس در بازی",
      "ریسک‌پذیری به‌اندازه و به‌موقع",
      "حفظ تمرکز",
      "درگیر نشدن بیش از حد با قضاوت دیگران",
      "بازیابی ذهنی بعد از اشتباه",
      "فکر نکردن مداوم به صحنه‌های قبلی",
      "درخواست دوباره توپ بعد از اشتباه",
      "مقایسه نکردن خودم با دیگران"
    ]
  },
  {
    name: "رفتار حرفه‌ای",
    weight: 15,
    items: [
      "تمرکز در طول تمرین",
      "ارتباط و صحبت با هم‌تیمی‌ها",
      "اجرای دستورات تاکتیکی مربی",
      "تلاش و نظم در تمرین",
      "مدیریت شدت و انرژی تمرین"
    ]
  }
];

const ratingNames = [
  "اعتمادبه‌نفس",
  "شجاعت و ریسک‌پذیری",
  "تمرکز",
  "تصمیم‌گیری",
  "عملکرد فنی",
  "عملکرد تاکتیکی",
  "واکنش به اشتباه"
];

const adviceMap = {
  "کنترل توپ و لمس اول مناسب": "تمرین دریافت توپ از زوایای مختلف و کنترل در جهت حرکت را بیشتر کن.",
  "دریبل موفق در موقعیت یک‌به‌یک": "تمرین یک‌به‌یک را با مدافعانی با سبک‌های متفاوت انجام بده.",
  "استفاده از سرعت و شتاب": "روی تغییر سرعت و زمان‌بندی حرکت بدون توپ کار کن.",
  "دریبل در فضای محدود": "تمرین کنترل نزدیک توپ و تغییر جهت در فضای کوچک انجام بده.",
  "پاس کوتاه و ترکیبی": "تمرین پاس‌کاری سریع و ترکیب‌های دو نفره را بیشتر کن.",
  "پاس عمقی و خلاقانه": "قبل از دریافت توپ اطراف را بررسی کن و پاس‌های عمقی را در بازی تمرین کن.",
  "شوت و تمام‌کنندگی": "روی دقت شوت و انتخاب زمان مناسب برای ضربه تمرکز کن.",
  "استفاده از پای غیرتخصصی": "تمرین‌های ساده کنترل، پاس و شوت با پای ضعیف‌تر را به‌تدریج اضافه کن.",
  "بررسی اطراف قبل از دریافت توپ": "قبل از رسیدن توپ چند بار اطراف را بررسی کن.",
  "قرارگیری مناسب در زمین": "بازی بازیکنان هم‌پست خودت را بررسی و جای‌گیری آن‌ها را تحلیل کن.",
  "حرکت بدون توپ": "در تمرین، بعد از هر پاس برای ایجاد زاویه جدید حرکت کن.",
  "تصمیم‌گیری سریع و منطقی": "بازی در فضاهای کوچک و محدودیت تعداد لمس توپ را تمرین کن.",
  "انتخاب درست بین پاس و دریبل": "قبل از دریافت توپ گزینه‌های پاس و حرکت با توپ را بررسی کن.",
  "حرکت به فضای پشت مدافعان": "زمان‌بندی فرار پشت دفاع را با پاسورهای تیم تمرین کن.",
  "مشارکت در کارهای دفاعی": "روی برگشت سریع و حفظ فاصله مناسب با بازیکن حریف کار کن.",
  "اعتمادبه‌نفس در بازی": "برای خودت هدف‌های کوچک و قابل‌اندازه‌گیری در هر تمرین تعیین کن.",
  "ریسک‌پذیری به‌اندازه و به‌موقع": "در موقعیت‌های مناسب، تصمیم خودت را اجرا کن؛ نه اینکه همیشه دریبل را انتخاب کنی.",
  "حفظ تمرکز": "بعد از هر صحنه، توجهت را به موقعیت بعدی برگردان.",
  "درگیر نشدن بیش از حد با قضاوت دیگران": "معیار ارزیابی خودت را کیفیت تصمیم و اجرای آن قرار بده، نه واکنش دیگران.",
  "بازیابی ذهنی بعد از اشتباه": "بعد از اشتباه، یک نفس آرام بکش و روی حرکت بعدی تمرکز کن.",
  "فکر نکردن مداوم به صحنه‌های قبلی": "اشتباه را فقط به یک نکته قابل اصلاح تبدیل کن و به بازی برگرد.",
  "درخواست دوباره توپ بعد از اشتباه": "بعد از اشتباه، دوباره برای دریافت توپ در موقعیت مناسب حرکت کن.",
  "مقایسه نکردن خودم با دیگران": "عملکرد امروزت را با جلسات قبلی خودت مقایسه کن.",
  "تمرکز در طول تمرین": "برای هر بخش تمرین یک هدف مشخص انتخاب کن.",
  "ارتباط و صحبت با هم‌تیمی‌ها": "از کلمات کوتاه و واضح برای هماهنگی استفاده کن.",
  "اجرای دستورات تاکتیکی مربی": "دستورهای تاکتیکی را به چند نکته ساده تقسیم کن و در تمرین بررسی کن.",
  "تلاش و نظم در تمرین": "با تمرکز و کیفیت ثابت در تمام بخش‌های تمرین شرکت کن.",
  "مدیریت شدت و انرژی تمرین": "شدت فعالیت و استراحتت را متناسب با برنامه تمرین تنظیم کن."
};

const checklistEl = document.getElementById("checklist");
const ratingsEl = document.getElementById("ratings");

let currentReport = null;
let statuses = {};

function todayString() {
  const date = new Date();
  const localDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  );
  return localDate.toISOString().slice(0, 10);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function renderChecklist() {
  checklistEl.innerHTML = "";

  categories.forEach((category, categoryIndex) => {
    const section = document.createElement("div");
    section.className = "category";

    section.innerHTML = `<h3>${category.name}</h3>`;

    category.items.forEach((item, itemIndex) => {
      const key = `${categoryIndex}-${itemIndex}`;
      const status = statuses[key] || "";

      const row = document.createElement("div");
      row.className = "check-item";

      row.innerHTML = `
        <p>${item}</p>
        <div class="check-buttons">
          <button class="check-btn done ${status === "done" ? "active" : ""}"
            data-key="${key}" data-status="done">انجام شد</button>
          <button class="check-btn fail ${status === "fail" ? "active" : ""}"
            data-key="${key}" data-status="fail">انجام نشد</button>
          <button class="check-btn na ${status === "na" ? "active" : ""}"
            data-key="${key}" data-status="na">قابل ارزیابی نبود</button>
        </div>
      `;

      section.appendChild(row);
    });

    checklistEl.appendChild(section);
  });

  checklistEl.querySelectorAll(".check-btn").forEach(button => {
    button.addEventListener("click", () => {
      const key = button.dataset.key;
      const value = button.dataset.status;

      statuses[key] = statuses[key] === value ? "" : value;

      renderChecklist();
      saveDraft();
    });
  });
}

function renderRatings() {
  ratingsEl.innerHTML = "";

  ratingNames.forEach((name, index) => {
    const row = document.createElement("div");
    row.className = "rating-item";

    row.innerHTML = `
      <label for="rating-${index}">${name}</label>
      <input type="range" id="rating-${index}" min="0" max="10" value="5">
      <span class="rating-value" id="rating-value-${index}">5</span>
    `;

    ratingsEl.appendChild(row);

    const input = row.querySelector("input");
    const value = row.querySelector(".rating-value");

    input.addEventListener("input", () => {
      value.textContent = input.value;
      saveDraft();
    });
  });
}

function getRatings() {
  return ratingNames.map((name, index) => ({
    name,
    value: Number(document.getElementById(`rating-${index}`).value)
  }));
}

function getChecklistScore() {
  let totalWeightedScore = 0;
  let totalWeight = 0;
  const details = [];

  categories.forEach((category, categoryIndex) => {
    let done = 0;
    let failed = 0;
    let notApplicable = 0;

    category.items.forEach((item, itemIndex) => {
      const key = `${categoryIndex}-${itemIndex}`;
      const status = statuses[key] || "fail";

      if (status === "done") done++;
      else if (status === "fail") failed++;
      else if (status === "na") notApplicable++;
    });

    const count = done + failed;
    const score = count ? (done / count) * 10 : null;

    if (score !== null) {
      totalWeightedScore += score * category.weight;
      totalWeight += category.weight;
    }

    details.push({
      name: category.name,
      score,
      done,
      failed,
      notApplicable,
      items: category.items.map((item, itemIndex) => ({
        name: item,
        status: statuses[`${categoryIndex}-${itemIndex}`] || "fail"
      }))
    });
  });

  return {
    score: totalWeight ? totalWeightedScore / totalWeight : 0,
    details
  };
}

function analyzePerformance() {
  const unanswered = [];

  categories.forEach((category, categoryIndex) => {
    category.items.forEach((item, itemIndex) => {
      if (!statuses[`${categoryIndex}-${itemIndex}`]) {
        unanswered.push(item);
      }
    });
  });

  if (unanswered.length > 0) {
    const confirmed = confirm(
      `${unanswered.length} مورد هنوز انتخاب نشده است. این موارد در محاسبه، «انجام نشد» در نظر گرفته می‌شوند. ادامه می‌دهی؟`
    );

    if (!confirmed) return;
  }

  const checklist = getChecklistScore();
  const ratings = getRatings();

  const ratingAverage =
    ratings.reduce((sum, item) => sum + item.value, 0) / ratings.length;

  const finalScore = checklist.score * 0.65 + ratingAverage * 0.35;

  const strengths = [];
  const weaknesses = [];
  const advice = [];

  checklist.details.forEach(category => {
    category.items.forEach(item => {
      if (item.status === "done") {
        strengths.push(item.name);
      } else if (item.status === "fail") {
        weaknesses.push(item.name);

        if (adviceMap[item.name]) {
          advice.push(adviceMap[item.name]);
        }
      }
    });
  });

  ratings.forEach(item => {
    if (item.value >= 8) {
      strengths.push(`${item.name} (ارزیابی شخصی: ${item.value}/10)`);
    } else if (item.value <= 4) {
      weaknesses.push(`${item.name} (ارزیابی شخصی: ${item.value}/10)`);
    }
  });

  const uniqueAdvice = [...new Set(advice)];

  const report = {
    date: document.getElementById("trainingDate").value || todayString(),
    position: document.getElementById("position").value,
    duration: document.getElementById("duration").value,
    intensity: document.getElementById("intensity").value,
    score: Number(finalScore.toFixed(1)),
    strengths,
    weaknesses,
    advice: uniqueAdvice,
    ratings,
    checklist: checklist.details,
    notes: {
      best: document.getElementById("bestMoment").value,
      mistake: document.getElementById("biggestMistake").value,
      decision: document.getElementById("betterDecision").value,
      lesson: document.getElementById("lesson").value,
      goal: document.getElementById("nextGoal").value
    }
  };

  currentReport = report;
  showReport(report);
  saveDraft();

  document.getElementById("saveBtn").disabled = false;
}

function showReport(report) {
  document.getElementById("report").classList.remove("hidden");
  document.getElementById("finalScore").textContent = report.score;

  fillList("strengths", report.strengths, "هنوز نقطه قوت مشخصی ثبت نشده است.");
  fillList("weaknesses", report.weaknesses, "موردی برای بهبود ثبت نشده است.");
  fillList("advice", report.advice, "برای این جلسه پیشنهاد خاصی ثبت نشده است.");

  const analysis = report.score >= 8
    ? "عملکرد کلی این جلسه خوب بوده است. نقاط قوتت را حفظ کن و برای پیشرفت، روی موارد قابل بهبود تمرکز کن."
    : report.score >= 6
      ? "عملکرد کلی این جلسه متوسط بوده است. چند نقطه قابل بهبود داری؛ بهتر است در جلسه بعد فقط روی یک یا دو مورد تمرکز کنی."
      : "امتیاز این جلسه پایین‌تر بوده است. این عدد فقط بازخورد همین جلسه است، نه قضاوتی درباره توانایی تو. بررسی کن چه عواملی روی عملکردت اثر گذاشته‌اند.";

  document.getElementById("personalAnalysis").textContent = analysis;

  document.getElementById("report").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function fillList(id, items, emptyText) {
  const list = document.getElementById(id);
  list.innerHTML = "";

  if (!items.length) {
    const li = document.createElement("li");
    li.textContent = emptyText;
    list.appendChild(li);
    return;
  }

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function getHistory() {
  return JSON.parse(localStorage.getItem("footballHistory") || "[]");
}

function saveReport() {
  if (!currentReport) return;

  const history = getHistory();

  history.push({
    ...currentReport,
    savedAt: new Date().toISOString()
  });

  history.sort((a, b) =>
    new Date(a.savedAt) - new Date(b.savedAt)
  );

  localStorage.setItem(
    "footballHistory",
    JSON.stringify(history.slice(-30))
  );

  document.getElementById("saveBtn").disabled = true;

  renderHistory();
  drawChart();

  alert("گزارش با موفقیت ذخیره شد.");
}

function renderHistory() {
  const historyEl = document.getElementById("history");
  const history = getHistory().slice().reverse();

  historyEl.innerHTML = "";

  if (!history.length) {
    historyEl.innerHTML = '<p class="muted">هنوز گزارشی ذخیره نشده است.</p>';
    return;
  }

  history.forEach((report, index) => {
    const item = document.createElement("div");
    item.className = "history-item";

    const info = document.createElement("div");
    const title = document.createElement("p");
    title.textContent = `${report.date} | ${report.position} | ${report.intensity}`;

    const detail = document.createElement("p");
    detail.textContent = report.duration
      ? `${report.duration} دقیقه تمرین`
      : "مدت تمرین ثبت نشده";

    info.append(title, detail);

    const score = document.createElement("strong");
    score.textContent = `${report.score}/10`;

    item.append(info, score);
    historyEl.appendChild(item);
  });
}

function clearHistory() {
  const confirmed = confirm(
    "تمام گزارش‌های ذخیره‌شده و نمودار عملکرد حذف شوند؟"
  );

  if (!confirmed) return;

  localStorage.removeItem("footballHistory");
  renderHistory();
  drawChart();
}

function saveDraft() {
  const draft = {
    statuses,
    date: document.getElementById("trainingDate").value,
    position: document.getElementById("position").value,
    duration: document.getElementById("duration").value,
    intensity: document.getElementById("intensity").value,
    ratings: getRatings(),
    notes: {
      best: document.getElementById("bestMoment").value,
      mistake: document.getElementById("biggestMistake").value,
      decision: document.getElementById("betterDecision").value,
      lesson: document.getElementById("lesson").value,
      goal: document.getElementById("nextGoal").value
    }
  };

  localStorage.setItem("footballDraft", JSON.stringify(draft));
}

function loadDraft() {
  const draft = JSON.parse(localStorage.getItem("footballDraft") || "null");

  if (!draft) return;

  statuses = draft.statuses || {};

  document.getElementById("trainingDate").value =
    draft.date || todayString();

  document.getElementById("position").value =
    draft.position || "وینگر";

  document.getElementById("duration").value =
    draft.duration || "";

  document.getElementById("intensity").value =
    draft.intensity || "متوسط";

  (draft.ratings || []).forEach((rating, index) => {
    const input = document.getElementById(`rating-${index}`);

    if (!input) return;

    input.value = rating.value;
    document.getElementById(`rating-value-${index}`).textContent =
      rating.value;
  });

  document.getElementById("bestMoment").value = draft.notes?.best || "";
  document.getElementById("biggestMistake").value = draft.notes?.mistake || "";
  document.getElementById("betterDecision").value = draft.notes?.decision || "";
  document.getElementById("lesson").value = draft.notes?.lesson || "";
  document.getElementById("nextGoal").value = draft.notes?.goal || "";

  renderChecklist();
}

function resetDraft() {
  localStorage.removeItem("footballDraft");

  statuses = {};
  currentReport = null;

  document.getElementById("trainingDate").value = todayString();
  document.getElementById("position").value = "وینگر";
  document.getElementById("duration").value = "";
  document.getElementById("intensity").value = "متوسط";

  document.getElementById("bestMoment").value = "";
  document.getElementById("biggestMistake").value = "";
  document.getElementById("betterDecision").value = "";
  document.getElementById("lesson").value = "";
  document.getElementById("nextGoal").value = "";

  renderChecklist();
  renderRatings();

  document.getElementById("report").classList.add("hidden");
  document.getElementById("saveBtn").disabled = true;
}

// شنبه، دوشنبه و چهارشنبه
const resetDays = [6, 1, 3];

function dateKey(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function getLatestResetDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  for (let i = 0; i < 7; i++) {
    const candidate = new Date(date);
    candidate.setDate(date.getDate() - i);

    if (resetDays.includes(candidate.getDay())) {
      return dateKey(candidate);
    }
  }

  return dateKey(date);
}

function getNextResetDate() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 1);

  for (let i = 0; i < 7; i++) {
    if (resetDays.includes(date.getDay())) return date;
    date.setDate(date.getDate() + 1);
  }

  return date;
}

function checkAutoReset() {
  const latestReset = getLatestResetDate();
  const previousReset = localStorage.getItem("lastResetDate");

  if (!previousReset) {
    localStorage.setItem("lastResetDate", latestReset);
  } else if (latestReset > previousReset) {
    resetDraft();
    localStorage.setItem("lastResetDate", latestReset);
  }

  const nextReset = getNextResetDate();

  document.getElementById("resetInfo").textContent =
    `ریست خودکار بعدی: ${nextReset.toLocaleDateString("fa-IR")}`;
}

// رسم نمودار بدون نیاز به کتابخانه خارجی
function drawChart() {
  const canvas = document.getElementById("performanceChart");
  const wrapper = canvas.parentElement;
  const ctx = canvas.getContext("2d");

  const width = wrapper.clientWidth;
  const height = wrapper.clientHeight;
  const dpr = window.devicePixelRatio || 1;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const history = getHistory().slice(-30);
  const countEl = document.getElementById("chartCount");
  const noteEl = document.getElementById("chartNote");

  countEl.textContent = `${history.length} جلسه`;

  if (!history.length) {
    noteEl.textContent =
      "بعد از ذخیره اولین گزارش، نمودار عملکردت اینجا نمایش داده می‌شود.";
    return;
  }

  noteEl.textContent =
    "هر نقطه نشان‌دهنده امتیاز یک جلسه ذخیره‌شده است.";

  const padding = {
    top: 25,
    right: 35,
    bottom: 45,
    left: 35
  };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const points = history.map((report, index) => ({
    x: padding.left + (
      history.length === 1
        ? chartWidth / 2
        : (index / (history.length - 1)) * chartWidth
    ),
    y: padding.top + chartHeight - (report.score / 10) * chartHeight,
    score: report.score,
    date: report.date
  }));

  ctx.font = "11px Vazirmatn, sans-serif";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  for (let score = 0; score <= 10; score += 2) {
    const y = padding.top + chartHeight - (score / 10) * chartHeight;

    ctx.beginPath();
    ctx.strokeStyle = "#292e37";
    ctx.lineWidth = 1;
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();

    ctx.fillStyle = "#9299a4";
    ctx.fillText(String(score), width - 5, y);
  }

  // خط اتصال نقاط
  if (points.length > 1) {
    ctx.beginPath();
    ctx.strokeStyle = "#ff6b35";
    ctx.lineWidth = 2.5;

    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });

    ctx.stroke();
  }

  // نقاط نمودار
  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.fillStyle = "#ff6b35";
    ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#f2f2f2";
    ctx.textAlign = "center";
    ctx.font = "10px Vazirmatn, sans-serif";
    ctx.fillText(point.score.toFixed(1), point.x, point.y - 13);

    if (
      index === 0 ||
      index === points.length - 1 ||
      index % 5 === 0
    ) {
      ctx.fillStyle = "#9299a4";
      ctx.fillText(
        new Date(point.date + "T00:00:00").toLocaleDateString("fa-IR", {
          month: "numeric",
          day: "numeric"
        }),
        point.x,
        height - 15
      );
    }
  });
}

document.getElementById("analyzeBtn").addEventListener(
  "click",
  analyzePerformance
);

document.getElementById("saveBtn").addEventListener(
  "click",
  saveReport
);

document.getElementById("clearHistoryBtn").addEventListener(
  "click",
  clearHistory
);

document.querySelectorAll("input, select, textarea").forEach(element => {
  element.addEventListener("change", saveDraft);
});

window.addEventListener("resize", drawChart);

// راه‌اندازی سایت
document.getElementById("trainingDate").value = todayString();

renderChecklist();
renderRatings();
checkAutoReset();
loadDraft();
renderHistory();
drawChart();
