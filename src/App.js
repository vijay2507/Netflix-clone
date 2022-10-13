import './App.css';
import Header from './MyComponents/Header';
import Login from './MyComponents/Login';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router-dom';
import Home from './MyComponents/Home'
import MyList from './MyComponents/MyList'
import PlayVideo from './MyComponents/PlayVideo'
import UpgradePlan from './MyComponents/UpgradePlan'
function App() {
  return (
    <Switch>
      < Route exact path="/" component={Login} />
      < Route exact path="/Home" component={Home} />
      <Route exact path="/MyList" component={MyList} />
      <Route exact path="/PlayVideo" component={PlayVideo} />
      <Route exact path="/UpgradePlan" component={UpgradePlan} />
    </ Switch>
  
  );
}

export default App;
