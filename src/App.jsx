import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import ExternalLinks from './components/Externallinks/Externallinks'
import History from './components/History/History'
import Pastwork from './components/Pastwork/Pastwork'
import Staff from './components/Staff/Staff'


import './App.css'

const App = () => {


  const [activePage, setActivePage] = useState({
    id: '1',
    name: 'home',
    displayName: 'Home',
  })

  const changePage = (targetPage) => {
    setActivePage(targetPage);

  }
  return (
    <>
      <Navbar changePage={changePage} />
      <History activePage={activePage} />
      <Pastwork activePage={activePage} />
      <Staff activePage={activePage} />
      <Contact activePage={activePage} />
      <ExternalLinks activePage={activePage} />
    </>
  )
}

export default App
