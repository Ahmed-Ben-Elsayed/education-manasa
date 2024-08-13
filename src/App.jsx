import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from '../components/navbar/Navbar'
import { Header } from '../components/header/Header'
import { Advert } from '../components/advertment/Advert'
import { Properties } from '../components/properties/Properties'
import { Department } from '../components/departments/Department'
import { Footer } from '../components/footer/Footer'
import {Link , BrowserRouter ,Route ,Routes, useNavigate } from 'react-router-dom' ;
import { Login } from '../components/login/Login'
import { Regiser } from '../components/register/Regiser'
function App() {
  let [dark, setdark] = useState(false);
  const navigate = useNavigate("")
  function setDark() {
    setdark(!dark);
  }
  let [spinner, setspinner] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setspinner(false)
    }, 2000)
  }, [])
  const allow = localStorage.getItem("allow")
  return (
    <>
      <section className='app'>
        {spinner ?
          <div className='loaders'>
            <div className="loader"></div>
          </div>
          :
          <div className={dark ? 'dark' : 'light'}>
            <Routes>
            <Route path='/' element={ <Header  setDark={setDark} dark={dark} />}/>
            <Route path='login' element={<Login/>}/>
            <Route path='Register' element={<Regiser/>}/>
            </Routes>
            <Footer />
          </div>
        }
      </section>
    </>
  )
}

export default App
