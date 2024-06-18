import './styles/App.css';
import Navbar from './components/common/Navbar'
import NavButton from './components/common/NavButton'
import Main from './components/pages/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  	  <Router>
      <div className="app-container">
        <Navbar />
        <NavButton />
        <Main />
      </div>
  	  </Router>
  );
}

export default App;
