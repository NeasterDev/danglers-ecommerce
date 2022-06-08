import logo from './logo.svg';
import bootstrap from 'bootstrap';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Store } from './pages/Store';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
