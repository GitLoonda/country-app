import { Link } from "react-router-dom"

function Header( { darkmode, setDarkmode } ) {
  const flg = () => {
    setDarkmode(!darkmode)
  }

  return (
    <header className={`${darkmode ? 'dark' : ''}`}>
      <h1><Link to='/'>Where in the world?</Link></h1>
      <button className="btn" onClick={flg}>Dark Mode</button>
    </header>
  )
}

export default Header