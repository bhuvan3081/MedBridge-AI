// Core Controller for MedBridge AI - Patient Analyzer & Health Tracker (7 Languages)

let currentLanguage = 'en';
let activeUser = null;
let activeProfileId = 'self';
let currentAnalysisReport = null;
let trendsChart = null;

// Default Mock User to pre-populate database for instant testing
const DEFAULT_MOCK_USER = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  password: "password123",
  profiles: {
    self: {
      id: "self",
      name: "Jane Doe (Self)",
      age: 34,
      gender: "Female",
      bloodType: "O+",
      reports: [], // Saved reports
      manualLogs: [
        // Historical Glucose measurements
        { date: "2026-03-10", metric: "Glucose", value: 92 },
        { date: "2026-04-15", metric: "Glucose", value: 98 },
        { date: "2026-05-20", metric: "Glucose", value: 104 },
        { date: "2026-06-15", metric: "Glucose", value: 108 }
      ],
      checkedHabits: {} // Daily checked tasks mapping: date_habitId -> boolean
    },
    spouse: {
      id: "spouse",
      name: "John Doe (Spouse)",
      age: 36,
      gender: "Male",
      bloodType: "A+",
      reports: [],
      manualLogs: [
        // Historical Total Cholesterol measurements
        { date: "2026-02-15", metric: "Total Cholesterol", value: 210 },
        { date: "2026-04-20", metric: "Total Cholesterol", value: 228 },
        { date: "2026-06-25", metric: "Total Cholesterol", value: 245 }
      ],
      checkedHabits: {}
    }
  }
};

// UI Bilingual Translation Map
const UI_TRANSLATIONS = {
  en: {
    welcome: "Hello, ",
    welcomeSub: "Welcome back to your personalized health portal.",
    savedReports: "Saved Reports",
    healthAlerts: "Health Alerts",
    planProgress: "Action Plan Progress",
    chatPlaceholder: "Type your health question...",
    disclaimer: "Disclaimer: MedBridge AI is designed strictly for informational and educational support. This system does not deliver diagnoses, treatments, or prescriptions. Always cross-reference AI recommendations and lab thresholds with a licensed physician.",
    copied: "Draft template copied to clipboard!",
    alreadySaved: "This report is already saved to your history.",
    savedSuccess: "Report saved successfully! History logs updated."
  },
  es: {
    welcome: "¡Hola, ",
    welcomeSub: "Bienvenido de nuevo a su portal de salud personalizado.",
    savedReports: "Reportes Guardados",
    healthAlerts: "Alertas de Salud",
    planProgress: "Progreso del Plan",
    chatPlaceholder: "Escriba su pregunta sobre salud...",
    disclaimer: "Descargo de responsabilidad: MedBridge AI está diseñado para soporte informativo. No ofrece diagnósticos. Valide las recomendaciones con un médico.",
    copied: "¡Plantilla copiada al portapapeles!",
    alreadySaved: "Este reporte ya está guardado en su historial.",
    savedSuccess: "Reporte guardado. Historial de mediciones actualizado."
  },
  fr: {
    welcome: "Bonjour, ",
    welcomeSub: "Bienvenue sur votre portail de santé personnalisé.",
    savedReports: "Rapports Sauvegardés",
    healthAlerts: "Alertes de Santé",
    planProgress: "Progrès du Plan d'Action",
    chatPlaceholder: "Posez votre question de santé...",
    disclaimer: "Avertissement : MedBridge AI est conçu uniquement pour le soutien éducatif. Il ne remplace pas l'avis d'un médecin.",
    copied: "Modèle copié dans le presse-papiers !",
    alreadySaved: "Ce rapport est déjà enregistré dans votre historique.",
    savedSuccess: "Rapport enregistré avec succès ! Historique mis à jour."
  },
  ar: {
    welcome: "مرحبًا، ",
    welcomeSub: "مرحبًا بك مجددًا في بوابة صحتك المخصصة.",
    savedReports: "التقارير المحفوظة",
    healthAlerts: "تنبيهات الصحة",
    planProgress: "تقدم خطة العمل",
    chatPlaceholder: "اكتب سؤالك الصحي هنا...",
    disclaimer: "تنبيه: تم تصميم MedBridge AI للدعم التعليمي فقط. هذا النظام لا يقدم تشخيصات طبية. استشر طبيبك دائمًا.",
    copied: "تم نسخ القالب للحافظة!",
    alreadySaved: "هذا التقرير محفوظ بالفعل في سجلك.",
    savedSuccess: "تم حفظ التقرير بنجاح! تم تحديث سجلات القياسات."
  },
  hi: {
    welcome: "नमस्ते, ",
    welcomeSub: "आपके व्यक्तिगत स्वास्थ्य पोर्टल पर आपका स्वागत है।",
    savedReports: "सहेजी गई रिपोर्ट",
    healthAlerts: "स्वास्थ्य चेतावनियाँ",
    planProgress: "कार्य योजना प्रगति",
    chatPlaceholder: "अपना स्वास्थ्य संबंधी प्रश्न लिखें...",
    disclaimer: "अस्वीकरण: MedBridge AI केवल सूचनात्मक और शैक्षिक सहायता के लिए है। हमेशा डॉक्टर से परामर्श लें।",
    copied: "टेम्पलेट क्लिपबोर्ड पर कॉपी किया गया!",
    alreadySaved: "यह रिपोर्ट पहले से ही आपके इतिहास में सहेजी गई है।",
    savedSuccess: "रिपोर्ट सफलतापूर्वक सहेजी गई! इतिहास लॉग अपडेट किया गया।"
  },
  te: {
    welcome: "నమస్కారం, ",
    welcomeSub: "మీ వ్యక్తిగతీకరించిన ఆరోగ్య పోర్టల్‌కు స్వాగతం.",
    savedReports: "భద్రపరిచిన నివేదికలు",
    healthAlerts: "ఆరోగ్య హెచ్చరికలు",
    planProgress: "కార్యచరణ పురోగతి",
    chatPlaceholder: "మీ ఆరోగ్య ప్రశ్నను టైప్ చేయండి...",
    disclaimer: "గమనిక: MedBridge AI కేవలం సమాచారం మరియు విద్యాపరమైన మద్దతు కోసం మాత్రమే రూపొందించబడింది. చికిత్స కోసం వైద్యుడిని సంప్రదించండి.",
    copied: "డ్రాఫ్ట్ టెంప్లేట్ కాపీ చేయబడింది!",
    alreadySaved: "ఈ నివేదిక ఇప్పటికే మీ చరిత్రలో సేవ్ చేయబడింది.",
    savedSuccess: "నివేదిక విజయవంతంగా సేవ్ చేయబడింది! ఆరోగ్య చరిత్ర నవీకరించబడింది."
  },
  ta: {
    welcome: "வணக்கம், ",
    welcomeSub: "உங்கள் தனிப்பயனாக்கப்பட்ட சுகாதார போர்ட்டலுக்கு வரவேற்கிறோம்.",
    savedReports: "சேமிக்கப்பட்ட அறிக்கைகள்",
    healthAlerts: "சுகாதார எச்சரிக்கைகள்",
    planProgress: "திட்ட முன்னேற்றம்",
    chatPlaceholder: "உங்கள் சுகாதார கேள்வியை தட்டச்சு செய்யவும்...",
    disclaimer: "பொறுப்புத்துறப்பு: MedBridge AI தகவல் மற்றும் கல்வி நோக்கங்களுக்காக மட்டுமே. எப்போதும் மருத்துவரை அணுகவும்.",
    copied: "நகலெடுக்கப்பட்டது!",
    alreadySaved: "இந்த அறிக்கை ஏற்கனவே உங்கள் வரலாற்றில் சேமிக்கப்பட்டுள்ளது.",
    savedSuccess: "அறிக்கை வெற்றிகரமாக சேமிக்கப்பட்டது! வரலாறு புதுப்பிக்கப்பட்டது."
  }
};

