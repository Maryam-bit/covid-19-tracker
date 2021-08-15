import React, { useState, useEffect } from 'react'
import './App.css';
import logo from './assets/logo.png'
import Card from './components/card/card'
import CountryPicker from './components/country-picker/countryPicker'
import Chart from './components/chart/chart'
import { fetchData } from './api/index'


function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    debugger;
    try {
      const api = await fetch('https://covid19.mathdro.id/api');
      let response = await api.json();
      console.log('response', response)
      setData(response)
      console.log('data', data)
    }

    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <img src={logo} alt='logo' />
     
      <Card />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;