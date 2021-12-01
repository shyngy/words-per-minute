import React from 'react'
import keyboardImg from '../assets/images/keyboard.svg'
import TimeOut from './TimeOut'
const Navbar = () => {
  return (
    <div className="navbar">
      <span>
        <img className="navbar-logo" src={keyboardImg} alt="wpm" />
        <span className="wpm">WPM</span>
      </span>
      <TimeOut />
    </div>
  )
}

export default Navbar
