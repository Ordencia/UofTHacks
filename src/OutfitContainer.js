import React from 'react';
import { 
  WeatherContainerDiv,
  WeatherOfDayContainerDiv,
  WeatherTitle,
  CustomList,
  Image
} from './styled'

import Divider from '@material-ui/core/Divider'
import WardrobeDesc from './WardrobeDesc'
import shoes from './image_assets/nike .jpeg'
import shirt from './image_assets/google shirt.png'
import pants from './image_assets/male jeans.jpg'
import jacket from './image_assets/male jacket fall.jpg'

const OutfitContainer = (weather) => {

    let currClothing = ['Jacket', 'Shirt', 'Jeans', 'Shoes']
    let currDescription = ['Nice to wear when it\'s cold', 'Always great to represent Google', 'Jeans. Just jeans.', 'Basic ass Nike AF1\'s']
  
    let icons = [jacket, shirt, pants, shoes]
    

  return (
    <WeatherContainerDiv>
            <WeatherTitle>
                    Negative 1 MILLION
            </WeatherTitle>
            <Divider/>
                {
                    <CustomList>
                        {
                        currClothing.map((currClothes, key) => (
                        <>
                        <WeatherOfDayContainerDiv> 
                            <Image src={icons[key]}/>
                            <WardrobeDesc article={currClothes} desc={currDescription[key]}/>
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

export default OutfitContainer