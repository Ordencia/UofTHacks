import React from 'react'
import {
    WardrobeDiv,
    DescTitle,
    DescContent
} from './styled'

const WardrobeDesc = ({article, desc}) => {

    return (
        <WardrobeDiv>
            <DescTitle>
                {
                    article
                }
            </DescTitle>
            <DescContent>
                {
                    desc
                }
            </DescContent>
        </WardrobeDiv>
    )
}

export default WardrobeDesc