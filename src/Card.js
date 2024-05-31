import React, { useEffect, useState } from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({isMobileSize}) {
    const [temperature, setTemperature] = useState('');
    const [feelsLike, setFeelsLike] = useState('');
    const [pressure, setPressure] = useState('');
    const [humidity, setHumidity] = useState('');
    const [clouds, setClouds] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [windDegree, setWindDegree] = useState('');
    const [windGust, setWindGust] = useState('');
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('')
    const [timezone, setTimezone] = useState('')
    const [weatherDescription, setWeatherDescription] = useState('')
    const [lastRefresh, setLastRefresh] = useState('');



    const convertTime = function(t, seconds=false) {
        if (seconds) {
            const result = new Date(t * 1000);
            return new Intl.DateTimeFormat('default',
            {
                hour12: true,
                hour: 'numeric',
                minute: 'numeric'
            }).format(result).toString();
        }
        const result = new Date(t);
        return new Intl.DateTimeFormat('default',
        {
            hour12: true,
            hour: 'numeric',
            minute: 'numeric'
        }).format(result).toString();
    }

    useEffect(() => {
        // query proxy for information on first load
        
        const sunrise = convertTime(1684926645, true);
        const sunset = convertTime(1684977332, true);

        // 

        setTemperature(292.55);
        setSunrise(sunrise);
        setSunset(sunset);
        setLastRefresh(convertTime(new Date(Date.now())))
    }, [])

    return (
        <div className="card text-center">
            <div className="card-header">
                {timezone} {weatherDescription}
            </div>
            <div className="card-body">
                <h5 className="card-title">Current Weather</h5>
                <div className="card-text center">
                    <table className="table table-light table-bordered table-striped-columns">
                        <thead>
                            <tr>
                                {
                                    isMobileSize ? (
                                        <>
                                            <th className='mobile-header-table'>
                                                Temperature
                                            </th>
                                            <th className='mobile-header-table'>Feels</th>
                                            <th className='mobile-header-table'>Pressure</th>
                                            <th className='mobile-header-table'>Humidity</th>
                                        </>
                                    ) : (
                                        <>
                                            <th>
                                                Temperature
                                                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V208c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"/></svg>
                                            </th>
                                            <th>Feels Like</th>
                                            <th>Pressure</th>
                                            <th>Humidity</th>
                                        </>
                                    )
                                }           
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-info">
                                <td className="table-success">{temperature}</td>
                                <td className="table-success">{feelsLike}</td>
                                <td className="table-success">{pressure}</td>
                                <td className="table-success">{humidity}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-light table-bordered table-striped-columns">
                        <thead>
                            <tr>
                                {
                                    isMobileSize ? (
                                        <>
                                            <th className='mobile-header-table'>
                                                Clouds
                                            </th>
                                            <th className='mobile-header-table'>Wind Speed</th>
                                            <th className='mobile-header-table'>Wind Degree</th>
                                            <th className='mobile-header-table'>Wind Gust</th>
                                        </>
                                    ) : (
                                        <>
                                            <th>Clouds</th>
                                            <th>Wind Speed</th>
                                            <th>Wind Degree</th>
                                            <th>Wind Gust</th>
                                        </>
                                    )
                                }
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-info">
                                <td className="table-success">{clouds}</td>
                                <td className="table-success">{windSpeed}</td>
                                <td className="table-success">{windDegree}</td>
                                <td className="table-success">{windGust}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-light table-bordered table-striped-columns">
                        <thead>
                            <tr>
                                {
                                    isMobileSize ? (
                                        <>
                                            <th className='mobile-header-table'>
                                                Sunrise
                                            </th>
                                            <th className='mobile-header-table'>Sunset</th>
                                        </>
                                    ) : (
                                        <>
                                            <th>Sunrise</th>
                                            <th>Sunset</th>
                                        </>
                                    )
                                }
                              
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-info">
                                <td className="table-success">{sunrise}</td>
                                <td className="table-success">{sunset}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="card-footer text-body-secondary">
                Last Refresh {lastRefresh}
            </div>
        </div>
    )
}

export default Card;