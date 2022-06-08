import logo from './logo.svg';
import bootstrap from 'bootstrap';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
