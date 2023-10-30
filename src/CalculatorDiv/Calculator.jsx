import React from 'react'
import './Calculator.css';
import Screen from '../screen/Screen';
import Button from '../Button/Button';

function Calculator() {
  return (
    <div className='calculateWrap'>
        <Screen/>
        <Button/>
        </div>
  )
}

export default Calculator