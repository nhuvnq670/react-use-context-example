import React from 'react'
import { ThemeContext } from '../App'

class GrandChildComponent extends React.Component {
  render(){
    return (
      <ThemeContext.Consumer>
        {
          ({theme, setTheme}) => {
            return (
              <>
                <div>The theme is {theme}</div>
                <button onClick={() => setTheme('light')}>
                  Change to Light theme
                </button>
              </>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

export default GrandChildComponent
