import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Pages from "./pages";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App mx-0">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route component={Pages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
