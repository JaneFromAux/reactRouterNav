import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";
import Speisekarte from './pages/Speisekarte';
import Kontakt from './pages/Kontakt';
import Oeffnungszeiten from './pages/Oeffnungszeiten';
import Gallerie from './pages/Gallerie';


function App() {
  return (
    <div className="App">
      <Nav className="header" />
      <Routes>
        <Route path="/speisekarte" element={<Speisekarte />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/oeffnungszeiten" element={<Oeffnungszeiten />} />
        <Route path="/gallerie" element={<Gallerie />} />
      </Routes>
    </div>
  );
}

export default App;
