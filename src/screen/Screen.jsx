import React from 'react'
import './Screen.css'
function Screen({display,operator,secondOperand,toggleMode,isDarkMode}) {
  return (
    <div class="screenBase">
       <div className='header'>
          <h3>Calculator</h3>
        <button onClick={toggleMode}>
          {isDarkMode ? <i class="fa-solid fa-sun  fa-xl " style={{color:'white'}}></i> :  <i class="fa-solid fa-moon  fa-xl " style={{color:''}}></i>}
        </button>
        </div>
      
     <div className='screen'>
    
        <div >
          {display}
        </div>
        {!secondOperand ? null : (
            <div className="operator">{operator}</div>
          )}
     </div>
      
  </div>
  )
}

export default Screen