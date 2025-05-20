# Task Management API

This is a RESTful API built using **Node.js**, **Express**, and **MongoDB** to manage users and their assigned tasks.

## 🛠️ Features

* Create, retrieve, update, and delete users
* Create, retrieve, update, and delete tasks
* Assign tasks to specific users
* Filter tasks by status or assigned user

---

## 🚀 Getting Started

### 🔧 Prerequisites

* Node.js (v14 or higher)
* MongoDB instance (local or cloud)
* npm

### 🛆 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/willeynimbus/task-management-api.git
   cd task-management-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add:

   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/taskmanager
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Server will run on `http://localhost:3000`

---

## 📘 API Documentation

### 🧑 Users

#### Create User

```http
POST /users
```

**Request Body:**

```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

**Response:**

```json
{
  "_id": "id",
  "name": "Alice",
  "email": "alice@example.com",
  "createdAt": "...",
  "updatedAt": "..."
}
```

#### Get All Users

```http
GET /users
```

#### Get User by ID

```http
GET /users/:id
```

---

### ✅ Tasks

#### Create Task

```http
POST /tasks
```

**Request Body:**

```json
{
  "title": "Complete Assignment",
  "description": "Submit the final project",
  "dueDate": "2025-06-01T00:00:00.000Z",
  "status": "Pending",
  "assignedUserId": "user_id_here"
}
```

**Response:**

```json
{
  "_id": "id",
  "title": "Complete Assignment",
  "description": "Submit the final project",
  "dueDate": "...",
  "status": "Pending",
  "assignedUserId": "user_id_here",
  "createdAt": "...",
  "updatedAt": "..."
}
```

#### Get All Tasks

```http
GET /tasks
```

Optional query parameters:

* `status=Pending`
* `assignedUserId=user_id`

#### Get Task by ID

```http
GET /tasks/:id
```

#### Update Task

```http
PUT /tasks/:id
```

**Request Body (any field optional):**

```json
{
  "title": "Updated Title",
  "status": "Completed"
}
```

#### Delete Task

```http
DELETE /tasks/:id
```

---

## 🧪 Error Handling

* `400 Bad Request` for validation errors or duplicate entries
* `404 Not Found` for missing users or tasks
* `500 Internal Server Error` for unhandled exceptions

---

## 📂 Project Structure

```
├── models/
│   ├── user.js
│   └── task.js
├── routes/
│   ├── user.js
│   └── task.js
├── middleware/
│   └── errorHandler.js
├── .env
├── server.js
└── README.md
```

---

## 📢 Contact

For questions or suggestions, feel free to reach out at \[[your-email@example.com](mailto:21it3013@gipt.ac.in)].

---

## 📄 License

This project is licensed under the MIT License.

## Result


