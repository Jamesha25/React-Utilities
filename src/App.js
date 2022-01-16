import NavBar from './components/navBar/navBar';
import Welcome from './components/welcome/welcome';
import {BrowserRouter, Route} from 'react-router-dom';
import Search from './components/search/search';

function App() {
  return (
    <BrowserRouter>

      <Route exact path="/">
        <Welcome/>
      </Route>

      <Route path="/nav">
        <NavBar logo='Jamy' option1='Home' option2='AboutUs' option3='Clients' option4='Projects' option5='ContactUs'/>
      </Route>

      <Route path="/search">
        <Search/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
