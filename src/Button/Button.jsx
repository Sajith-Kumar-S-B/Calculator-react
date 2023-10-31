import React from 'react'
import './Button.css'
function Button({displayContent,handleDecimalPoint,handleOperator,handleEqual,handleClear,removeLast}) {

 
  return (
   <div className='button-div'>
        <div className="buttons">
          <button onClick={handleClear}  className="ac-ce" value="ac" data-type="reset" 
          >AC</button>
          <button onClick={removeLast}  class="ac-ce" value="ce" data-type="reset" 
          ><i className='bx bxs-tag-x'></i></button>
          <button   onClick={handleDecimalPoint}  value="/" data-type="number" >.</button>
          <button className='operator' onClick={() => handleOperator('*')} value="*" data-type="operation"  >x</button>
          <button onClick={()=>displayContent('7')} value="7" data-type="number" >7</button>
          <button  onClick={()=>displayContent('8')} value="8" data-type="number" >8</button>
          <button  onClick={()=>displayContent('9')} value="9" data-type="number" >9</button>
          <button className='operator'  onClick={() => handleOperator('-')}  value="-" data-type="operation" >-</button>
          <button  onClick={()=>displayContent('4')} value="4" data-type="number" >4</button>
          <button  onClick={()=>displayContent('5')} value="5" data-type="number" >5</button>
          <button  onClick={()=>displayContent('6')} value="6" data-type="number">6</button>
          <button className='operator'  onClick={() => handleOperator('+')}  value="+" data-type="operation" >+</button>
          <button  onClick={()=>displayContent('1')} value="1" data-type="number">1</button>
          <button  onClick={()=>displayContent('2')} value="2" data-type="number">2</button>
          <button  onClick={()=>displayContent('3')} value="3" data-type="number" >3</button>
          <button className='operator'  onClick={() => handleOperator('/')}  data-type="operation" >÷</button>
        
          <button  onClick={()=>displayContent('0')} className="zero" value="0" data-type="number" 
          >0</button>
          <button onClick={()=>displayContent('(')} data-type="number" 
          >(</button>
          <button onClick={()=>displayContent(')')}  data-type="number" >)</button>
          <button  onClick={handleEqual} className="equal" value="=" data-type="operation" >=</button>
        </div>
   </div>
  )
}

export default Button