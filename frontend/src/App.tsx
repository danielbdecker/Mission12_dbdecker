import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';

import data from "./teamlist.json";
const teamList = data.teams;

class Team extends React.Component<{school: string; name: string; city: string; state: string;}> {
  render() {

    const oneTeam = this.props;
    return (
      <div style={{border:'1px solid grey'}}>
        <Col xs={6}>
        <h3>{oneTeam.school}</h3>
        <p>{oneTeam.name}</p>
        <p>{oneTeam.city}, {oneTeam.state}</p>
        </Col>
      </div>
    )
  }
}

function TeamList() {
  return (
    <div>
      <Container>
        {teamList.map(oneTeam => <Team {...oneTeam}/>)}
      </Container>
    </div>
  )
}

function Intro() {
  return (<h1>NCAA Basketball College Info</h1>)
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro/>
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <TeamList/>
        </Container>
      </header>
    </div>
  );
}

export default App;