// ----------------------------------------------------
// 1. Core Startup & Session Initialization
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initUserDatabase();
  checkSession();
  setupLanguageToggle();
});

function initUserDatabase() {
  let users = localStorage.getItem("medbridge_users");
  if (!users) {
    localStorage.setItem("medbridge_users", JSON.stringify([DEFAULT_MOCK_USER]));
  }
}

function checkSession() {
  const session = localStorage.getItem("medbridge_active_session");
  if (session) {
    activeUser = JSON.parse(session);
    document.getElementById("auth-overlay").style.display = "none";
    
    const profileKeys = Object.keys(activeUser.profiles);
    activeProfileId = profileKeys.includes('self') ? 'self' : profileKeys[0];
    
    updateSidebarProfileWidget();
    populateProfilePicker();
    renderDashboard();
    setupChatInitialGreetings();
  } else {
    document.getElementById("auth-overlay").style.display = "flex";
  }
}

// ----------------------------------------------------
// 2. Authentication Logic
// ----------------------------------------------------
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const pass = document.getElementById("login-password").value;
  
  const users = JSON.parse(localStorage.getItem("medbridge_users") || "[]");
  const matchedUser = users.find(u => u.email === email && u.password === pass);
  
  if (matchedUser) {
    localStorage.setItem("medbridge_active_session", JSON.stringify(matchedUser));
    checkSession();
  } else {
    alert("Invalid credentials. Try using jane.doe@example.com / password123");
  }
});

document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim().toLowerCase();
  const password = document.getElementById("reg-password").value;
  const age = parseInt(document.getElementById("reg-age").value);
  const gender = document.getElementById("reg-gender").value;
  const bloodType = document.getElementById("reg-blood").value.trim() || "Unknown";

  const users = JSON.parse(localStorage.getItem("medbridge_users") || "[]");
  if (users.some(u => u.email === email)) {
    alert("Email address already registered.");
    return;
  }

  const newUser = {
    name: name,
    email: email,
    password: password,
    profiles: {
      self: {
        id: "self",
        name: `${name} (Self)`,
        age: age,
        gender: gender,
        bloodType: bloodType,
        reports: [],
        manualLogs: [],
        checkedHabits: {}
      }
    }
  };

  users.push(newUser);
  localStorage.setItem("medbridge_users", JSON.stringify(users));
  localStorage.setItem("medbridge_active_session", JSON.stringify(newUser));
  checkSession();
});

function logoutUser() {
  syncActiveUserToDb();
  localStorage.removeItem("medbridge_active_session");
  activeUser = null;
  document.getElementById("auth-overlay").style.display = "flex";
}

function syncActiveUserToDb() {
  if (!activeUser) return;
  const users = JSON.parse(localStorage.getItem("medbridge_users") || "[]");
  const index = users.findIndex(u => u.email === activeUser.email);
  if (index !== -1) {
    users[index] = activeUser;
    localStorage.setItem("medbridge_users", JSON.stringify(users));
  }
  localStorage.setItem("medbridge_active_session", JSON.stringify(activeUser));
}

