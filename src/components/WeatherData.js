import React from 'react'
import { FaSun, FaCloud, FaCloudRain, FaSmog } from "react-icons/fa";
import CurrentDate from './CurrentDate'
import '..//Css/WeatherData.css'

let tempStatus = ''

const WeatherData = ({ city, tempCondition, temp }) => {

    if (tempCondition === 'Clear') {
        tempStatus = <FaSun style={{ color: '#eccc68' }} />
    }
    else if (tempCondition === 'Clouds') {
        tempStatus = <FaCloud style={{ color: '#eceef0fa' }} />
    }
    else if (tempCondition === 'Rain') {
        tempStatus = <FaCloudRain style={{ color: '#a4b0be' }} />
    }
    else if (tempCondition === 'Smoke') {
        tempStatus = <FaSmog style={{ color: '#fffcfcb8' }} />
    }
    else {
        tempStatus = <FaSun style={{ color: '#eccc68' }} />
    }

    return (
        <div className="weatherInfo">
            <CurrentDate />
            <div className="main_layer">
                <p className="city_name">{city}</p>
                <div className="middle_layer">
                    {temp === 0 ? '' : <p> <span>{temp}</span><sup>o</sup> C </p>}
                    {tempCondition === '' ? '' : <p>{tempStatus}</p>}
                </div>
            </div>
        </div>
    )
}

export default WeatherData