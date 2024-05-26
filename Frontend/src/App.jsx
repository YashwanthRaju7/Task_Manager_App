import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register'
import './App.css'
import TaskManager from './Components/TaskManager/TaskManager';
import AddTask from './Components/AddTask/AddTask';

function App() {

  return (
    <Router>
      <h1 className='task-manager-heading'>Task Manager</h1>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/taskmanager/:id' element={<TaskManager />} />
        <Route path='/addtask' element={<AddTask />} />
      </Routes>
    </Router>
  )
}

export default App
