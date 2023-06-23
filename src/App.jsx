import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Header from './components/Header';

function App() {
  const [data, setData] = useState(null);
  const [darkmode, setDarkmode] = useState(false);

  const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
   <BrowserRouter>
    <Header darkmode={darkmode} setDarkmode={setDarkmode} />
    <Routes>
      <Route path='/' element={<Home data={data} darkmode={darkmode} setDarkmode={setDarkmode} />}/>
      <Route path='/detail/:id' element={<Detail data={data} darkmode={darkmode} setDarkmode={setDarkmode} />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
