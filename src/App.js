import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
