import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import Banner from '../assets/covid19-banner.jpeg';
import mic from '../images/mic-svgrepo-com.svg';
import set from '../images/settings-svgrepo-com.svg';

function Navbar() {
  const place = useLocation();
  const back = <MdArrowBackIosNew className="back" />;
  const goBack = place.pathname.includes('country') ? back : '';
  return (
    <>
      <div className="banner-div">
        <img src={Banner} alt="COVID19" className="img-banner" />
      </div>
      <nav className="navbar">
        <div>
          <NavLink exact="true" to={{ pathname: '/' }}>
            {goBack}
          </NavLink>
        </div>
        <h2>COVID-19 STATS</h2>
        <div className="top-right">

          <div className="top-right">
            <img src={mic} className="mic" alt="" />
          </div>
          <div className="top-right">
            <img className="set" src={set} alt="#" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
