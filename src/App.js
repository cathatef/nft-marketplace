import logo from './logo.svg';
import './App.css';
import ReactGa from 'react-ga'
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    ReactGa.initialize('G-CMDYY01MC2')

    ReactGa.pageview('/')
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
