import './App.css';
import About from './Components/About/About';
import Company from './Components/Company/Company';
import Counter from './Components/Counter/Counter';
import ThemeSwitcher from './Components/ThemeSwitcher/ThemeSwitcher';
import Todos from './Components/Todos/Todos';
import Greet from './Components/Users/MockingCompDemo/Greet';
import Users from './Components/Users/Users';
import Movies from './Containers/Movies';

function App() {

  let movieInfo = {
    id: 12321,
    url: 'http://www.imdb.com',
    movieName: 'Jurassic Park'
  }

  return (
    <div className="App">
      <h1>Welcome to Unit Testing!!!</h1>

      <hr/>
      <About />

      <hr/>
      <Company name="Cognizant Tech" />

      <hr/>
      <Counter/>

      <hr/>
      <Movies {...movieInfo}/>

      <hr/>
      <ThemeSwitcher/>

      <hr/>
      <Todos/>

      <hr/>
      <Users/>

      <hr/>
      <Greet />
    </div>
  );
}

export default App;
