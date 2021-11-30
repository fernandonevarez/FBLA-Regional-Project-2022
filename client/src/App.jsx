import { Switch, Route } from "react-router-dom";
import Home from "./Pages/home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/attractions/:id">
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
