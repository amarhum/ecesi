import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Registration from './pages/Registration'
import About from './pages/About'

const 
App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  )
}
export default 
App
