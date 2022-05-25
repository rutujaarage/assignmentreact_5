import React from 'react'
import './Style.css'
const HigherorderComponent= () => {
  return (
    <div className='higherorder'>
        <h1>HigherorderComponent:=</h1>
        <br/>
          <li>The Higher-Order component is simply called HOC.</li>
          <li> A Higher-Order component is a function that takes a component and returns a new component by adding additional functionalities to the component.</li>
          <li> HOC is wrapped in the original component.</li>
          <li>Higher-Order component is an advanced technique in ReactJS for reusing component logic.</li>
          <li>HOCs are not part of the React API. But, It is a pattern that emerges from React’s compositional nature.</li>
        
    </div>
  )
}

export default HigherorderComponent