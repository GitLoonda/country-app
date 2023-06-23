import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Detail({ data, darkmode, setDarkmode }) {
  const params = useParams();
  const match = data.filter(data => data.cca2 === params.id);
  const item = match[0];
  return (
    <div className={`detail ${darkmode ? 'dark' : ''}`}>
      <Link to='/'>
        <button className='btn'>Back</button>
      </Link>
      <h2>{item.cca2}</h2>
      <div className="content">
        <div className="flg" style={{backgroundImage : `url('${item.flags.png}')`}}>
        </div>
        <div className="desc">
          <h3>{item.name.common} {item.translations.kor.common}</h3>
          <p>Population : <span>{(item.population).toLocaleString()}</span></p>
          <p>Region : <span>{item.region}</span></p>
          <p>Capital : <span>{item.capital}</span></p>
          <p>Sub Region : <span>{item.subregion}</span></p>
          <p>Top Level Domain : <span>{item.cca2}</span></p>
          <p>Languages : <span>{JSON.stringify(item.languages)}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Detail