# Task Manager App Repository

This repository contains a task manager application built using Node.js, Express.js, React.js, and MongoDB. Below are the instructions to set up and run the application on your system.

## Project Structure

```
project_root/
├── backend/
│   ├── models/
│   │   ├── Task.js
│   │   └── User.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── Components/
│       │   ├── AddTask/
│       │   │   ├── AddTask.css
│       │   │   └── AddTask.jsx
│       │   ├── Authentication/
│       │   │   ├── Login/
│       │   │   │   ├── Login.css
│       │   │   │   └── Login.jsx
│       │   │   └── Register/
│       │   │       ├── Register.css
│       │   │       └── Register.jsx
│       │   └── TaskManager/
│       │       ├── TaskManager.css
│       │       └── TaskManager.jsx
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── .eslintrc.cjs
│       ├── .gitignore
│       ├── index.html
│       ├── package-lock.json
│       ├── package.json
│       └── vite.config.js
└── README.md

```


## Setup Instructions

1. **Clone the Repository:**

2. **Navigate to Project Directory:**

3. **Install Dependencies:**
- Open the backend folder in an integrated terminal and run:
  ```
  npm install
  ```
- Open the frontend folder in another integrated terminal and run:
  ```
  npm install
  ```

4. **Start MongoDB:**
Ensure MongoDB is installed on your system and running. If not, install it from (https://www.mongodb.com/try/download/community) and start the MongoDB service.

## Running the Application

- **Frontend:**
- Navigate to the frontend folder and run:
 ```
 npm start
 ```
This will start the React development server. Open your browser and visit `http://localhost:3000` to view the application.

- **Backend:**
- Navigate to the backend folder and run:
 ```
 nodemon server.js
 ```
 or
 ```
 node server.js
 ```
This will start the Express.js server. The backend API will be available at `http://localhost:5000`.

### Application Features

- **Login and Register:**
- Users can register for an account or log in using existing credentials.

- **Task Management:**
- Upon logging in, users will be directed to the task management dashboard.
- The dashboard displays a list of tasks with options to edit and delete each task.
- Users can add new tasks by clicking the "Add Task" button, which navigates to the add task page.

### Important Notes

- Ensure MongoDB is installed and running on your system before running the application.
- Both frontend and backend files should be opened in integrated terminals to install dependencies separately.
- Use `npm start` to run the frontend and `nodemon server.js` or `node server.js` to run the backend.

Feel free to reach out if you encounter any issues or have any questions!
