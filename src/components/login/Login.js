import React, { useState } from 'react';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.user_id);
        console.log(res.data);
        props.history.push('');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <section>
        <h1 className>Log in</h1>
        <form onSubmit={login}>
          <h1>Username:</h1>
          <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
          />
          <h1>Password:</h1>
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
