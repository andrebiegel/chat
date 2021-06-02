import "../App.css";
import Alerts from "./Alerts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AlertDetail from "./AlertDetail";
import AlertsProvider from "../contexts/AlertsProvider";

function App() {
  const detailView = (
    <AlertsProvider>
      <AlertDetail />
    </AlertsProvider>
  );
  const home = (
    <AlertsProvider>
      <Alerts url={"http://localhost:8080/alerts"} />
    </AlertsProvider>
  );
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => home} />
        <Route path="/detail/:id" render={() => detailView} />
      </Router>
    </div>
  );
}

export default App;
