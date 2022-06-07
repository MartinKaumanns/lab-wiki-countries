import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetails = (props) => {
  const params = useParams();

  const { id } = params;

  const { countries } = props;
  const [country, setCountry] = useState(null);

  useEffect(() => {
    console.log('useEffect was executed');
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
    <div className="col-7">
      {country && (
        <div>
          <h1>
            <img
              width="48px"
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
            &ensp;
            {country.name.common}
          </h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital </td>
                <td>{country.capital.join(', ')}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km<sup>2</sup>
                </td>
              </tr>
              {country.borders.length > 0 && (
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {country.borders.map((code) => (
                        <li key={code}>
                          <Link to={`/${code}`}>
                            {
                              countries.find(
                                (countriesName) =>
                                  countriesName.alpha3Code === code
                              ).name.common
                            }
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
              <div></div>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
