import { useState } from "react";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.name}</div>
    )
  }


  return (
    <div className="form">
      <form>
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
