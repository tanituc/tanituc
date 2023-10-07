import { useState } from 'react'
import PersonalCard from './components/PersonalCard'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonalCard
        image="ruta-a-tu-imagen.jpg"
        name="Tu Nombre"
        age="25"
        email="cordobaestanislaos@gmail.com"
      /> 
    </>
  )
}

export default App
