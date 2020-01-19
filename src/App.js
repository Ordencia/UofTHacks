import React from 'react';
import logo from './sunny.png';
import './App.css';
import  Header  from './Header'
import { FlexDiv } from './styled'
import Grid from '@material-ui/core/Grid'

function App() {
  
  return (
    <Grid>
      <FlexDiv>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Weather
        </p>
        <a>
          lol TEST me
        </a>
      </FlexDiv>
      <FlexDiv> 
        <Header/>
      </FlexDiv>
      </Grid>
  );
}

export default App;
