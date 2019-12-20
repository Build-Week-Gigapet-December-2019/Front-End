import React, { useState } from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

const SignUp = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("", credentials)
      .then(res => {
        props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <section>
        <h1>Sign up</h1>
        <form onSubmit={register}>
          <h1>Username:</h1>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <h1>E-mail:</h1>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <h1>Password:</h1>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Sign Up</button>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
