import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

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
          <h1 style={{ color: 'white', fontSize: '3em', margin: 10, padding: 0, fontWeight: 'normal' }}>Coming Soon</h1>
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
          {/* <p style={{ color: 'white', opacity: '0.5' }}>Follow Us</p> */}
          <div style={{ height: 10 }} />
          <ul className="unordered-list">
            <li className="list-unstyle">
              <a href="https://www.facebook.com/pg/technest.com.pk" target="blank" className="link-unstyle">
                <FacebookIcon style={{ fontSize: '2em' }} />
              </a>
            </li>
            <li className="list-unstyle">
              <a href="https://www.facebook.com/pg/technest.com.pk" target="blank" className="link-unstyle">
                <TwitterIcon style={{ fontSize: '2em' }} />
              </a>
            </li>
            <li className="list-unstyle">
              <a href="https://www.youtube.com/channel/UCISXOO0MW6rIprDaNI0-I0Q" target="blank" className="link-unstyle">
                <YouTubeIcon style={{ fontSize: '1.8em' }} />
              </a>
            </li>
            <li className="list-unstyle">
              <a href="https://www.linkedin.com/company/technest-pk" target="blank" className="link-unstyle">
                <LinkedInIcon style={{ fontSize: '1.8em' }} />
              </a>
            </li>
            <li className="list-unstyle">
              <a href="https://www.facebook.com/pg/technest.com.pk" target="blank" className="link-unstyle">
                <YouTubeIcon style={{ fontSize: '1.8em' }} />
              </a>
            </li>
            <li className="list-unstyle">
              <a href="https://github.com/TechNest-pk" target="blank" className="link-unstyle">
                <GitHubIcon style={{ fontSize: '1.8em' }} />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
