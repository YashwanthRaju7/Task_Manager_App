import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';

const Register = (e) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onRegister = async(e) => {
      e.preventDefault();

      try {
        const response = await fetch('http://127.0.0.1:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, password }),
        });

        if(response.ok) {
          console.log('User Registered');
          navigate('/');
        } else {
          const data = await response.json();
          alert(data.error);
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while registering")
      }
  }

  return (
    <div className="registration-main-container">
      <div className="registration-container">
        <form onSubmit={onRegister} className="register-form">
          <h1>Register</h1>

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
            
          <div className="register-buttons-container">
            <button type="submit">Register</button>
            <Link to={'/'}><button>Login</button></Link>
          </div>         
        </form>
        <img src="Task_Manager.jpg" />
      </div>
    </div>
  )
}

export default Register;