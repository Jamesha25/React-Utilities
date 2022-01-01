import NavBar from './components/navBar/navBar';
import Welcome from './components/welcome/welcome';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <NavBar logo='Jamy' option1='Home' option2='AboutUs' option3='Clients' option4='Projects' option5='ContactUs'/>
        <Welcome/>
      </Route>
      <Route path="/nav" component={NavBar}/>
    </BrowserRouter>
  );
}

export default App;
