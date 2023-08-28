import { useState } from "react";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.name}</div>
    )
  }

  const users = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    },
    {
      username: "user3",
      password: "pass3"
    },
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };
  const handleSubmit = (event) => {

    event.preventDefault();
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username</label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
              <input type="submit" />
          </div>
      </form>
    </div>
  );
}

export default App;
