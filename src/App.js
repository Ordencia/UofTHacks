import React from 'react';
import logo from './sunny.png';
import './App.css';
import  Header  from './Header'
import { FlexDiv, WeatherTitle } from './styled'
import Grid from '@material-ui/core/Grid'

function App() {
  
  return (

    <Grid>
      <FlexDiv>
            <WeatherTitle>WEATHER ^-^</WeatherTitle>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Weather
        </p>
        <a>
          hate lil pump
        </a>
      </FlexDiv>
      <FlexDiv> 
        <Header/>
      </FlexDiv>
      </Grid>
  );
}

export default App;
