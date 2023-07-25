import React from 'react'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import LinkComp from './LinkComp'
import '../App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 const RouteComp = () => {
  return (
    <div>

        <BrowserRouter>
        <LinkComp/>
          <div className='page'>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/student' element={<Student/>}/>
            <Route path='/contact' element={<Contact/>}/>
          
          </Routes>
          </div>
        </BrowserRouter>
         
       
    </div>
  )
}
export default RouteComp