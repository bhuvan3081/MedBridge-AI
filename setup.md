# 🚀 MedBridge AI — GitHub Launch & Deployment Guide

This guide provides step-by-step instructions on how to launch and access **MedBridge AI** directly from GitHub. Because MedBridge AI is built entirely client-side (HTML/CSS/JS), you can deploy and run it for free without any server configuration.

---

## 🌐 Option 1: Deploy with GitHub Pages (Recommended)

GitHub Pages is the easiest way to host a static website directly from a GitHub repository. It provides a public, live URL for your application.

### Step 1: Push the Code to GitHub
If you haven't already, push your code to your GitHub repository using the helper script:
```bash
bash push_to_github.sh
```
This will create a repository named `MedBridge-AI` on your GitHub account.

### Step 2: Enable GitHub Pages
1. Open your web browser and navigate to your GitHub repository:
   `https://github.com/<your-username>/MedBridge-AI`
2. Click on the **⚙️ Settings** tab at the top of the repository page.
3. Scroll down the left sidebar and click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Click the dropdown (currently `None`) and select `main`.
   - **Folder**: Leave as `/ (root)`.
5. Click **Save**.

### Step 3: Access Your Live Application
* GitHub will begin building and deploying your site. This typically takes 1–2 minutes.
* Refresh the Settings -> Pages screen. You will see a banner at the top saying:
  > **Your site is live at:** `https://<your-username>.github.io/MedBridge-AI/`
* Click the link to open and test your MedBridge AI application!

---

## ⚡ Option 2: Instant Preview via HTMLPreview (No Setup Required)

If you want to quickly preview the interface directly from the repository without enabling GitHub Pages, you can use the free **HTMLPreview** service.

1. Locate the `index.html` file in your GitHub repository:
   `https://github.com/<your-username>/MedBridge-AI/blob/main/index.html`
2. Prepend `https://htmlpreview.github.io/?` to the URL.
3. The final URL should look like this:
   `https://htmlpreview.github.io/?https://github.com/<your-username>/MedBridge-AI/blob/main/index.html`
4. Paste this link into your browser to view the live, interactive app.

---

## 💻 Option 3: Clone & Run Locally

If you or another developer wants to run the code locally from the GitHub repository:

### Step 1: Clone the Repository
Open your terminal and run:
```bash
git clone https://github.com/<your-username>/MedBridge-AI.git
cd MedBridge-AI
```

### Step 2: Launch the App
Since the application is serverless, you can launch it using any of the following methods:

* **Directly**: Double-click `index.html` to open it in your web browser.
* **Using Python (Simple HTTP Server)**:
  ```bash
  python3 -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.
* **Using Node.js**:
  ```bash
  npx serve .
  ```
  Then open `http://localhost:3000` (or the port shown in the console) in your browser.

---

## 🔑 Default Test Credentials

Once launched, you can log in to the system using the pre-seeded demo account:
* **Email:** `jane.doe@example.com`
* **Password:** `password123`
