import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
/* import countriesData from './countries.json'; */

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<CountriesList countries={countries} />}
        ></Route>
        <Route
          path="/country/:id"
          element={<CountryDetails countries={countries} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
