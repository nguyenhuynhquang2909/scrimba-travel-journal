  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import NavBar from './components/NavBar'
  import Card from './components/Card'
  import data from './data';

  function App() {
    const journal = data.map(tour => {
      return (
        < Card 
        key={tour.id}
        {...tour}
        />
      )
    })
    return (
      <>
      <NavBar />
      <div>
        {journal}
      </div>
      </>
    )
  }

  export default App
