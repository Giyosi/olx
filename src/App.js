import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import Category from './pages/Category';
import Home from './pages/Home';
import Mobileapps from './pages/Mobileapps';
import ThemeContex from './theme-context';

function App() {

  const [theme, setTheme] = useState("dark")

  return (
    <div className="App">
      <ThemeContex.Provider value={{theme,setTheme}}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mobileapps" component={Mobileapps} />
        <Route path="/:category" ><Category /></Route>
      </Switch>
      </ThemeContex.Provider>
    </div>
  );
}

export default App;
