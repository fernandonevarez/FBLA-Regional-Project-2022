import { Switch, Route } from "react-router-dom";
import Attractions from "./Pages/Attractions";
import SingleAttraction from "./Pages/SingleAttraction";
import Home from "./Pages/Home";
import './Styles/main.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/attractions">
          <Attractions />
        </Route>
        <Route path="/attractions/:id">
          <SingleAttraction />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
