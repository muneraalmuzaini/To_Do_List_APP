# 📝 To-Do List App (React + Flask + SQLite)

A full-stack task management app that allows users to add, update, and delete to-do items.  
Built using **React** for the frontend, **Flask** for the backend, and **SQLite** for persistent data storage.

## 🚀 Features

- ✅ Add, complete, and delete tasks
- 💾 Persistent storage using SQLite
- 🔄 Full CRUD API integration with React using Axios
- 🗂️ Clean folder structure (backend + frontend)
- 🔐 .gitignore includes todos.db and environment files

## 📂 Project Structure

```
todo-app/
├── backend/       # Flask API (with SQLite)
│   └── app.py
├── frontend/      # React frontend (src/App.js)
│   └── src/
│       └── App.js
```

## ⚙️ How to Run the Project

### 1. Backend (Flask)

```bash
cd backend
py -m venv venv
venv\Scripts\activate
pip install flask flask-cors flask-sqlalchemy
py app.py
```

➡️ App runs at: `http://127.0.0.1:5000/todos`

### 2. Frontend (React)

```bash
cd frontend
npm install
npm start
```

➡️ Opens at: `http://localhost:3000`

## 🌐 Live Demo

- 🔗 [Live React App (Netlify)](https://glistening-sable-7fd2fc.netlify.app)
- 🔗 [Flask API (Render)](https://to-do-list-app-hm0s.onrender.com/todos)

---

## ✅ Technologies Used

- React (frontend)
- Flask + SQLite (backend)
- Axios for API requests
- Hosted with Netlify & Render


---

© 2025 | Developed by Munera Al-Muzaini