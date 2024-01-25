import React from 'react'
import Nav from './layout/nav/Nav'
import Dashboard from './layout/dashboard/Dashboard'
import Card from './components/card/Card'
import "./App.css"

const App = () => {
  return (
    <div>
      <Nav/>
      <div className='main'>
        <Dashboard/>
        <Card/>
      </div>
    </div>
  )
}

export default App