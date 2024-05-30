import React from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {
    return (
        <div className="card text-center">
            <div className="card-header">
                America/Chicago Broken Clouds
            </div>
            <div className="card-body">
                <h5 className="card-title">Current Weather</h5>
                <p className="card-text">
                    <table class="table-primary">
                        <thead>
                            <th>Temperature</th>
                            <th>Feelse Like</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                            <th>Clouds</th>
                            <th>Wind Speed</th>
                            <th>Wind Degree</th>
                            <th>Wind Gust</th>
                        </thead>
                        <tbody>
                            <tr class="table-active">
                                
                            </tr>
                        </tbody>
                    </table>
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            <div className="card-footer text-body-secondary">
                
            </div>
        </div>
    )
}

export default Card;