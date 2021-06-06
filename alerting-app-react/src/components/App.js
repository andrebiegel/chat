import "../App.css";
import Alerts from "./Alerts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AlertDetail from "./AlertDetail";
import { useLocalStorage } from "../hooks/storage";
import AlertsProvider from "../contexts/AlertsProvider";
import Login from "./Login";
function App() {
  const [id, setId] = useLocalStorage("id", null);
  const detailView = (
    <AlertsProvider url={"http://localhost:8080/alerts"}>
      <AlertDetail user={id} />
    </AlertsProvider>
  );
  const home = (
    <AlertsProvider url={"http://localhost:8080/alerts"}>
      <Alerts url={"http://localhost:8080/alerts"} />
    </AlertsProvider>
  );
  const app = (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => home} />
        <Route path="/detail/:id" render={() => detailView} />
      </Router>
    </div>
  );
  return id ? app : <Login onIdSubmit={setId} />;
}

export default App;
