import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";
import AddMeals from "./components/AddMeals";
import EditMeals from "./components/EditMeals";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container-fluid">
        <Switch>
          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/addmeals">
            <AddMeals />
          </Route>
          <PrivateRoute exact path="/editmeals/:id" children={<EditMeals />}></PrivateRoute>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
