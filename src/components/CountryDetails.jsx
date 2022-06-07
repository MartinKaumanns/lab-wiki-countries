import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetails = (props) => {
  const params = useParams();

  const { id } = params;

  const { countries } = props;
  const [country, setCountry] = useState(null);

  useEffect(() => {
    console.log('useEffect  was executed');
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
      });
  }, [id]);

  const filteredCountry = countries.filter(
    (country) => country.alpha3Code === id
  );
  const singleCountry = filteredCountry[0];

  console.log(singleCountry);
  return (
    <div>
      <h1>{id}</h1>

      {country && (
        <div>
          <h1>{country.name.common}</h1>
          <br />
          <strong>{country.capital}</strong>
          <p>
            {country.area} km<sup>2</sup>
          </p>
          <div>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
