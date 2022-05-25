import React from 'react'
import './Style.css'
const Pure_component = () => {
  return (
    <div className='purecom'><h1>Pure Component=:</h1>
               <br/>
          A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components.
    </div>
  )
}

export default Pure_component