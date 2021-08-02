import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import Category from './pages/Category';
import Goods from './pages/Goods';
import Home from './pages/Home';
import Mobileapps from './pages/Mobileapps';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mobileapps" component={Mobileapps} />
        <Route path="/:category" component={Category} />
        <Route path="/:goods" component={Goods} />
      </Switch>
    </div>
  );
}

export default App;
