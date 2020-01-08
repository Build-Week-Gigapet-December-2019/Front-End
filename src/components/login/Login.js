import React, { useState } from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
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
      .post("/api/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user_id", res.data.id)
        props.setIsAuthenticated(true)
        props.history.push(`/dashboard/${res.data.id}`)
        // this.forceUpdate()
      })
      .catch(err => console.log(err))

    // localStorage.setItem("token", credentials.password);
    // props.history.push("/dashboard");

    // props.setIsAuthenticated(localStorage.getItem("token"));
  }

  return (
    <div>
      <section>
        <h1>Log in</h1>
        <form onSubmit={login}>
          <h1>Username:</h1>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <h1>Password:</h1>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log In</button>
        </form>
        <h2>Don't have an account?</h2>
        <button onClick={()=> props.history.push(`/signup`)}>Sign Up</button>
      </section>
    </div>
  );
};

export default Login;
