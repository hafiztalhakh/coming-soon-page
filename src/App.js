import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

//Assets
import logo from './Images/mylogo-1.png';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="overlay">
          <h1 style={{ color: 'white', fontSize: '3em', margin: 0, padding: 0, fontWeight: 'normal' }}>Coming Soon</h1>
          <p style={{ color: 'white', opacity: '0.5' }}>Stay Tuned</p>
          <InputGroup className="mb-3 custom-form">
            <FormControl
              placeholder="Your Email"
              aria-label="user email"
              aria-describedby="basic-addon2"
              className="custom-input"
            />
            <InputGroup.Append>
              <Button variant="info">Subscibe</Button>
            </InputGroup.Append>
          </InputGroup>

        </div>
      </header>
    </div>
  );
}

export default App;
