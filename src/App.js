
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sallonx from './page/sallonx';
import Topbar from './component/topbar/Topbar';
import Mainheader from './component/topbar/mainheader';
import Home from './page/home';
import Sallonlist from './page/sallonlist';


function App() {
  return (
    <Router>
      <Topbar/>
      <Mainheader/>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/list'  component={Sallonlist} />
      <Route path='/xsal'  component={Sallonx} />
    
      </Switch>
    </Router>
  );
}

export default App;
