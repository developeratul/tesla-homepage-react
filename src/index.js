import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './styles/style.css'
import './styles/responsive.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
ReactDOM.render(
  <>
    <App />
  </>,
  document.querySelector('#root'),
)
