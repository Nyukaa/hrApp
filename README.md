# 🌟 HR Manager – React + Vite

A **Junior-friendly HR management application** built with **React + Vite**.  
The project demonstrates **core React concepts**, clean component structure, API communication, and modern UI practices using **Material UI**.
Notes: tenure is derived from startDate, reminders for probation review and 5-year anniversaries are computed client-side

🌐 **Live demo (Render):**  
👉 https://hrapp-ymdw.onrender.com/

💻 **GitHub Repository:**  
👉 https://github.com/Nyukaa/hrApp

---

## 👩‍💻 Author

**Nyukaa**  
GitHub: https://github.com/Nyukaa

---

## 🎯 Project Goals

This project was created to practice and demonstrate:

- React fundamentals (hooks, components, props)
- Working with REST APIs
- Routing and page navigation
- Form handling and validation
- Clean and readable project structure
- UI development with Material UI
- Understanding **state management evolution** (local state → Context API)

---

## 🛠 Technologies Used

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/json--server-000000?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
</p>

---

## 🧭 Architecture Overview

- Routing: React Router for list, detail, and add pages
- Data: Axios requests to json-server
- UI: Material UI (MUI) components and theming

### State Management

- **Main branch & live version**:

  - Local component state (`useState`)
  - Data fetching with Axios

- **Branch: `usecontext` (learning purpose)**:

  <img src="https://img.shields.io/badge/Context_API-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Context API" />

  - React Context API
  - `useContext + useReducer`
  - Centralized global state

---

## 🚀 Quick Start

### install dependencies

```
npm install
```

### start the mock API (json-server)

```
npm run dev:server
```

- App runs at http://localhost:5173
- Data source: src/db.json

### start the app (Vite)

```
npm run dev
```

---

## 🌍 Live Version (Render)

The production version runs with:

- Vite build
- json-server serving:
  - REST API
  - static frontend files

Script:
"server": "vite build && json-server --watch src/db.json --port 3001 --static ./dist"

## Pages & Routing

- / — Employee list
- /employee/:id — Employee details
- /add — Add new employee
- /about — About page
- /table — Table view

## 🎨 UI & Styling (Material UI)

- Common components: Button, TextField, Select, Dialog, Snackbar, DataGrid/Table
- Theming: createTheme + ThemeProvider for consistent styling and palette
- Form validation: TextField helperText + error, and controlled components

## 📄 Data Model

Employee fields:

- id, name, title, salary, phone, email, animal, startDate, location, department, skills

## 🧩 State Management

### Main branch (default)

- `useState` for local state
- Axios for API calls
- Simple and beginner-friendly architecture

### Branch: `usecontext`

> This branch exists for learning purposes.

- React Context API
- Centralized state:
  - employees
  - loading
  - error

🔎 The live version uses the **main branch without Context API**.

---

## 📚 What I Learned

- Structuring a React project
- Working with REST APIs
- Managing forms and validation
- Handling async logic with useEffect
- Using Material UI effectively
- Understanding when and why to introduce Context API

---

**Demo:** [https://hrapp-ymdw.onrender.com](https://hrapp-ymdw.onrender.com)
**GitHub Repository:** [https://github.com/Nyukaa/hrApp](https://github.com/Nyukaa/hrApp)

---

## 🤝 Contributing

This project is primarily educational, but feedback and suggestions are welcome.

---

## 📜 License

MIT
