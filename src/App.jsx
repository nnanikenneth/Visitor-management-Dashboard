import React, { Component } from 'react';
import AddVisitor from "./pages/AddVisitor";
import Login from "./pages/Login";
import Dashboard from "./pages/VisitorDashBoard"; ///< index.jsx will be automatically imported 
import NotFoundPage from "./pages/NotFoundPage";
import SuccessfullyCreated from "./pages/SuccessfullyCreated";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/accessmanager" component={Dashboard} />
          <Route exact path="/visitor/createdsuccess" component={SuccessfullyCreated} />
          <Route exact path="/addvisitor" component={AddVisitor} />
          <Route exact path="/" component={Login} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" /> 
        </Switch>
      </Router>
    );
  }
}
