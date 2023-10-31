import React, { useState } from 'react'
import './Calculator.css';
import Screen from '../screen/Screen';
import Button from '../Button/Button';
import { toast } from 'react-toastify';

function Calculator() {
  const [display,setDisplay] = useState('0')
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [secondOperand,setSecondOperand] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false);


  const displayContent =(digit)=>{
    if(secondOperand){
      setDisplay(digit)
    setSecondOperand(false)
    }else{

      setDisplay(display === '0' ? digit : display + digit)

    }
    
  }

  const handleOperator = (nextOperator)=>{
    const inputValue = parseFloat(display);
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplay(result);
      setFirstOperand(result);
    }
    

    setSecondOperand(true);
    
    setOperator(nextOperator);

  }


  const performCalculation = () => {
    const inputValue = parseFloat(display);

    switch (operator) {
      case '+':
        return firstOperand + inputValue;
      case '-':
        return firstOperand - inputValue;
      case '*':
        return firstOperand * inputValue;
      case '/':
        if (inputValue === 0) {
          toast.info('Cannot divide by zero');
          return '0';
        }
        return firstOperand / inputValue;
      default:
        return inputValue;
    }
  };

  const handleDecimalPoint = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };


  const handleEqual = () => {
    if (operator) {
      const result = performCalculation();
      setDisplay(result);
      setFirstOperand(result);
      setOperator(null);
      setSecondOperand(false);
    }
  };



  const handleClear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setSecondOperand(false);
  };

  const removeLast = ()=>{
    setDisplay(display.slice(0,-1))
  }


  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div className={`calculateWrap ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
       
        <Screen display={display} operator={operator} secondOperand={secondOperand} toggleMode={toggleMode} isDarkMode={isDarkMode} />
        <Button displayContent={displayContent} handleOperator={handleOperator} handleDecimalPoint={handleDecimalPoint} handleEqual={handleEqual} handleClear={handleClear} removeLast={removeLast}  />
        </div>
  )
}

export default Calculator