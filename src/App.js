import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";
import AddMeals from "./components/AddMeals";
import EditMeals from "./components/EditMeals";

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
          <Route exact path="/addmeals">
            <AddMeals />
          </Route>
          <Route exact path="/editmeals/:id" children={<EditMeals />}></Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
