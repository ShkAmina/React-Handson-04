import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const LinkComp = () => {
  return (
    <div className='navbar'>
        <Link className='Link' to='/'>Home</Link>
        <Link className='Link' to='/student'>Student</Link>
        <Link className='Link' to='/contact'>Contact</Link>
    </div>
  )
}

export default LinkComp