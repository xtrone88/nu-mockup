import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Pages from "./pages";

export default function App() {
  return (
    <div className="App mx-0">
      <Router>
        <Switch>
          <Route component={Pages} />
        </Switch>
      </Router>
    </div>
  );
}
