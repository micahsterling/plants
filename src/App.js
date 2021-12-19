import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <NavBar />
    </Router>
  );
}

export default App;
