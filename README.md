# Mern_stack_CRUD

# 📚 MERN Stack Book CRUD App

A full-stack **CRUD (Create, Read, Update, Delete)** application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This project allows users to manage books with details such as **Book Name, Title, Author, Selling Price, and Publish Date**.

---

## 🚀 Features
- Add new books with required details
- View list of books
- Update book information
- Delete a book
- RESTful API backend with MongoDB
- React frontend with Axios integration
- Error handling and validation

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Axios, TailwindCSS (optional for styling)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose ODM
- **Other Tools:** Nodemon, dotenv, CORS

---

## 📂 Project Structure
mern-book-crud/
│
├── backend/
│ ├── controller/
│ │ └── book.controller.js
│ ├── model/
│ │ └── book.model.js
│ ├── routes/
│ │ └── book.routes.js
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── BookForm.jsx
│ │ │ └── BookList.jsx
│ │ ├── pages/
│ │ │ └── Home.jsx
│ │ └── App.jsx
│ ├── public/
│ └── package.json
│
└── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/rohitKumarSingh19/mern-book-crud.git
cd mern-book-crud

2️⃣ Backend Setup
cd backend
npm install

Create a .env file inside backend/:
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/bookdb

Start backend server:
npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

📡 API Endpoints
Base URL: http://localhost:8000/api/books

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| POST   | `/`      | Create a new book   |
| GET    | `/`      | Get all books       |
| GET    | `/:id`   | Get a book by ID    |
| PUT    | `/:id`   | Update a book by ID |
| DELETE | `/:id`   | Delete a book by ID |
Example Request (POST /api/books)
{
  "BookName": "The Alchemist",
  "BookTitle": "A Fable About Following Your Dream",
  "Author": "Paulo Coelho",
  "SellingPrice": 250,
  "PublishDate": "1988-04-15"
}

