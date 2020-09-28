import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import classes from './App.module.css'
import Map from './containers/Map/Map'
import Admin from './containers/Admin/Admin'

function App() {
  return (
    <Router >
      <main className={classes.App}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Map} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
