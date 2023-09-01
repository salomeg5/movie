import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'




function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <div className="">
        <Header />
        <Slider />
        < ProductionHouse />
        <GenreMovieList />
    </div>
  )
}

export default App
