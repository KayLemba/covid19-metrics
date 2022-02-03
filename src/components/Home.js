import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { fetchData } from '../redux/covidData/covid';

function Home() {
  const covidReducer = useSelector((state) => state.covidReducer.covid);
  const dispatch = useDispatch();
  let Africa = covidReducer.filter((item) => item.continent === 'Africa');
  const loci = useLocation();
  const query = new URLSearchParams(loci.search);
  const buscar = query.get('buscar') || '';
  const navigate = useNavigate();
  Africa = Africa.filter((country) => country.country.includes(buscar.toLocaleUpperCase()));
  const [searchInput, setSearchInput] = useState(buscar);

  useEffect(() => {
    if (!covidReducer.length) {
      dispatch(fetchData());
    }
  }, []);

  const Country = (e) => {
    navigate(e.target.value ? `?buscar=${e.target.value}` : '');
    setSearchInput(e.target.value);
  };
  return (
    <>
      <div className="heading">
        {' '}
        <h1>AFRICAN COUNTRIES COVID-19 METRICS</h1>
        {' '}
      </div>
      <div className="input-box">
        <input value={searchInput} onChange={Country} className="input" type="text" placeholder="Search..." />
      </div>
      <div className="body">
        {
        Africa.map((data) => {
          const {
            country,
            flag,
          } = data;

          return (
            <Link key={country} to={{ pathname: `/country/${country}` }}>

              <div className="main-cont" key={country}>
                <h2 className="country">{country}</h2>
                <div className="image">
                  <img className="img" src={flag} alt={country} />
                </div>

              </div>
            </Link>

          );
        })
      }
      </div>
    </>

  );
}

export default Home;
