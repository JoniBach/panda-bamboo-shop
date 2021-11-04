import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { Router } from '@reach/router';
import { Nav } from './components/Nav';
import About from './pages/About';

function App() {
  return (
    <div className='app'>
      <Nav/>

      <Router>

      <Main path='/' />
      <About path='/about' />

      </Router>
    </div>
  );
}

export default App;