// ----------------------------------------------------
// 3. UI Language & Sidebar Manager
// ----------------------------------------------------
function setupLanguageToggle() {
  // Picker dropdown binding is handled inline, but we sync it
  const picker = document.getElementById("lang-picker");
  if (picker) picker.value = currentLanguage;
}

function setLanguage(lang) {
  currentLanguage = lang;
  
  // RTL Support for Arabic
  const body = document.body;
  if (lang === 'ar') {
    body.dir = "rtl";
    body.style.textAlign = "right";
  } else {
    body.dir = "ltr";
    body.style.textAlign = "left";
  }

  // Update dropdown value to match
  const picker = document.getElementById("lang-picker");
  if (picker) picker.value = lang;

  // Translate static tags containing data attribute
  document.querySelectorAll("[data-en]").forEach(el => {
    const textVal = el.getAttribute(`data-${lang}`);
    if (textVal) el.textContent = textVal;
  });

  // Translate input placeholders
  const chatInput = document.getElementById("chat-user-input");
  if (chatInput) {
    chatInput.placeholder = UI_TRANSLATIONS[lang].chatPlaceholder;
  }

  updateWelcomeText();
  renderDashboard();
  if (currentAnalysisReport) {
    renderReportResults(currentAnalysisReport);
  }
  setupChatInitialGreetings();
}

function updateWelcomeText() {
  if (!activeUser) return;
  const greeting = UI_TRANSLATIONS[currentLanguage].welcome;
  const sub = UI_TRANSLATIONS[currentLanguage].welcomeSub;
  document.getElementById("welcome-message").textContent = `${greeting}${activeUser.name}!`;
  document.getElementById("welcome-sub").textContent = sub;
}

function updateSidebarProfileWidget() {
  if (!activeUser) return;
  document.getElementById("widget-username").textContent = activeUser.name;
  document.getElementById("widget-email").textContent = activeUser.email;
  document.getElementById("widget-avatar").textContent = activeUser.name.charAt(0);
}

