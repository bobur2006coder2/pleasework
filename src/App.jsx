import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Section from './Components/Section/Section'
import MapPage from './Components/YandexMap/MapPage'
import './index.css'
<script src="https://api-maps.yandex.ru/2.1/?apikey=510b68c9-76b8-4c7d-a352-4d5daaaaac81&lang=en_RU" type="text/javascript"></script>
export default function App() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-100">

      <Header />
      <MapPage />
      <Section/>
      <Footer/>
      </div>
    </>
  )
}
