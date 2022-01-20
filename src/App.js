import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Color from './components/Color';
import {Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <h2>Routing</h2>

        <p>
            <Link to="/home">Home</Link> |
          
          | <Link to="/number/:int">Number</Link> |

          | <Link to="/word/:word">Word</Link> |

          | <Link to="/:word/:color1/:color2">Color</Link>
        </p>


        <Switch>

        <Route path="/home">
            <Home/>
          </Route>

          <Route path="/number/:int">
            <Number/>
          </Route>

          <Route path="/word/:word">
            <Word/>
          </Route>

          <Route path="/:word/:color1/:color2">
            <Color/>
          </Route>

        </Switch>
    </div>
  );
}

export default App;
