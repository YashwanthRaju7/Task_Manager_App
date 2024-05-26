import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate()

  const onLogin = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch("http://127.0.0.1:5000/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, password }),

        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('id', data.userId)
          Navigate(`/taskmanager/${data.userId}`);
        } else {
          alert(data.error);
        }
        
      } catch (error) {
        alert("An error occurred while logging in");
        console.log('Error', error);
      }
  }

  return (
    <div className="login-main-container">
      <div className="login-container">
        <form onSubmit={onLogin} className="login-form">
          <h1>Login</h1>

          <div className="input-container">
              <label htmlFor="name">Name: </label>
              <input 
                  id="name" 
                  type="name" 
                  className="input"
                  placeholder="Name" 
                  autoComplete="true" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
              />
          </div>
          <div className="input-container">
              <label htmlFor="password">Password: </label>
              <input 
                  id="password" 
                  type="password" 
                  className="input"
                  placeholder="Password" 
                  autoComplete="true"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className="login-buttons-container">
              <button type="submit">Login</button>
              <Link to={'/register'}><button>Register</button></Link>
          </div>
        </form>
        <img src="Task_Manager.jpg" alt="" />
      </div>
    </div>
  )
}

export default Login;