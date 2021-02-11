import React, { useState } from 'react'
import Logo from '../img/logo.png'

function Nav() {
  const [nav, setNav] = useState(false)
  const sideNav = document.querySelector('#SideNav')
  const NavOpen = () => {
    document.querySelector('#SideNav').style.transform = 'translateX(0)'
    document.querySelector('.line1').style.transform =
      'rotate(-45deg) translate(-5px, 6px)'
    document.querySelector('.line2').style.opacity = '0'
    document.querySelector('.line3').style.transform =
      'rotate(45deg) translate(-5px, -6px)'
    document.querySelector('body').style.overflowY = 'hidden'
    setNav(!nav)
  }
  const NavClose = () => {
    document.querySelector('#SideNav').style.transform = 'translateX(100%)'
    document.querySelector('.line1').style.transform =
      'rotate(0deg) translate(0px, 0px)'
    document.querySelector('.line2').style.opacity = '3'
    document.querySelector('.line3').style.transform =
      'rotate(0deg) translate(0px, 0px)'
    document.querySelector('body').style.overflowY = 'scroll'
    setNav(!nav)
  }
  return (
    <>
      <nav>
        <div id="NavContentWrapper">
          <div id="TopLogo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul id="Models">
            <li>MODEL S</li>
            <li>MODEL 3</li>
            <li>MODEL X</li>
            <li>MODEL Y</li>
            <li>SOLAR ROOF</li>
            <li>SOLAR PANELS</li>
          </ul>
          <ul id="Others">
            <li>SHOP</li>
            <li>TESLA ACCOUNT</li>
            <li>
              <div id="Bars" onClick={nav ? NavClose : NavOpen}>
                <div className="line1 line"></div>
                <div className="line2 line"></div>
                <div className="line3 line"></div>
              </div>
            </li>
          </ul>
          <div id="SideNav">
            <ul>
              <li>EXISTING INVENTORY</li>
              <li>USED INVENTORY</li>
              <li>TRADE-IN</li>
              <li>CYBERTRUCK</li>
              <li>ROADSTER</li>
              <li>SEMI</li>
              <li>CHARGING</li>
              <li>POWERWALL</li>
              <li>COMMERCIAL SOLAR</li>
              <li>TEST DRIVE</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
