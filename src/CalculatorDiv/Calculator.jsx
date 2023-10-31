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
    if (display === '0') return; 
    let newDisplayValue = '';
    
    if (display === String(performCalculation())) {
      newDisplayValue = String(display).slice(0, -1);
  
      if (newDisplayValue === '') {
        newDisplayValue = '0';
      }
    } else {
      newDisplayValue = String(display).slice(0, -1);
    }
  
    setDisplay(newDisplayValue);
  }


  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  const handlePercentage = () => {
    const percentageValue = parseFloat(display) / 100;
    setDisplay(percentageValue.toString());
  };


  return (
    <div className={`calculateWrap ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
       
        <Screen display={display} operator={operator} secondOperand={secondOperand} toggleMode={toggleMode} isDarkMode={isDarkMode} />
        <Button displayContent={displayContent} handleOperator={handleOperator} handleDecimalPoint={handleDecimalPoint} handleEqual={handleEqual} handleClear={handleClear} removeLast={removeLast} handlePercentage={handlePercentage}  />
        </div>
  )
}

export default Calculator