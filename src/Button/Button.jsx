import React from 'react'
import './Button.css'
function Button() {
  return (
   <div className='button-div'>
        <div className="buttons">
          <button className="ac-ce" value="ac" data-type="reset" 
          >AC</button>
          <button class="ac-ce" value="ce" data-type="reset" 
          ><i className='bx bxs-tag-x'></i></button>
          <button value="/" data-type="operation" >÷</button>
          <button value="*" data-type="operation"  >x</button>
          <button value="7" data-type="number" >7</button>
          <button value="8" data-type="number" >8</button>
          <button value="9" data-type="number" >9</button>
          <button value="-" data-type="operation" >-</button>
          <button value="4" data-type="number" >4</button>
          <button value="5" data-type="number" >5</button>
          <button value="6" data-type="number">6</button>
          <button value="+" data-type="operation" >+</button>
          <button value="1" data-type="number">1</button>
          <button value="2" data-type="number">2</button>
          <button value="3" data-type="number" >3</button>
          <button value="3" data-type="number" >.</button>
          <button className="hidden">_</button>
          <button className="zero" value="0" data-type="number" 
          >0</button>
          <button value="." data-type="number" 
          >(</button>
          <button value="." data-type="number" >)</button>
          <button className="equal" value="=" data-type="operation" >=</button>
        </div>
   </div>
  )
}

export default Button