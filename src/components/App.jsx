import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddWord from "./AddWord";
import Quiz from "./Quiz";
import Home from "./Home";
import "./../css/app.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/words">Words</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/words">
          <AddWord />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
