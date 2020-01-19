import React from 'react';
import logo from './sunny.png';
import {
	TemperatureSection,
	WeatherImage,
	WeatherPanel,
	WeatherInfoTable,
	WeatherDescription,
	WeatherTitle
} from './WeatherInfoPanel.styles'


export default function WeatherInfoPanel(props) {
	return (
		<WeatherPanel>
			<WeatherTitle>Weather in Toronto, ON</WeatherTitle>
			<TemperatureSection>
				<WeatherImage src={logo} className="App-logo" alt="logo" />
				<p>2<sup style={{fontSize: "0.5em"}}>&#176;C</sup></p> {/*&#176; is for degree symbol*/}
			</TemperatureSection>
			<div>
				<WeatherDescription>Today it's sunny :)))))))</WeatherDescription>
				<WeatherInfoTable>
					<tr>
						<td style={{fontWeight: "bold"}}>Windchill:</td>
						<td>idk????</td>
					</tr>
					<tr>
						<td style={{fontWeight: "bold"}}>Humidity:</td>
						<td>idk????</td>
					</tr>
					<tr>
						<td style={{fontWeight: "bold"}}>Precipitation:</td>
						<td>idk????</td>
					</tr>
				</WeatherInfoTable>
			</div>
		</WeatherPanel>
	);
}

// class WeatherInfoPanel extends React.Component {
// 	constructor(props) {
// 		super(props);

// 	}

// 	re
// }