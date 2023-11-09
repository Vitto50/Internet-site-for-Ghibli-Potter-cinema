import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logos.png"
import Calendrier from '../Page_Calendrier/Calendrier';
import PageFilms from '../Pagefilm/PageFilms';
import Home from '../Home/Home';
import "./Bandeau.css"

const date = new Date();
const timestamp = date.getTime();
const millisecparjour = 24 * 60 * 60 * 1000;
let nbrjour = Math.floor(timestamp/millisecparjour);
nbrjour = nbrjour - 19648;
const nbrfilmGhibli = 22;
const nbrfilmHarry = 8;
const indGhibli = nbrjour % nbrfilmGhibli;
const indHarry = nbrjour % nbrfilmHarry;


const dateOnly = date.toISOString().split('T')[0];
console.log(dateOnly);


function Bandeau() {
  return (
    <div className="bandeau">
      <Link to="/Home" element={<Home />}>
        <img src={logo} alt="Logo" style={{ height: '60px', margin : '15px'}} />
      </Link>
      <Link to="/Films" element={<PageFilms />}>
        <button >Films</button>
      </Link>
      <Link to="/Calendrier" element={<Calendrier />} state={[indGhibli, indHarry, dateOnly]}>
        <button >Calendrier</button>
      </Link>
      <Link to="/Ticket">
        <button style={{margin : '15px'}}>Tickets</button>
      </Link>
    </div>
  );
}


export default Bandeau;
