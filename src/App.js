import React, { useState, useEffect } from 'react'
import logo from './assets/logo.png'
import Cards from './components/card/card'
import CountryPicker from './components/country-picker/countryPicker'
import Chart from './components/chart/chart'
import Loader from './components/loader/loader'
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState([])
  const [currentCountry,setCurrentCountry] = useState('')
  const Api = "https://covid19.mathdro.id/api";

  useEffect(() => {
    getAllData()
    getCountryData()
  }, [])

  const getAllData = async (country) => {
    let changeableURL = Api;
    if (country) {
      changeableURL = `${Api}/countries/${country}`
    }
    try {
        const apiAll = await fetch(changeableURL);
        let response = await apiAll.json();
        setData(response);
    }
    catch (error) {
      console.log(error)
    }
  }

  const getCountryData = async () => {
    try {
      const apiCountry = await fetch(`${Api}/countries`);
      let response = await apiCountry.json();
      const a = response.countries.map((res) => res.name);
      setCountry(a)
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleCountryChange =(country) => {
    getAllData(country)
    setCurrentCountry(country)
  }

  const { confirmed } = data
  if (!confirmed) {
      return <Loader/>
  }
  
  return (
    <div className="App">
      <img src={logo} alt='logo' />
      <Cards data={data} />
      <CountryPicker countryData={country} handleCountryChange={handleCountryChange} />
      <Chart  data={data}  currentCountry={currentCountry}/>
    </div>
  );
}

export default App;