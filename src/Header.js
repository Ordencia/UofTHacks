import  WeatherContainer  from './WeatherContainer'
import React, { useState } from 'react';
import { PrettyButton, ButtonDiv } from './styled'
import WarddrobeContainer from './WardrobeContainer';

const Header = () => {

     const [container, setContainer] = useState(1)


    return (
        <>
            <ButtonDiv>
            <PrettyButton onClick={() => setContainer(1)}>
                Weather
            </PrettyButton>
            <PrettyButton onClick={() => setContainer(2)}>
                Outfits
            </PrettyButton>
            <PrettyButton onClick={() => setContainer(3)}>
                Wardrobe
            </PrettyButton>
            </ButtonDiv>
            {
                (container === 1 &&  <WeatherContainer/>) ||
                (container === 2 && <WarddrobeContainer/>)
            }
        </>
    )
}

export default Header