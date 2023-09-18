import './App.css'
import NavBar from './components/index/NavBar'
import FoodGroupButtons from './components/index/FoodGroupButtons'
import Menu from './components/index/Menu'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        {/* This is for the cart and login pages, gonna need to finish later. */}
        <Route path='/'/>
      </Routes>
      <FoodGroupButtons/>
      <Menu/>
    </div>
  )
}

export default App
