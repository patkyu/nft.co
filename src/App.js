import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import LogIn1 from "./LogIn1";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={SignUp1} />{" "}
        {/* Set SignUp1 as the index page */}
        <Route path="/SignUp1" component={SignUp1} />
        <Route path="/SignUp2" component={SignUp2} />{" "}
        {/* Add a new route for SignUp2 */}
        <Route path="/LogIn1" component={LogIn1} />{" "}
        {/* Add a new route for LogIn1 */}
      </Routes>
    </Router>
  );
}

export default App;
