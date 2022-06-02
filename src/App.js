import './App.css';
import About from './Components/About/About';
import Company from './Components/Company/Company';

function App() {

  return (
    <div className="App">
      <h1>Welcome to Unit Testing!!!</h1>

      <hr/>
      <About />

      <hr/>
      <Company name="Cognizant Tech" />
    </div>
  );
}

export default App;
