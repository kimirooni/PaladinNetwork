import logo from './logo.svg';
import './App.css';
import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePages';
import {Switch, Route} from 'react-router-dom';
import SupportPage from './Pages/SupportPage';

function App() {
  return (
    <div className="App">
      <div className = "sidebar">
      <NavBar/>
      </div>
      <Switch>
      <div className = "main-content">
      <div className = "content">
        
        <Route exact path="/" component= {HomePage}/>
</div>
<Route path="/Support" component= {SupportPage}/>
      </div>
      
      </Switch>
    </div>    
  );
}

export default App;
