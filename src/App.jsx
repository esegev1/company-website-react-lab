import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import ExternalLinks from './components/Externallinks/Externallinks'
import History from './components/History/History'
import Pastwork from './components/Pastwork/Pastwork'
import Staff from './components/Staff/Staff'


import './App.css'

const App = () => {


  const [activePage, setActivePage] = useState('home')

  const changePage = (targetPage) => {
    setActivePage(targetPage);
  }

  console.log(`activePage: ${activePage.name}`);
  return (
    <>
      <Navbar changePage={changePage} />
      <Home activePage={activePage} />
      <History activePage={activePage} />
      <Pastwork activePage={activePage} />
      <Staff activePage={activePage} />
      <Contact activePage={activePage} />
      <ExternalLinks activePage={activePage} />
    </>
  )
}

export default App
