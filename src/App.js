import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import classes from './App.module.css'
import Map from './containers/Map/Map'
import TeamDetail from './containers/TeamDetail/TeamDetail'
import Admin from './containers/Admin/Admin'

import { Database, Storage } from './firebaseConfig'

function App() {
  return (
    <Router >
      <main className={classes.App}>
        {/* <header className="App-header">
          <p>Base App</p>
        </header> */}
        <Switch>
          <Route path="/team" component={TeamDetail} />
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Map} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