function switchScreen(screenId) {
  document.querySelectorAll(".menu-item").forEach(item => {
    item.classList.remove("active");
  });
  const activeNav = document.getElementById(`nav-${screenId}`);
  if (activeNav) activeNav.classList.add("active");

  document.querySelectorAll(".app-screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(`screen-${screenId}`).classList.add("active");

  document.getElementById("main-content").scrollTop = 0;

  if (screenId === 'trends') {
    const metric = document.getElementById("chart-metric-selector").value;
    renderTrendsChart(metric);
    renderTrendsLogsList();
  } else if (screenId === 'profiles') {
    renderProfilesDatabase();
  } else if (screenId === 'dashboard') {
    renderDashboard();
  }

  document.getElementById("sidebar-menu").classList.remove("show");
}

function toggleSidebarMenu() {
  document.getElementById("sidebar-menu").classList.toggle("show");
}

// ----------------------------------------------------
// 4. Patient Profiles Database
// ----------------------------------------------------
function populateProfilePicker() {
  const picker = document.getElementById("profile-picker");
  picker.innerHTML = "";
  if (!activeUser) return;

  Object.keys(activeUser.profiles).forEach(key => {
    const prof = activeUser.profiles[key];
    const opt = document.createElement("option");
    opt.value = prof.id;
    opt.textContent = prof.name;
    if (prof.id === activeProfileId) opt.selected = true;
    picker.appendChild(opt);
  });
}

function changeProfile(profileId) {
  activeProfileId = profileId;
  syncActiveUserToDb();
  updateWelcomeText();
  renderDashboard();
}

function renderProfilesDatabase() {
  const container = document.getElementById("profiles-list-container");
  const addButton = document.getElementById("btn-add-new-profile");
  
  container.querySelectorAll(".profile-card:not(.add-profile-card)").forEach(card => card.remove());

  if (!activeUser) return;

  Object.keys(activeUser.profiles).forEach(key => {
    const prof = activeUser.profiles[key];
    const card = document.createElement("div");
    card.className = `profile-card ${prof.id === activeProfileId ? 'active' : ''}`;
    card.onclick = () => {
      changeProfile(prof.id);
      populateProfilePicker();
      renderProfilesDatabase();
    };

    const detailsLang = currentLanguage === 'en' 
      ? `Age: ${prof.age} | Blood: ${prof.bloodType}`
      : (currentLanguage === 'es' ? `Edad: ${prof.age} | Sangre: ${prof.bloodType}` : `Age: ${prof.age} | ${prof.bloodType}`);

    card.innerHTML = `
      <div class="profile-card-avatar">${prof.name.charAt(0)}</div>
      <div class="profile-card-name">${prof.name}</div>
      <div class="profile-card-details">${detailsLang}</div>
      <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.5rem;">
        ${prof.reports.length} ${UI_TRANSLATIONS[currentLanguage].savedReports}
      </div>
    `;

    container.insertBefore(card, addButton);
  });
}

function openCreateProfileModal() {
  document.getElementById("modal-add-profile").style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function handleCreateProfile(e) {
  e.preventDefault();
  const name = document.getElementById("new-profile-name").value.trim();
  const age = parseInt(document.getElementById("new-profile-age").value);
  const gender = document.getElementById("new-profile-gender").value;
  const blood = document.getElementById("new-profile-blood").value.trim() || "Unknown";

  const newId = "prof_" + Date.now();
  const newProfile = {
    id: newId,
    name: name,
    age: age,
    gender: gender,
    bloodType: blood,
    reports: [],
    manualLogs: [],
    checkedHabits: {}
  };

  activeUser.profiles[newId] = newProfile;
  syncActiveUserToDb();
  populateProfilePicker();
  renderProfilesDatabase();
  closeModal("modal-add-profile");
  
  document.getElementById("form-create-profile").reset();
  changeProfile(newId);
}

// ----------------------------------------------------
// 5. Dashboard Engine
// ----------------------------------------------------
function renderDashboard() {
  if (!activeUser) return;
  const activeProf = activeUser.profiles[activeProfileId];
  if (!activeProf) return;

  document.getElementById("dash-patient-name").textContent = activeProf.name;
  document.getElementById("dash-patient-age").textContent = activeProf.age;
  document.getElementById("dash-patient-gender").textContent = activeProf.gender;
  document.getElementById("dash-patient-blood").textContent = activeProf.bloodType;

  const reportCount = activeProf.reports.length;
  document.getElementById("dash-reports-count").textContent = reportCount;
  document.getElementById("dash-reports-footer").textContent = currentLanguage === 'en'
    ? `${reportCount} files analyzed total.`
    : (currentLanguage === 'es' ? `${reportCount} archivos analizados.` : `${reportCount} total.`);

  let alertCount = 0;
  if (reportCount > 0) {
    const lastReport = activeProf.reports[activeProf.reports.length - 1];
    lastReport.markers.forEach(m => {
      if (m.status === 'High' || m.status === 'Low') {
        alertCount++;
      }
    });
  }
  document.getElementById("dash-alerts-count").textContent = alertCount;
  document.getElementById("dash-alerts-footer").textContent = alertCount > 0
    ? `${alertCount} abnormal markers.`
    : "All metrics normal.";

  const habitsPercent = calculateHabitCompletionPercent(activeProf);
  document.getElementById("dash-goals-percent").textContent = `${habitsPercent}%`;

  const recentList = document.getElementById("dashboard-recent-list");
  recentList.innerHTML = "";

  if (reportCount === 0) {
    recentList.innerHTML = `
      <div style="text-align:center; padding: 2rem; color: var(--text-muted); font-size:0.9rem;">
        <i class="fa-solid fa-file-invoice" style="font-size:2.5rem; margin-bottom: 0.8rem; display:block;"></i>
        Select "Report Analyzer" to start.
      </div>
    `;
    return;
  }

  for (let i = activeProf.reports.length - 1; i >= 0; i--) {
    const rep = activeProf.reports[i];
    const logItem = document.createElement("div");
    logItem.className = "log-item";
    logItem.style.cursor = "pointer";
    logItem.onclick = () => {
      currentAnalysisReport = rep;
      renderReportResults(rep);
      switchScreen("results");
    };

    logItem.innerHTML = `
      <div class="log-details">
        <span class="log-title">${rep.title[currentLanguage] || rep.title.en}</span>
        <span class="log-date">${rep.date} | ${rep.type}</span>
      </div>
      <div class="log-score">${rep.score}/100</div>
    `;
    recentList.appendChild(logItem);
  }
}

function calculateHabitCompletionPercent(profile) {
  const todayStr = new Date().toISOString().split('T')[0];
  let totalTasks = 0;
  let checkedCount = 0;

  if (profile.reports.length === 0) return 0;
  
  const lastReport = profile.reports[profile.reports.length - 1];
  totalTasks = lastReport.habits.length;

  if (totalTasks === 0) return 0;

  lastReport.habits.forEach(h => {
    const key = `${todayStr}_${h.id}`;
    if (profile.checkedHabits[key] === true) {
      checkedCount++;
    }
  });

  return Math.round((checkedCount / totalTasks) * 100);
}

// ----------------------------------------------------
// 6. Report Parser & OCR Uploader Simulator
// ----------------------------------------------------
function triggerFileInput() {
  document.getElementById("file-input").click();
}

function handleFileSelected(event) {
  const file = event.target.files[0];
  if (!file) return;

  const scannerOverlay = document.getElementById("scanner-overlay-view");
  scannerOverlay.style.display = "flex";

  setTimeout(() => {
    scannerOverlay.style.display = "none";
    const keys = ['lipid', 'cmp', 'cbc', 'thyroid'];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    loadSampleReport(randomKey);
  }, 2000);
}

function loadSampleReport(reportKey) {
  const sample = SAMPLE_REPORTS[reportKey];
  if (!sample) return;

  currentAnalysisReport = JSON.parse(JSON.stringify(sample));
  currentAnalysisReport.date = new Date().toISOString().split('T')[0];

  renderReportResults(currentAnalysisReport);
  switchScreen("results");
}

function analyzeRawText() {
  const rawText = document.getElementById("raw-paste-area").value.trim();
  if (!rawText) {
    alert("Please paste text to analyze.");
    return;
  }

  const scannerOverlay = document.getElementById("scanner-overlay-view");
  scannerOverlay.style.display = "flex";

  setTimeout(() => {
    scannerOverlay.style.display = "none";
    
    const parsedMarkers = [];
    let score = 95;
    
    const parseSchemes = [
      { name: "Glucose", regex: /(glucose|sugar)\D*(\d+)/i, min: 70, max: 99, unit: "mg/dL", key: "glucose" },
      { name: "Total Cholesterol", regex: /(total\s*cholesterol|cholesterol)\D*(\d+)/i, min: 100, max: 200, unit: "mg/dL", key: "total cholesterol" },
      { name: "LDL Cholesterol", regex: /(ldl\D*cholesterol|ldl)\D*(\d+)/i, min: 50, max: 100, unit: "mg/dL", key: "ldl cholesterol" },
      { name: "TSH", regex: /(tsh|thyroid)\D*(\d+\.?\d*)/i, min: 0.45, max: 4.5, unit: "uIU/mL", key: "tsh" },
      { name: "Hemoglobin", regex: /(hemoglobin|hgb)\D*(\d+\.?\d*)/i, min: 12.0, max: 17.5, unit: "g/dL", key: "hemoglobin" }
    ];

    parseSchemes.forEach(scheme => {
      const match = rawText.match(scheme.regex);
      if (match) {
        const val = parseFloat(match[2]);
        let status = "Normal";
        if (val > scheme.max) {
          status = "High";
          score -= 10;
        } else if (val < scheme.min) {
          status = "Low";
          score -= 10;
        }

        parsedMarkers.push({
          name: scheme.name,
          key: scheme.key,
          value: val,
          unit: scheme.unit,
          min: scheme.min,
          max: scheme.max,
          status: status,
          desc: {
            en: `Parsed from pasted document text.`,
            es: `Analizado de texto pegado.`,
            fr: `Analysé à partir du texte.`,
            ar: `تم تحليله من النص الملصق.`,
            hi: `पेस्ट किए गए टेक्स्ट से पार्स किया गया।`,
            te: `పేస్ట్ చేసిన వచనం నుండి సేకరించబడింది.`,
            ta: `ஒட்டப்பட்ட உரையிலிருந்து பகுப்பாய்வு செய்யப்பட்டது.`
          }
        });
      }
    });

    if (parsedMarkers.length === 0) {
      loadSampleReport("cmp");
      alert("No specific health markers matched. Loaded general Metabolic Panel demo.");
      return;
    }

    currentAnalysisReport = {
      id: "parsed_" + Date.now(),
      type: "Custom Text Parse",
      score: Math.max(score, 50),
      status: {
        en: score < 80 ? "Action Required" : "Normal",
        es: score < 80 ? "Acción Requerida" : "Normal",
        fr: score < 80 ? "Action Requise" : "Normal",
        ar: score < 80 ? "مطلوب اتخاذ إجراء" : "عادي",
        hi: score < 80 ? "कार्रवाई आवश्यक" : "सामान्य",
        te: score < 80 ? "చర్య తీసుకోనవలసి ఉంది" : "సాధారణం",
        ta: score < 80 ? "நடவடிக்கை தேவை" : "சாதாரண அளவு"
      },
      title: {
        en: "Pasted Diagnostic Analysis",
        es: "Análisis de Datos Pegados",
        fr: "Analyse du document collé",
        ar: "تحليل التشخيص الملصق",
        hi: "पेस्ट किया गया नैदानिक विश्लेषण",
        te: "పేస్ట్ చేసిన నివేదిక విశ్లేషణ",
        ta: "ஒட்டப்பட்ட கண்டறியும் பகுப்பாய்வு"
      },
      summary: {
        en: `We parsed ${parsedMarkers.length} biomarkers. Review range indicators below.`,
        es: `Analizamos ${parsedMarkers.length} biomarcadores. Revise los límites a continuación.`,
        fr: `Nous avons analysé ${parsedMarkers.length} biomarqueurs.`,
        ar: `لقد قمنا بتحليل ${parsedMarkers.length} مؤشر حيوي.`,
        hi: `हमने ${parsedMarkers.length} बायोमार्कर का विश्लेषण किया।`,
        te: `మేము ${parsedMarkers.length} బయోమార్కర్లను విశ్లేషించాము.`,
        ta: `நாங்கள் ${parsedMarkers.length} உயிர் குறிப்பான்களை பகுப்பாய்வு செய்தோம்.`
      },
      markers: parsedMarkers,
      habits: [
        {
          id: "parsed_consult",
          text: {
            en: "Schedule a review consultation with your doctor.",
            es: "Agende una cita con su médico.",
            fr: "Prenez rendez-vous avec votre médecin.",
            ar: "حدد موعدًا لمراجعة الطبيب.",
            hi: "अपने डॉक्टर से परामर्श के लिए अपॉइंटमेंट लें।",
            te: "మీ వైద్యుడితో సంప్రదింపులను షెడ్యూల్ చేయండి.",
            ta: "உங்கள் மருத்துவருடன் ஆலோசனையைத் திட்டமிடுங்கள்."
          }
        }
      ],
      questions: [
        {
          priority: "high",
          text: {
            en: "Are these parsed metrics sufficient?",
            es: "¿Son suficientes estos valores?",
            fr: "Ces mesures sont-elles suffisantes ?",
            ar: "هل هذه القياسات كافية؟",
            hi: "क्या ये माप पर्याप्त हैं?",
            te: "ఈ విశ్లేషణ విలువలు సరిపోతాయా?",
            ta: "இந்த அளவீடுகள் போதுமானதா?"
          }
        }
      ],
      date: new Date().toISOString().split('T')[0]
    };

    renderReportResults(currentAnalysisReport);
    switchScreen("results");
    document.getElementById("raw-paste-area").value = "";
  }, 2000);
}

// ----------------------------------------------------
// 7. Results Renderer
// ----------------------------------------------------
function renderReportResults(report) {
  if (!report) return;

  document.getElementById("result-title").textContent = report.title[currentLanguage] || report.title.en;
  document.getElementById("result-date").textContent = report.date;
  document.getElementById("result-score").textContent = report.score;
  document.getElementById("result-summary").textContent = report.summary[currentLanguage] || report.summary.en;

  const badge = document.getElementById("result-status-badge");
  badge.textContent = report.status[currentLanguage] || report.status.en;
  badge.className = "analysis-status-badge";
  if (report.score >= 85) {
    badge.classList.add("normal");
  } else if (report.score >= 70) {
    badge.classList.add("borderline");
  } else {
    badge.classList.add("high-risk");
  }

  const circle = document.querySelector(".score-circle");
  circle.style.background = `conic-gradient(var(--primary) ${report.score}%, rgba(255, 255, 255, 0.05) 0)`;

  const tbody = document.getElementById("lab-table-body");
  tbody.innerHTML = "";

  report.markers.forEach(m => {
    const tr = document.createElement("tr");
    
    let statusClass = "normal";
    if (m.status === "High" || m.status === "Low") statusClass = "high-risk";
    else if (m.status === "Borderline") statusClass = "borderline";

    const glossaryText = (GLOSSARY[currentLanguage] && GLOSSARY[currentLanguage][m.key]) || "";
    const nameMarkup = glossaryText 
      ? `<span class="glossary-tooltip" data-tooltip="${glossaryText}">${m.name}</span>`
      : m.name;

    const valRange = m.max - m.min;
    let pct = 50;
    if (valRange > 0) {
      pct = ((m.value - m.min) / valRange) * 50 + 25;
    }
    pct = Math.max(Math.min(pct, 95), 5);

    tr.innerHTML = `
      <td>
        <strong>${nameMarkup}</strong>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">${m.desc[currentLanguage] || m.desc.en}</div>
      </td>
      <td><span style="font-weight:700;">${m.value}</span> ${m.unit}</td>
      <td>${m.min} - ${m.max} ${m.unit}</td>
      <td>
        <span class="analysis-status-badge ${statusClass}" style="padding: 0.2rem 0.6rem; font-size:0.75rem;">
          ${m.status}
        </span>
      </td>
      <td>
        <div class="range-slider-container">
          <div class="range-track">
            <div class="range-highlight" style="left: 25%; width: 50%;"></div>
            <div class="patient-dot ${m.status}" style="left: ${pct}%;"></div>
          </div>
          <div class="range-bounds">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  renderReportHabitsChecklist(report);

  const qBody = document.getElementById("questions-list-body");
  qBody.innerHTML = "";
  report.questions.forEach(q => {
    const qDiv = document.createElement("div");
    qDiv.style.display = "flex";
    qDiv.style.gap = "0.6rem";
    qDiv.style.alignItems = "flex-start";
    qDiv.innerHTML = `
      <span style="color: ${q.priority === 'high' ? 'var(--abnormal)' : 'var(--primary)'}; font-size: 0.9rem;">
        <i class="fa-solid fa-circle-question"></i>
      </span>
      <p style="font-size:0.85rem; line-height: 1.4; color: var(--text-primary);">${q.text[currentLanguage] || q.text.en}</p>
    `;
    qBody.appendChild(qDiv);
  });
}

function renderReportHabitsChecklist(report) {
  const container = document.getElementById("habits-list-body");
  container.innerHTML = "";
  const profile = activeUser.profiles[activeProfileId];
  const todayStr = new Date().toISOString().split('T')[0];

  report.habits.forEach(h => {
    const key = `${todayStr}_${h.id}`;
    const isChecked = profile.checkedHabits[key] === true;

    const div = document.createElement("div");
    div.className = `habit-item ${isChecked ? 'checked' : ''}`;
    div.onclick = () => {
      profile.checkedHabits[key] = !isChecked;
      syncActiveUserToDb();
      renderReportHabitsChecklist(report);
      renderDashboard();
    };

    div.innerHTML = `
      <div class="habit-checkbox">${isChecked ? '<i class="fa-solid fa-check"></i>' : ''}</div>
      <div class="habit-text">${h.text[currentLanguage] || h.text.en}</div>
    `;
    container.appendChild(div);
  });
}

function saveReportToProfile() {
  if (!currentAnalysisReport) return;
  const profile = activeUser.profiles[activeProfileId];
  
  if (profile.reports.some(r => r.id === currentAnalysisReport.id || (r.title.en === currentAnalysisReport.title.en && r.date === currentAnalysisReport.date))) {
    alert(UI_TRANSLATIONS[currentLanguage].alreadySaved);
    return;
  }

  profile.reports.push(currentAnalysisReport);
  syncActiveUserToDb();

  alert(UI_TRANSLATIONS[currentLanguage].savedSuccess);
  renderDashboard();
}

// ----------------------------------------------------
// 8. Health Trends & ChartJS Charting
// ----------------------------------------------------
function renderTrendsChart(metricName) {
  const ctx = document.getElementById("trends-chart").getContext("2d");
  const profile = activeUser.profiles[activeProfileId];

  if (trendsChart) {
    trendsChart.destroy();
  }

  const points = [];
  const lowercaseMetric = metricName.toLowerCase();

  profile.reports.forEach(r => {
    const matchedMarker = r.markers.find(m => m.name.toLowerCase() === lowercaseMetric || m.key === lowercaseMetric);
    if (matchedMarker) {
      points.push({
        date: r.date,
        value: matchedMarker.value
      });
    }
  });

  profile.manualLogs.forEach(log => {
    if (log.metric.toLowerCase() === lowercaseMetric) {
      points.push({
        date: log.date,
        value: log.value
      });
    }
  });

  points.sort((a, b) => new Date(a.date) - new Date(b.date));

  const dates = points.map(p => p.date);
  const values = points.map(p => p.value);

  if (points.length === 0) {
    document.getElementById("chart-title-text").textContent = `No Data: ${metricName}`;
  } else {
    document.getElementById("chart-title-text").textContent = `${metricName} Trend`;
  }

  const primaryGrad = ctx.createLinearGradient(0, 0, 0, 300);
  primaryGrad.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
  primaryGrad.addColorStop(1, 'rgba(99, 102, 241, 0.0)');

  trendsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates.length > 0 ? dates : ["Jan", "Feb", "Mar", "Apr"],
      datasets: [{
        label: metricName,
        data: values.length > 0 ? values : [0, 0, 0, 0],
        borderColor: '#6366f1',
        borderWidth: 3,
        pointBackgroundColor: '#8b5cf6',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
        backgroundColor: primaryGrad,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.03)' },
          ticks: { color: '#9ca3af' }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.03)' },
          ticks: { color: '#9ca3af' }
        }
      }
    }
  });
}

function renderTrendsLogsList() {
  const container = document.getElementById("trends-logs-list");
  container.innerHTML = "";
  const profile = activeUser.profiles[activeProfileId];

  const totalLogs = [];
  
  profile.reports.forEach(r => {
    totalLogs.push({
      title: r.title[currentLanguage] || r.title.en,
      date: r.date,
      type: r.type,
      score: `${r.score}/100`
    });
  });

  profile.manualLogs.forEach(log => {
    totalLogs.push({
      title: `${log.metric}: ${log.value}`,
      date: log.date,
      type: currentLanguage === 'en' ? "Manual Entry" : "Manual",
      score: "Logged"
    });
  });

  totalLogs.sort((a,b) => new Date(b.date) - new Date(a.date));

  if (totalLogs.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted); font-size:0.85rem;">No values logged.</div>`;
    return;
  }

  totalLogs.forEach(log => {
    const div = document.createElement("div");
    div.className = "log-item";
    div.innerHTML = `
      <div class="log-details">
        <span class="log-title">${log.title}</span>
        <span class="log-date">${log.date} | ${log.type}</span>
      </div>
      <div class="log-score" style="font-size:0.85rem;">${log.score}</div>
    `;
    container.appendChild(div);
  });
}

function openLogMetricModal() {
  document.getElementById("modal-log-metric").style.display = "flex";
  document.getElementById("log-metric-date").value = new Date().toISOString().split('T')[0];
}

function handleLogMetric(e) {
  e.preventDefault();
  const metric = document.getElementById("log-metric-name").value;
  const val = parseFloat(document.getElementById("log-metric-val").value);
  const date = document.getElementById("log-metric-date").value;

  const profile = activeUser.profiles[activeProfileId];
  profile.manualLogs.push({
    date: date,
    metric: metric,
    value: val
  });

  syncActiveUserToDb();
  closeModal("modal-log-metric");
  document.getElementById("form-log-metric").reset();

  renderTrendsChart(metric);
  renderTrendsLogsList();
}

// ----------------------------------------------------
// 9. Doctor Share Export Modal
// ----------------------------------------------------
function openShareModal() {
  if (!currentAnalysisReport) return;
  const doc = currentAnalysisReport;
  const profile = activeUser.profiles[activeProfileId];

  let shareText = "";

  const titleText = doc.title[currentLanguage] || doc.title.en;
  const statusText = doc.status[currentLanguage] || doc.status.en;

  // Render localized email template
  shareText = `SUBJECT: Shared Health Summary - ${profile.name} (${titleText})
DATE: ${new Date().toLocaleDateString()}

Dear Doctor / Estimado Médico / Cher Docteur,

Patient Name: ${profile.name}
Age: ${profile.age} | Gender: ${profile.gender} | Blood Type: ${profile.bloodType}

Report Analyzed: ${titleText}
Parsed Score: ${doc.score}/100 | Risk Threshold: ${statusText}

ABNORMAL OR FLAGGED VALUES:
${doc.markers.filter(m => m.status !== 'Normal').map(m => `- ${m.name}: ${m.value} ${m.unit} (Status: ${m.status}) [Normal Reference: ${m.min}-${m.max}]`).join('\n')}

NORMAL VALUES:
${doc.markers.filter(m => m.status === 'Normal').map(m => `- ${m.name}: ${m.value} ${m.unit}`).join('\n')}

QUESTIONS PREPARED FOR VISIT:
${doc.questions.map((q, idx) => `${idx + 1}. ${q.text[currentLanguage] || q.text.en}`).join('\n')}

Best regards,
${profile.name}`;

  document.getElementById("share-email-body").innerText = shareText;
  document.getElementById("modal-share-report").style.display = "flex";
}

function copyShareText() {
  const text = document.getElementById("share-email-body").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert(UI_TRANSLATIONS[currentLanguage].copied || "Copied!");
  });
}

// ----------------------------------------------------
// 10. AI Consultation Chat Agent (7 Languages)
// ----------------------------------------------------
function setupChatInitialGreetings() {
  const container = document.getElementById("chat-messages-container");
  container.innerHTML = "";

  const botMsg = document.createElement("div");
  botMsg.className = "message-bubble assistant";

  if (currentLanguage === 'en') {
    botMsg.innerHTML = `
      Hello! I'm your MedBridge Virtual Assistant. Ask me questions about your reports.
    `;
  } else if (currentLanguage === 'es') {
    botMsg.innerHTML = `
      ¡Hola! Soy su Asistente Virtual MedBridge. Pregúnteme sobre sus reportes médicos.
    `;
  } else if (currentLanguage === 'fr') {
    botMsg.innerHTML = `
      Bonjour ! Je suis votre assistant virtuel MedBridge. Posez-moi des questions sur vos bilans de santé.
    `;
  } else if (currentLanguage === 'ar') {
    botMsg.innerHTML = `
      مرحباً! أنا مساعدك الافتراضي من MedBridge. اطرح علي أي أسئلة حول تحاليلك الطبية.
    `;
  } else if (currentLanguage === 'hi') {
    botMsg.innerHTML = `
      नमस्ते! मैं आपका MedBridge वर्चुअल असिस्टेंट हूँ। अपनी रिपोर्ट के बारे में मुझसे प्रश्न पूछें।
    `;
  } else if (currentLanguage === 'te') {
    botMsg.innerHTML = `
      నమస్కారం! నేను మీ MedBridge వర్చువల్ అసిస్టెంట్‌ని. మీ ఆరోగ్య నివేదికలపై నన్ను ఏవైనా ప్రశ్నలు అడగవచ్చు.
    `;
  } else if (currentLanguage === 'ta') {
    botMsg.innerHTML = `
      வணக்கம்! நான் உங்கள் MedBridge மெய்நிகர் உதவியாளர். உங்கள் மருத்துவ அறிக்கைகளைப் பற்றி என்னிடம் கேளுங்கள்.
    `;
  }
  
  container.appendChild(botMsg);
  container.scrollTop = container.scrollHeight;
}

function handleChatKeyPress(e) {
  if (e.key === "Enter") {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById("chat-user-input");
  const msgText = input.value.trim();
  if (!msgText) return;

  const container = document.getElementById("chat-messages-container");

  const userDiv = document.createElement("div");
  userDiv.className = "message-bubble user";
  userDiv.textContent = msgText;
  container.appendChild(userDiv);

  input.value = "";
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    const replyDiv = document.createElement("div");
    replyDiv.className = "message-bubble assistant";
    replyDiv.innerHTML = getMockAssistantReply(msgText);
    container.appendChild(replyDiv);
    container.scrollTop = container.scrollHeight;
  }, 1000);
}

