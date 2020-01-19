import React, { useState } from 'react'
import { PrettyButton, ButtonDiv } from './styled'
import WardrobeContainer from './WardrobeContainer'
import OutfitContainer from './OutfitContainer'

const Header = () => {

     const [container, setContainer] = useState(0)


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
                (container === 1 &&  <OutfitContainer/>) ||
                (container === 2 && <WardrobeContainer/>) ||
                null
            }
        </>
    )
}

export default Header