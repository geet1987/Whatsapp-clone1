import './App.css';
import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

function App() {
  const [{user}, dispatch] = useStateValue();
 // bellow useEffect function forwhenever we refresh app
 // it comes to app only not to login page.
  useEffect(() =>{
    auth.onAuthStateChanged(user=>{
      dispatch({
          type:"SET_USER",
          user:user,
        }
      )

    })
  }, [])
  return (
    <div className="app">
        {!user ? (
          <Login/>
        ):(
          <div className="app_body">
            <Router>
              <Sidebar/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
                  <Chat/>
                </Route>              
              </Switch>            
            </Router>
          </div>
        )}
        
    </div>
  );
}

export default App;
