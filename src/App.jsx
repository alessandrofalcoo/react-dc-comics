import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import navLinks from './data/nav_links.js'
import Main from './components/Main.jsx'
import comics from './data/comics.js'
import Footer from './components/Footer.jsx'
import footerLinks from './data/footer_links.js'


function App() {
  return (
    <>
      <Header navEl={navLinks} />
      <Main comic={comics} />
      <Footer firstList={footerLinks} secondList={footerLinks} thirdList={footerLinks} fourthList={footerLinks} />
    </>
  )
}

export default App
