import  WeatherContainer  from './WeatherContainer'
import React, { useState } from 'react';
import { PrettyButton, ButtonDiv } from './styled'
import WardrobeContainer from './WardrobeContainer';

const Header = () => {

     const [container, setContainer] = useState(1)


    return (
        <>
            <ButtonDiv>
            {/*<PrettyButton onClick={() => setContainer(1)}>
                Weather
            </PrettyButton>*/}
            <PrettyButton onClick={() => setContainer(1)}>
                Outfit
            </PrettyButton>
            <PrettyButton onClick={() => setContainer(2)}>
                Wardrobe
            </PrettyButton>
            </ButtonDiv>
            {
                (container === 1 &&  <WardrobeContainer/>) ||
                (container === 2 && null)
            }
        </>
    )
}

export default Header