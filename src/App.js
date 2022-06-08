import logo from './logo.svg';
import bootstrap from 'bootstrap';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
