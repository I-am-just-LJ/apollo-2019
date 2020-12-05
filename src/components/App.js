import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