function getMockAssistantReply(query) {
  const q = query.toLowerCase();
  
  if (currentLanguage === 'en') {
    if (q.includes("ldl") || q.includes("cholesterol")) {
      return "<strong>LDL Cholesterol</strong>: Bad cholesterol. High levels lead to plaque in arteries. Reduce saturated fat and eat more fibers like oats.";
    }
    if (q.includes("glucose") || q.includes("sugar")) {
      return "<strong>Glucose</strong>: Blood sugar. High fasting levels suggest insulin resistance. Reduce sugars and increase exercise.";
    }
    return "Thank you for asking. I recommend reviewing your values in the <strong>Report Analyzer</strong> and discussing them with your physician.";
  } else if (currentLanguage === 'es') {
    if (q.includes("ldl") || q.includes("colesterol")) {
      return "<strong>Colesterol LDL</strong>: Colesterol malo. Valores altos aumentan el riesgo cardiovascular. Coma avena, frutas y legumbres.";
    }
    return "Gracias por preguntar. Le sugiero revisar los detalles en la pestaña <strong>Analizador</strong> y hablar con su doctor.";
  } else if (currentLanguage === 'fr') {
    if (q.includes("ldl") || q.includes("cholestérol")) {
      return "<strong>Cholestérol LDL</strong> : Le mauvais cholestérol. Réduisez les graisses saturées et augmentez les fibres solubles.";
    }
    return "Merci de votre question. Nous vous conseillons de consulter votre médecin de famille pour analyser ces valeurs.";
  } else if (currentLanguage === 'ar') {
    if (q.includes("ldl") || q.includes("كوليسترول")) {
      return "<strong>الكوليسترول الضار (LDL)</strong>: يسبب انسداد الشرايين. قلل من الدهون المشبعة وتناول الشوفان والألياف.";
    }
    return "شكرًا لسؤالك. يُنصح بمراجعة طبيبك لمناقشة هذه القيم بالتفصيل.";
  } else if (currentLanguage === 'hi') {
    if (q.includes("ldl") || q.includes("कोलेस्ट्रॉल")) {
      return "<strong>एलडीएल कोलेस्ट्रॉल</strong>: खराब कोलेस्ट्रॉल। उच्च स्तर धमनियों में रुकावट पैदा करता है। फाइबर का सेवन बढ़ाएं।";
    }
    return "पूछने के लिए धन्यवाद। हम आपके डॉक्टर से परामर्श करने की सलाह देते हैं।";
  } else if (currentLanguage === 'te') {
    if (q.includes("ldl") || q.includes("కొలెస్ట్రాల్")) {
      return "<strong>LDL కొలెస్ట్రాల్</strong>: చెడు కొలెస్ట్రాల్. ఇది ధమనులలో కొవ్వు పేరుకుపోయేలా చేస్తుంది. పీచు పదార్థాలు ఎక్కువగా తీసుకోండి.";
    }
    return "అడిగినందుకు ధన్యవాదాలు. మీ రిపోర్టును వైద్యుడితో సంప్రదించి తగిన సలహా తీసుకోండి.";
  } else if (currentLanguage === 'ta') {
    if (q.includes("ldl") || q.includes("கொலஸ்ட்ரால்")) {
      return "<strong>LDL கொலஸ்ட்ரால்</strong>: கெட்ட கொழுப்பு. தமனிகளில் அடைப்பு ஏற்படுத்தலாம். நார்ச்சத்து உணவுகளை அதிகம் உட்கொள்ளவும்.";
    }
    return "கேட்டதற்கு நன்றி. உங்கள் மருத்துவரிடம் இந்த முடிவுகளைப் பற்றி விரிவாகக் கலந்தாலோசிக்கவும்.";
  }

  return "Review your diagnostics in the Report Analyzer, and check with your physician.";
}
