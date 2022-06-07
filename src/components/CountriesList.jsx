import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;

  return (
    <div div className="col-5">
      <ul className="list-group">
        {countries.map((country) => (
          <li
            className="list-group-item list-group-item-action"
            key={country.alpha3Code}
          >
            <Link to={`/${country.alpha3Code}`}>
              <img
                width="20px"
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
              &ensp;
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
