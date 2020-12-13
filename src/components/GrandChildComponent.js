import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function GrandChildComponent() {
  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <>
      <div>The theme is {theme}</div>
      <button onClick={() => setTheme('light')}>
        Change to Light theme
      </button>
    </>
  )
}

export default GrandChildComponent
