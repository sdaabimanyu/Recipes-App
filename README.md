# 🍽️ Recipes API

## 📌 Project Overview

This project is a RESTful API for managing recipes. It allows users to create, read, update, and delete recipes using a structured backend built with Node.js, Express.js, and MongoDB.

The application follows the MVC (Model-View-Controller) pattern to maintain clean and scalable code architecture.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman (for API testing)

---

## 📂 Project Structure

recipes-app/
│
├── models/          # Database schema
├── controllers/     # Business logic
├── routes/          # API routes
├── config/          # Database connection
├── app.js           # Main server file
└── README.md

---

## ⚙️ Setup Instructions

1. Clone the repository:
   git clone <your-repo-link>

2. Navigate to the project folder:
   cd recipes-app

3. Install dependencies:
   npm install

4. Start the server:
   npm start

5. Open in browser or Postman:
   http://localhost:3000

---

## 🌐 API Endpoints

### 1. Create Recipe

POST /recipes

### 2. Get All Recipes

GET /recipes

### 3. Get Recipe by ID

GET /recipes/:id

### 4. Update Recipe

PATCH /recipes/:id

### 5. Delete Recipe

DELETE /recipes/:id

---

## 📥 Sample Request (Create Recipe)

{
"title": "Dosa",
"ingredients": ["rice", "dal"],
"instructions": "Cook well"
}

---

## 📤 Sample Response

{
"message": "Recipe created successfully",
"data": {
"_id": "123abc",
"title": "Dosa",
"ingredients": ["rice", "dal"],
"instructions": "Cook well"
}
}

---

## ❗ Error Handling

* 400 → Bad Request (missing required fields)
* 404 → Resource not found
* 500 → Internal server error

---

## 📮 Postman Documentation

https://documenter.getpostman.com/view/33146726/2sBXqJJfp3
All API endpoints are tested and documented using Postman.
Postman collection JSON is included in the submission.

---

## 🧠 Features

* Full CRUD functionality
* MVC architecture
* MongoDB integration using Mongoose
* JSON-based API responses
* Error handling and validation

---

## 👨‍💻 Author

Abimanyu S
