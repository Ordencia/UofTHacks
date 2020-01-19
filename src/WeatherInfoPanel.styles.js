import styled from 'styled-components'
// import Button from '@material-ui/core/Button'
// import Divider from '@material-ui/core/Divider'

export const WeatherPanel = styled.div`
	display: flex;
	flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    background-color: lightgrey;
    height: 80vh;
    padding: 2em;
`

export const WeatherTitle = styled.h1`
	font-size: 1.6em;
	color: black;
	font-family: "Roboto", "Helvetica", "Arial"
`

export const WeatherImage = styled .img`
	height: 5.1rem;
	width: 5.1rem;
	margin-right: 0.15em;
`

export const TemperatureSection = styled.div`
    background-color: white;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
    width: 80%;
    font-size: 5em;
    margin: 0.2em;
    border-radius: 5px;
`

export const WeatherDescription = styled.p`
	font-size: 1.4em;
	color: black;
	font-family: "Roboto", "Helvetica", "Arial"
` 

export const WeatherInfoTable = styled.table`
	width: 23vw;
	font-size: 1.4em;
	text-align: left;
	font-family: "Roboto", "Helvetica", "Arial"
`
