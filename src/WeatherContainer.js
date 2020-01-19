import React from 'react';
import { 
    WeatherContainerDiv, 
    WeatherOfDayContainerDiv ,
    WeatherTitle,
    CustomList,
} from './styled'
import Divider from '@material-ui/core/Divider'

import sunny from './sunny.png'
import snowy from './snowy.png'
import watery from './watery.png'
import foggy from './foggy.png'

const WeatherContainer = (weather) => {

    let currWeather = ['cold as shit', 'warm as shit', 'wet as shit', 'can\'t see shit']
    let icons = [snowy, sunny, watery, foggy]
    return (
        <WeatherContainerDiv>
            <WeatherTitle>
                    CURRENT WEATHER
            </WeatherTitle>
                {
                    <CustomList>
                        {
                    currWeather.map((cWeather, key) => (
                        <>
                        <WeatherOfDayContainerDiv> 
                            <img src={icons[key]}/>
                            {
                                cWeather
                            }
                        </WeatherOfDayContainerDiv>
                        <Divider/>
                        </>
                    ))
                        }
                    </CustomList>
                }
        </WeatherContainerDiv>
    )
}

export default WeatherContainer