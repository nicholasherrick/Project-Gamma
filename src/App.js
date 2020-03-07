import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import FormPage from "./views/FormPage";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Login from "./views/Login/";
import Profile from "./views/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/auth/create" exact component={FormPage}/>
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;