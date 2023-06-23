import {  useState } from 'react'
import { Link } from 'react-router-dom';


function Home({ data, darkmode, setDarkmode }) {
  const [keyword, setKeyword] = useState('')
  const [copy, setCopy] = useState(null);
  setCopy(data);
  const searchData = (keyword) => {
    setCopy(data.filter(data => data.name.common === keyword))
  }
  const search = () => {
    searchData(keyword);
    setKeyword('');
  }
 
  return (
    <div className={`home ${darkmode ? 'dark' : ''}`}>
      <div className="search">
        <input type="text" placeholder='search' value={keyword} onChange={(e) => {
          setKeyword(e.target.value)
        }} />
        <button className="btn" onClick={search}>search</button>
      </div>
      <div className="list">
        <ul>
          {data && copy.map((item, i) => {
            return (
              <li key={i}>
                <Link to={`/detail/${item.cca2}`}>
                  <div className="nation">
                    <div className="flg" style={{backgroundImage : `url('${item.flags.png}')`}}>
                    </div>
                    <div className="desc">
                      <h3>{item.name.common} {item.translations.kor.common}</h3>
                      <p>Population : <span>{(item.population).toLocaleString()}</span></p>
                      <p>Region : <span>{item.region}</span></p>
                      <p>Capital : <span>{item.capital}</span></p>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Home