import React, { useState } from 'react';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  function locate() {
    console.log('give location permission');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getweather1);
    }
  }
  function getweather1(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f874a2d1b7c97a14944dbed2543e804c`;
    axios.get(url1).then((response) => {
      setData(response.data);
    });
  }
  // locate();
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const searchBar = (event) => {
    let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f874a2d1b7c97a14944dbed2543e804c`;
    if (event.key === 'Enter') {
      axios.get(url2).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };
  return (
    <div className="App">
      {/* <SearchBox></SearchBox> */}
      <div id="sb-outer">
        <div id="sb-location-sym" onClick={locate}>
          <LocationOnIcon />
        </div>
        <input
          id="sb-query"
          placeholder="City name"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchBar}
        />
        <button id="sb-search-btn" onClick={searchBar}>
          <SearchIcon />
        </button>
        <div id="sb-dropdown"></div>
      </div>
      {data.main ? (
        <>
          <div>main is present</div>
          {/* <SliderBox></SliderBox> */}
          <div id="slb-outer">
            {array.map(
              <div className="slb-daycard">
                <div className="slb-daydetails">
                  <p>day</p>
                  <p>
                    <span>{data.main.temp_max}°C</span>
                    <span>{data.main.temp_min}°C</span>
                  </p>
                  <img
                    src="/images/trial.svg"
                    className="slb-dataicon"
                    alt=""
                  ></img>
                  <p>Clouds</p>
                </div>
              </div>
            )}
            {/*  */}
          </div>
          {/* <GraphBox></GraphBox> */}
          <div id="gb-outer">
            <div id="gb-details1">
              <h1>{data.main.temp}°C</h1>
              <img
                className="curr-image"
                src="/images/trial.svg"
                alt="cloud"
              ></img>
            </div>
            <div id="gb-graph1"></div>
            <div id="gb-details2">
              <div className="gb-d1">
                <span className="bold">Pressure</span>
                <span>{data.main.pressure} hpa</span>
              </div>
              <div className="gb-d2">
                <span className="bold">Humidity</span>
                <span>{data.main.humidity} %</span>
              </div>
            </div>
            <div id="gb-graph2">
              <div className="gb-graph2-details">
                <div className="gb-g2-d">
                  <span className="bold">Sunrise</span>
                  <span>6:17am</span>
                </div>
                <div className="gb-g2-d">
                  <span className="bold">Sunset</span>
                  <span>7:10pm</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </>
      ) : data.message ? (
        <p>{data.message}</p>
      ) : (
        <p>
          You can search for your city or allow the browser to detect location
        </p>
      )}
    </div>
  );
}

export default App;
