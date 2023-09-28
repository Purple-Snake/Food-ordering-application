import './App.css'
import './tabletApp.css'
import NavBar from './components/index/NavBar'
import Home from './components/index/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        {/* This is for the cart and login pages, gonna need to finish later. */}
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/cart' element={<Cart/>}/> */}
      </Routes>
    </div>
  )
}

export default App
