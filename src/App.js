import React from "react";
import "./App.scss";
import ExpensesWrapper from "./components/ExpensesWrapper/ExpensesWrapper";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/expenses-tracker" component={ExpensesWrapper} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
