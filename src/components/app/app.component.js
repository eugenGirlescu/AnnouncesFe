import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import InfoCard from '../card/info.component';
import Announce from '../announce/announce.component';

function App() {
    return (
        <Router>
          <React.Fragment>
            <main className = "main-content"> 
              <Switch>
                <Route exact path ='/'  component = {Announce}/>
                <Route exact path ='/article/:id' component = {InfoCard} />
              </Switch>
              </main>
          </React.Fragment>
      </Router>
    );
  }
  
  export default App;