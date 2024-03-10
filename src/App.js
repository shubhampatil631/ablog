import './index.css';
import Navbar from './navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create.js';
import BlogDetails from './BlogDetails.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> 
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/Create'>
              <Create />
            </Route>
            <Route exact path='/blogs/:id'>
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
