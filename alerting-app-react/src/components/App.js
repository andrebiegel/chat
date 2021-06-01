import '../App.css'
import Alerts from './Alerts'

function App() {
  return (
    <div className="App">
      <h1>Alerts</h1>
      <Alerts url={'http://localhost:8080/alerts'}/>
    </div>
  );
}

export default App;
