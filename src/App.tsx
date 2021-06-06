import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom';
import Header from './components/header/Header';
import Queue from './components/queue/Queue';
import './App.css';
import API from './utils/api';

const App = () => {
  const server = new API('http://localhost:8080/');

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/enter/:pathUUID">
            <Queue server={server} />
          </Route>
          <Route path="/enter/:pathUUID/:userUUID">
            <Queue server={server} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
