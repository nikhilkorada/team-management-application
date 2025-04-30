# 🦅 Team Eagle – Student Team Management App

A full-stack web application to manage and view student team members, including their project details, hobbies, certificates, internships, and more.

## 🚀 Features

- Add new student members with images and detailed info
- View a responsive gallery of all members
- View detailed profile pages for each member
- Backend API with MongoDB for data storage
- Clean UI using Tailwind CSS + Vite + React

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB, Multer (for file upload)
- **Database**: MongoDB Atlas or Local MongoDB

---

## 📦 Installation

### Clone the Repository

git clone https://github.com/your-username/team-eagle-app.git
cd team-eagle-app

### Navigate to frontend and install dependencies

cd frontend
npm install

### Navigate to backend and install dependencies

cd client
npm install

## ⚙️ Environment Setup

### Create .env in /server directory

PORT=5000
MONGO_URI=mongodb://localhost:27017/team_eagle_db

## 🧪 Running the App

### Start the Backend Server

cd backend
npm start

### Start the Frontend App

cd frontend
npm run dev

## 📡 API Endpoints (Backend)

| Method | Endpoint                 | Description              |
|--------|--------------------------|--------------------------|
| GET    | `/api/members`           | Get all members          |
| GET    | `/api/members/:id`       | Get member by ID         |
| POST   | `/api/members`           | Add a new member         |
