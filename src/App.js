import { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import CountryList from './components/CountryList';
import { Col, Spinner } from "react-bootstrap";

const BASE_URL = "https://restcountries.com/v3.1/name/";

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = useCallback(
    debounce(username => {
      console.log(searchQuery);
      setLoading(true);
      fetch(BASE_URL+searchQuery)
      .then(res=>res.json())
      .then(result=>{
        if(Array.isArray(result)) setCountryList(result);
        setLoading(false);
      })
      .catch(err=>{ setLoading(false)})
    }, 1000),
    [searchQuery]
  );

  const handleSearchQueryChange = event => {
    setSearchQuery(event.target.value);
    search(event.target.value);
  };

  return (
    <div>
      <center> <h1>Countries</h1></center>
      <hr/>
      <div className="form-group col-md-6 mx-auto">
        <input className="form-control " type="text" value={searchQuery} onChange={handleSearchQueryChange} placeholder="Search" />
      </div>
      {loading ?   <div className="position-absolute top-50 start-50 translate-middle"><Spinner animation="border" variant="primary" size="lg" /> </div> : <CountryList countryList={countryList}/>}
    </div>
  );
}
