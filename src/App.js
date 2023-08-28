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
    <div className="App">
      Login form
    </div>
  );
}

export default App;
