import { Switch, Route } from 'react-router-dom';
import './App.css';
import SelectAllExample from './pages/react-select-selectall'
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/react-select/select-all" component={SelectAllExample} />
      </Switch>
    </div>
  );
}

export default App;
