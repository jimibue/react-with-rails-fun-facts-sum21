import { Route, Switch } from 'react-router-dom';
import About  from './About';
import './App.css';
import AppFacts from './AppFacts';
import FactForm from './components/FactForm';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';

function App() {
  return(
    <>
    <NavBar />
    <Switch>
      <Route exact path='/' component={AppFacts} />
      <Route exact path='/about' component={About}/>
      <Route exact path='/newFact' component={FactForm}/>
      <Route component={NoMatch} />
    </Switch>  
    </>
  )
}

export default App;
