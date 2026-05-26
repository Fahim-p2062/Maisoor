import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      handleLogin(username);
      navigate('/account');
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: 'url(/products/product_1.jpg)' }}>
      <div className="login-card animate-fade-up">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Sign in to continue</p>

        <form onSubmit={onSubmit}>
          <input 
            type="text" 
            className="input-pill" 
            placeholder="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          
          <div className="input-icon-wrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              className="input-pill" 
              placeholder="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="input-icon-right" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </div>
          </div>

          <button type="submit" className="btn-pill-outline">LOGIN</button>
        </form>

        <div className="login-footer">
          don't have an account?<br/>
          <a href="#">create a new account</a>
        </div>
      </div>
      
      <div className="login-branding">
        Studio Maisoor
      </div>
    </div>
  );
};

export default Login;
