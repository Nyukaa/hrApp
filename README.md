# 🌟 HR Manager – React + Vite

A simple **HR management app** for listing, adding, viewing, and editing employees.  
It calculates tenure and shows reminders for probation reviews and 5-year anniversaries.

🌐 **Live demo:** [HR App](https://hrapp-ymdw.onrender.com/)  
💻 **GitHub Repository:** [github](https://github.com/Nyukaa/hrApp)

---

## 👩‍💻 Author

- [@Nyukaa](https://github.com/Nyukaa)

---

## 🛠 Technologies Used

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge" alt="Axios" />
  <img src="https://img.shields.io/badge/json-server-000000?style=for-the-badge" alt="json-server" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
</p>

---

## ✅ Features

- **Employee List** – shows all employees, tenure, and reminders
- **Single Employee Page** – view & edit (Salary, Location
  Department, Skills )
- **Add Employee** – add new employees via a form
- **Mock API** – powered by `json-server` (`src/db.json`)
- **React Router Navigation** – seamless routing between pages

---

## 🔹 API (json-server)

**Base URL (local):** [http://localhost:3001](http://localhost:3001)  
**Live Render URL:** [https://hrapp-ymdw.onrender.com](https://hrapp-ymdw.onrender.com)

**Demo:** [https://hrapp-ymdw.onrender.com](https://hrapp-ymdw.onrender.com)  
**GitHub Repository:** [https://github.com/Nyukaa/hrApp](https://github.com/Nyukaa/hrApp)

### Endpoints

- `GET /employees` – get all employees
- `GET /employees/:id` – get single employee by ID
- `POST /employees` – add a new employee
- `PUT /employees/:id` – update an employee completely
- `PATCH /employees/:id` – update employee partially
- `DELETE /employees/:id` – delete an employee

**Data file:** `src/db.json`

**Example employee fields:**

- `id`, `name`, `title`, `salary`, `phone`, `email`, `animal`, `startDate`, `location`, `department`, `skills`
