# 📝 To-Do List App (React + Flask + SQLite)

A full-stack task management app that allows users to add, update, and delete to-do items.  
Built using React for the frontend, Flask for the backend, and SQLite for persistent data storage.

---

## 🌐 Live Demo

- 🔗 [Live React App (Netlify)](https://glistening-sable-7fd2fc.netlify.app)
- 🔗 [Flask API (Render)](https://to-do-list-app-hm0s.onrender.com/todos)

---

## ✅ Features

- ✅ Add, complete, and delete tasks
- 💾 Persistent storage using SQLite
- 🔄 Full CRUD API integration with React using Axios
- 🗂️ Clean folder structure (backend + frontend)
- 🔐 `.gitignore` includes `todos.db` and environment files

---

## 📂 Project Structure

```
todo-app/
├── backend/             ← Flask API with SQLite
│   ├── app.py           ← main backend logic
│   ├── requirements.txt ← required packages for Render
│   ├── Procfile         ← deployment command for gunicorn
│   └── todos.db         ← local SQLite database (ignored in Git)
├── frontend/            ← React frontend
│   ├── package.json     ← React dependencies
│   └── src/
│       ├── App.js       ← main UI logic
│       └── TaskItem.js  ← reusable component for each task
```

---

## ⚙️ How to Run the Project

### 1. Backend (Flask)

```bash
cd backend
py -m venv venv
venv\Scripts\activate
pip install flask flask-cors flask-sqlalchemy
py app.py
```

➡️ API available at: `http://127.0.0.1:5000/todos`

### 2. Frontend (React)

```bash
cd frontend
npm install
npm start
```

➡️ Opens at: `http://localhost:3000`

---

## 🚀 Deployment Overview

### Flask Backend (Render)

- Create a Web Service at [Render](https://render.com)
- Root Directory: `backend`
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn app:app`

### React Frontend (Netlify)

- Connect GitHub repo at [Netlify](https://netlify.com)
- Base Directory: `frontend`
- Build Command: `npm run build`
- Publish Directory: `build`

---

## ⚠️ Issues Faced and Resolved

| Issue | Cause | Solution |
|-------|-------|----------|
| Python not recognized | Python not properly set up | Used `py` instead of `python` |
| PowerShell blocked venv | Windows execution policy | Ran `Set-ExecutionPolicy -Scope Process RemoteSigned` |
| `pip` not recognized | venv not activated | Activated venv first |
| Netlify build failed | wrong paths | Fixed with base directory `frontend` |
| `ENOENT: package.json` in Netlify | build started at root | Corrected publish directory and base |
| `Procfile` not detected | saved as `.txt` | Renamed to plain `Procfile` |
| 502 Bad Gateway on Render | missing `gunicorn` or `debug=True` | Added `gunicorn`, removed debug |
| React not connecting to Flask after deploy | still pointing to localhost | Updated API URLs to Render |
| SQLite not initialized | no DB file on server | Used `db.create_all()` inside `app_context()` |

---

## 👩‍💻 Developed by

**Munera Al-Muzaini – 2025**
