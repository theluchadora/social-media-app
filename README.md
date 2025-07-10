# 📱 Social Media App

A full-stack social media application built with **Node.js**, **Express**, **MongoDB**, and **React**.  
Users can register, login, post images, update their profiles, like posts, and interact with other users(follow and unfollow) all in a clean and modern interface.

---

## 📂 Project Structure


social-media-app/
├── backend/
│   ├── controllers/
|   ├── middleWare/
│   ├── models/
│   ├── routes/
│   ├── public/
│   │   └── images/
│   │       ├── theDefaultCover.png
│   │       ├── theDefaultProfile.png
│   │       └── (all other images ignored by .gitignore)
│   ├── .env(add ur own based on the instruction below)
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
|   ├── env
│   └── ...
└── README.md
```

---

## 🛠️ Tech Stack

- **Frontend:** React, CSS, Axios  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (with Mongoose ODM)  
- **Image Upload:** Multer  
- **Authentication:** JSON Web Tokens (JWT)  
- **Environment Variables:** dotenv (.env file)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository


git clone https://github.com/theluchadora/social-media-app.git
cd social-media-app


### 2️⃣ Install dependencies for both backend and frontend


cd backend
npm install

cd ../frontend
npm install


### 3️⃣ Create a `.env` file in the `backend` directory


touch backend/.env


And add your environment variables:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000


**⚠️ Important:**  
- Replace `your_mongodb_connection_string` and `your_jwt_secret_key` with your actual values.  
- This file is already ignored by `.gitignore` for security reasons.

---

## 🚀 Running the App

### Run backend


cd backend
node index.js


The backend runs on: `http://localhost:5000`

---

### Run frontend


cd frontend
npm start


The frontend runs on: `http://localhost:3000`

---

## 📦 Special Notes

- The `backend/public/images/` folder contains **theDefaultCover.png** and **theDefaultProfile.png** used as fallback images for users and posts.
- **All other images in `/public/images/` are ignored via `.gitignore`.**
- Ensure your `.env` file is properly configured for the backend to connect and authenticate with MongoDB and handle JWT operations.

---

## ✨ Features

- User Registration & Authentication
- User Profile with image, cover photo, and bio
- Create, edit, and delete posts with images
- Like and follow functionality
- clean UI built with React

---

