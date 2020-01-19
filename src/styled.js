import styled from 'styled-components'
import  Button  from '@material-ui/core/Button'

export const Header = styled.header`
    background-color: lightgrey;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    width: 50%;
    float: left;
`

export const WeatherContainerDiv = styled.div`
    background-color: lightgrey;
    text-align: center;
`

export const WeatherOfDayContainerDiv = styled.div`
    background-color: lightgrey;
    border-radius: 4px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    min-height: 25vh;
    width: 50vw;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
        cursor: pointer;
        background-color: grey;
    }
`

export const WeatherTitle = styled.p`
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    letter-spacing: 0.02857em;
`

export const FlexDiv = styled.div`
    display: inline-block;
    background-color: lightgrey;
    width: 45vw;
    min-height: 100vh;
    vertical-align:top;
    text-align: center;
`

export const PrettyButton = styled(Button)`
  width:25vw;
`

export const CustomList = styled.ul`
    padding-inline-start: 0px;
    /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
        cursor: pointer;
        background-color: grey;
    } */
`

export const ButtonDiv = styled.div`
    width:50vw;
`

export const Image = styled.img`
    width: 100px;
    height: 100px;
    float: left;
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 5px;
    /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
        cursor: pointer;
        background-color: grey;
    } */
`

export const ListImage = styled.img`
    width: 80px;
    height: 80px;
    float: left;
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 5px;
`

export const DescTitle = styled.span`
    text-decoration: underline;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    /* :hover {
        cursor: pointer;
        background-color: grey;
    } */
`

export const DescContent = styled.p`
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    letter-spacing: 0.02857em;
    /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
        cursor: pointer;
        background-color: grey;
    } */
`

export const WardrobeDiv = styled.div`
    display: inline-block;
    background-color: lightgrey;
    width: 45vw;
    height: 20vh;
    vertical-align:top;
    text-align: center;
    border-radius: 5px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
        cursor: pointer;
        background-color: grey;
    }
`
