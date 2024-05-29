import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save credentials in local storage for this example
    localStorage.setItem('user', JSON.stringify({ email, password }));
    onLogin(email, password);
    navigate('/wines');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email'
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter password'
          required
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginPage;
