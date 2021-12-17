
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sallonx from './page/sallonx';
import Topbar from './component/topbar/Topbar';
import Mainheader from './component/topbar/mainheader';
import Home from './page/home';
import Sallonlist from './page/sallonlist';
import Login from './page/login';
import Signup from './page/signup';
import Sporcuhome from './page/sporcuhome';
import Salonsahibihome from './page/salonsahibihome';
import Blog from './page/blog';
import Haberler from './page/haberler';
import Blogyaz from './page/blogyaz';


function App() {
  return (
    <Router>
      <Topbar/>
      <Mainheader/>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/list'  component={Sallonlist} />
      <Route path='/xsal'  component={Sallonx} />
      <Route path='/login'  component={Login} />
      <Route path='/signup'  component={Signup} />
      <Route path='/sporcu'  component={Sporcuhome} />
      <Route path='/salonsahibi'  component={Salonsahibihome} />
      <Route path='/blog'  component={Blog} />
      <Route path='/haberler'  component={Haberler} />
      <Route path='/yaz'  component={Blogyaz} />
    
      </Switch>
    </Router>
  );
}

export default App;
