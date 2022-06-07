import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;

  /* useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log('useEffect  was executed in Countries List');
    fetch('https://ih-countries-api.herokuapp.com/countries', {
      signal: signal,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setList(data.results);
      });
    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, []); */

  return (
    <div className="container">
      <div className="row">
        <div div className="col-5">
          <ul className="list-group">
            {countries.map((country) => (
              <li
                className="list-group-item list-group-item-action"
                key={country.alpha3Code}
              >
                <Link to={`/country/${country.alpha3Code}`}>
                  {country.name.common}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;

/* 

const [list, setList] = useState([]);

useEffect(() => {
  console.log('useEffect  was executed');
  fetch('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setList(data.results);
    });
}, []); 

*/
