# 🔬 MedBridge AI — Judges' Interactive Evaluation Guide

Thank you for reviewing **MedBridge AI**! This guide is designed to help you quickly experience and evaluate the interactive features of our application. 

MedBridge AI is a fully client-side, serverless application that runs entirely in the browser. It parses complex laboratory diagnostic reports and translates them into patient-friendly, interactive, and localized insights.

---

## 🌐 1. Interactive Live Demo URL (No Install Required)

You can access the live, fully functional application immediately without any setup, signup, or paywalls:

👉 **[Launch Live Interactive Demo](https://bhuvan3081.github.io/MedBridge-AI/)**

### 🔑 Demo Credentials
To explore the pre-seeded medical reports, historical charts, and profiles, log in with the following demo account:
* **Email:** `jane.doe@example.com`
* **Password:** `password123`

*(Note: Since the app runs client-side, all session data and profiles are persisted securely in your browser's `localStorage`.)*

---

## 💻 2. Alternative: Clone & Run Locally

If you prefer to run the codebase locally from this repository:

### Step 1: Clone the Repository
```bash
git clone https://github.com/bhuvan3081/MedBridge-AI.git
cd MedBridge-AI
```

### Step 2: Launch the Application
Since the application has no external database or server-side dependencies, you can run it instantly using any of the following methods:

* **Direct Launch**: Open the [index.html](file:///media/$USER/myhdd/Capstone_Project/index.html) file directly in any modern web browser.
* **Using Python (Simple HTTP Server)**:
  ```bash
  python3 -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.
* **Using Node.js**:
  ```bash
  npx serve .
  ```
  Then open the URL displayed in your terminal (typically `http://localhost:3000`).

---

## 🚀 3. Recommended 2-Minute Evaluation Walkthrough

To help you experience the core features of the system, we suggest following this quick walkthrough:

### 📍 Step 1: Explore the Personal Health Dashboard
* Log in using the credentials above (`jane.doe@example.com` / `password123`).
* Check out the **active health alerts**, the **daily habits checklist** (click some habits to see the score update in real-time), and the **medical history timeline**.

### 📍 Step 2: Run a Simulated OCR Report Scan
* Click **"Analyze Lab Report"** in the sidebar.
* Under the upload panel, click **"Load Preset Sample: Cardiovascular Lipid Profile"** or **"Load Preset Sample: Basic Metabolic Panel"** to simulate an OCR diagnostic scan.
* Watch the scanner run and automatically extract biomarker values (Glucose, Cholesterol, etc.) comparing them to clinical reference ranges.

### 📍 Step 3: Inspect Interactive Range Indicators
* On the results page, look at the horizontal range sliders. They visually show whether the patient's value is **Low**, **Normal**, or **High**.
* Hover over or click on any biomarker name (e.g., *LDL Cholesterol*) to see a patient-friendly medical explanation (glossary tooltip).

### 📍 Step 4: Consult the AI Health Assistant
* Click **"Ask AI Assistant"** at the bottom of the report analysis.
* Ask a question (e.g., *"How can I lower my LDL cholesterol?"*).
* See the chatbot generate a contextual care response based on the loaded lab report, complete with a medical disclaimer.

### 📍 Step 5: Test Multi-Language & RTL Support
* Use the language flags at the top right of the screen.
* Switch to **Arabic (AR)** to see full Right-to-Left (RTL) layout adjustment.
* Switch to **Spanish (ES)**, **French (FR)**, **Hindi (HI)**, **Telugu (TE)**, or **Tamil (TA)** to see complete UI and medical glossary translations.
