import React from 'react';
import './App.css';
import {Route,Switch, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

function Home(props) {
  console.log('Home',props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/shop/hats' component={Home}></Route>  
    </div>
  );
}

export default App;
