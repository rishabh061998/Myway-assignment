import React, { useState } from 'react';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  function locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getweather1);
    }
  }

  function getweather1(position) {
    // let lat = position.coords.latitude;
    // let lon = position.coords.longitude;
    // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f874a2d1b7c97a14944dbed2543e804c`;
  }
  //
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&cnt=08&appid=f874a2d1b7c97a14944dbed2543e804c`;
  const searchBar = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(data);
      });
    }
  };
  // function getweather2() {}
  locate();

  // const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=f874a2d1b7c97a14944dbed2543e804c`;
  // `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=f874a2d1b7c97a14944dbed2543e804c`
  return (
    <div id="sb-outer">
      <div id="sb-location-sym">
        <LocationOnIcon />
      </div>
      <input
        id="sb-query"
        placeholder="City name"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchBar}
      />
      <button id="sb-search-btn">
        <SearchIcon />
      </button>
      <div id="sb-dropdown"></div>
    </div>
  );
}
