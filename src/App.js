
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sallonx from './page/sallonx';
import Topbar from './components/trash/topbar/Topbar';
import Home from './page/home';
import SallonDetail from './page/sallonDetail';


function App() {
  return (
    <Router>
      <Topbar/>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/detail'  component={SallonDetail} />
      <Route path='/xsal'  component={Sallonx} />
    
      </Switch>
    </Router>
  );
}

export default App;
