import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'


function App() {


  return (

    <div >
      <Navbar />
      <ItemListContainer saludo="Bienvenidos a Verde"/>
    </div>

  )
}

export default App
